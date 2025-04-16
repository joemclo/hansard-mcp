import { HansardService } from '../services/hansard.service.js';
import fetch from 'node-fetch';
import type { FullSearchResult, SearchContributionsQueryResult } from '../types/hansard.js';

// Mock node-fetch
jest.mock('node-fetch');

describe('HansardService', () => {
  let hansardService: HansardService;
  let mockFetch: jest.MockedFunction<typeof fetch>;

  const mockResponse = (status: number, data: any) => {
    return {
      ok: status >= 200 && status < 300,
      status,
      statusText: status === 200 ? 'OK' : 'Error',
      json: jest.fn().mockResolvedValue(data),
    };
  };

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();

    // Setup mock fetch
    mockFetch = fetch as jest.MockedFunction<typeof fetch>;

    // Create service instance
    hansardService = new HansardService('https://test-hansard-api.parliament.uk');
  });

  describe('searchBasic', () => {
    const mockSearchResult: FullSearchResult = {
      SearchTerms: ['climate'],
      Contributions: [{ MemberName: 'Test Member', ContributionText: 'Test speech' }],
      WrittenStatements: [],
      WrittenAnswers: [],
      Corrections: [],
      Petitions: [],
      Debates: [],
      Divisions: [],
      Committees: [],
    };

    it('should call the correct endpoint with parameters', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, mockSearchResult) as any);

      const params = { SearchTerm: 'climate change', Take: 5, House: 'Commons' };
      const result = await hansardService.searchBasic(params);

      expect(mockFetch).toHaveBeenCalledWith(
        'https://test-hansard-api.parliament.uk/search.json?SearchTerm=climate+change&Take=5&House=Commons',
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({ Accept: 'application/json' }),
        })
      );
      expect(result).toEqual(mockSearchResult);
    });

    it('should handle API errors', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(500, { error: 'Server error' }) as any);

      const params = { SearchTerm: 'test' };
      await expect(hansardService.searchBasic(params)).rejects.toThrow('API request failed');
    });

    it('should handle network errors', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const params = { SearchTerm: 'test' };
      await expect(hansardService.searchBasic(params)).rejects.toThrow('Network error');
    });
  });

  describe('searchByMember', () => {
    const mockSearchResult: FullSearchResult = {
      SearchTerms: ['member'],
      Contributions: [{ MemberName: 'Test Member', ContributionText: 'Test speech by member' }],
      WrittenStatements: [],
      WrittenAnswers: [],
      Corrections: [],
      Petitions: [],
      Debates: [],
      Divisions: [],
      Committees: [],
    };

    it('should call the correct endpoint with member ID', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, mockSearchResult) as any);

      const memberId = 1234;
      const result = await hansardService.searchByMember(memberId, { Take: 5 });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://test-hansard-api.parliament.uk/search/membercontributionsummary.json?MemberId=1234&Take=5',
        expect.any(Object)
      );
      expect(result).toEqual(mockSearchResult);
    });
  });

  describe('searchByMemberName', () => {
    it('should format the search term correctly for member name', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, {}) as any);

      const memberName = 'John Smith';
      await hansardService.searchByMemberName(memberName, { Take: 5 });

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('SearchTerm=spokenby%3AJohn+Smith'),
        expect.any(Object)
      );
    });
  });

  describe('searchByDebate', () => {
    it('should format the search term correctly for debate', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, {}) as any);

      const debateTitle = 'Climate Change';
      await hansardService.searchByDebate(debateTitle, { Take: 5 });

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('SearchTerm=debate%3AClimate+Change'),
        expect.any(Object)
      );
    });
  });

  describe('searchByWords', () => {
    it('should format the search term correctly for words', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, {}) as any);

      const words = ['climate', 'change', 'emergency'];
      await hansardService.searchByWords(words, { Take: 5 });

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('SearchTerm=words%3Aclimate+change+emergency'),
        expect.any(Object)
      );
    });
  });

  describe('search', () => {
    it('should combine multiple directives with AND', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, {}) as any);

      await hansardService.search(
        { Take: 5 },
        {
          SpokenBy: 'John Smith',
          Debate: 'Climate Change',
          Words: ['urgent', 'action'],
        }
      );

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(
          'SearchTerm=spokenby%3AJohn+Smith+AND+debate%3AClimate+Change+AND+words%3Aurgent+action'
        ),
        expect.any(Object)
      );
    });

    it('should handle empty directives', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, {}) as any);

      await hansardService.search({ Take: 5 }, {});

      expect(mockFetch).toHaveBeenCalledWith(
        'https://test-hansard-api.parliament.uk/search.json?Take=5&SearchTerm=',
        expect.any(Object)
      );
    });
  });

  describe('searchContributions', () => {
    const mockContributionsResult: SearchContributionsQueryResult = {
      SearchTerms: ['climate'],
      Results: [{ MemberName: 'Test Member', ContributionText: 'Test contribution' }],
      TotalResultCount: 1,
    };

    it('should call the correct endpoint for contribution type', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, mockContributionsResult) as any);

      const result = await hansardService.searchContributions('Spoken', { Take: 5 });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://test-hansard-api.parliament.uk/search/contributions/Spoken.json?Take=5',
        expect.any(Object)
      );
      expect(result).toEqual(mockContributionsResult);
    });

    it('should combine search parameters with directives', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(200, mockContributionsResult) as any);

      await hansardService.searchContributions(
        'Written',
        { Take: 5, House: 'Commons' },
        {
          SpokenBy: 'John Smith',
          Debate: 'Climate Change',
        }
      );

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/search/contributions/Written.json'),
        expect.any(Object)
      );
      expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('Take=5'), expect.any(Object));
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('House=Commons'),
        expect.any(Object)
      );
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('SearchTerm=spokenby%3AJohn+Smith+AND+debate%3AClimate+Change'),
        expect.any(Object)
      );
    });
  });

  describe('error handling', () => {
    it('should handle JSON parsing errors', async () => {
      const badResponse = {
        ok: true,
        status: 200,
        statusText: 'OK',
        json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
      };

      mockFetch.mockResolvedValueOnce(badResponse as any);

      await expect(hansardService.searchBasic({ SearchTerm: 'test' })).rejects.toThrow(
        'Invalid JSON'
      );
    });

    it('should include status code in error message for failed requests', async () => {
      mockFetch.mockResolvedValueOnce(mockResponse(404, { error: 'Not Found' }) as any);

      await expect(hansardService.searchBasic({ SearchTerm: 'test' })).rejects.toThrow(
        'API request failed: Error (404)'
      );
    });
  });
});
