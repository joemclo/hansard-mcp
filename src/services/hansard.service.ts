import fetch from 'node-fetch';
import type {
  FullSearchResult,
  SearchQueryParameters,
  HansardSearchDirectives,
  SearchContributionsQueryResult,
} from '../types/hansard.js';
import { logger } from '../utils/logger.js';

export class HansardService {
  constructor(private baseUrl: string = 'https://hansard-api.parliament.uk') {
    logger.info('Hansard service initialized', { baseUrl });
  }

  private buildQueryString(params: Record<string, any>): string {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, value.toString());
      }
    });
    return queryParams.toString();
  }

  private async makeRequest<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const queryString = params ? this.buildQueryString(params) : '';
    const url = `${this.baseUrl}${endpoint}${queryString ? `?${queryString}` : ''}`;

    logger.info('Making Hansard API request', {
      endpoint,
      url,
      params,
    });

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const error = new Error(`API request failed: ${response.statusText} (${response.status})`);
        logger.error('Hansard API request failed', {
          endpoint,
          url,
          status: response.status,
          statusText: response.statusText,
          error: error.message,
        });
        throw error;
      }

      const data = (await response.json()) as T;
      logger.info('Hansard API request successful', {
        endpoint,
        url,
        responseSize: JSON.stringify(data).length,
      });

      return data;
    } catch (error) {
      logger.error('Hansard API request error', {
        endpoint,
        url,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      throw error;
    }
  }

  async searchBasic(params: SearchQueryParameters): Promise<FullSearchResult> {
    return this.makeRequest<FullSearchResult>('/search.json', params);
  }

  async searchByMember(
    memberId: number,
    params?: Partial<SearchQueryParameters>
  ): Promise<FullSearchResult> {
    return this.makeRequest<FullSearchResult>('/search/membercontributionsummary.json', {
      MemberId: memberId,
      ...params,
    });
  }

  async searchByMemberName(
    memberName: string,
    params?: Partial<SearchQueryParameters>
  ): Promise<FullSearchResult> {
    return this.makeRequest<FullSearchResult>('/search.json', {
      SearchTerm: `spokenby:${memberName}`,
      ...params,
    });
  }

  async searchByDebate(
    debateTitle: string,
    params?: Partial<SearchQueryParameters>
  ): Promise<FullSearchResult> {
    return this.makeRequest<FullSearchResult>('/search.json', {
      SearchTerm: `debate:${debateTitle}`,
      ...params,
    });
  }

  async searchByWords(
    words: string[],
    params?: Partial<SearchQueryParameters>
  ): Promise<FullSearchResult> {
    return this.makeRequest<FullSearchResult>('/search.json', {
      SearchTerm: `words:${words.join(' ')}`,
      ...params,
    });
  }

  async search(
    params: SearchQueryParameters,
    directives: HansardSearchDirectives
  ): Promise<FullSearchResult> {
    const searchTerms = [];
    if (params.SearchTerm) searchTerms.push(params.SearchTerm);
    if (directives.SpokenBy) searchTerms.push(`spokenby:${directives.SpokenBy}`);
    if (directives.Debate) searchTerms.push(`debate:${directives.Debate}`);
    if (directives.Words?.length) searchTerms.push(`words:${directives.Words.join(' ')}`);

    const searchParams = {
      ...params,
      SearchTerm: searchTerms.join(' AND '),
    };
    return this.makeRequest<FullSearchResult>('/search.json', searchParams);
  }

  async searchContributions(
    contributionType: 'Spoken' | 'Written' | 'Corrections' | 'Petitions',
    params?: Partial<SearchQueryParameters>,
    directives?: HansardSearchDirectives
  ): Promise<SearchContributionsQueryResult> {
    let searchParams = { ...params };

    if (directives) {
      const searchTerms = [];
      if (searchParams.SearchTerm) searchTerms.push(searchParams.SearchTerm);
      if (directives.SpokenBy) searchTerms.push(`spokenby:${directives.SpokenBy}`);
      if (directives.Debate) searchTerms.push(`debate:${directives.Debate}`);
      if (directives.Words?.length) searchTerms.push(`words:${directives.Words.join(' ')}`);

      searchParams = {
        ...searchParams,
        SearchTerm: searchTerms.length > 0 ? searchTerms.join(' AND ') : undefined,
      };
    }

    return this.makeRequest<SearchContributionsQueryResult>(
      `/search/contributions/${contributionType}.json`,
      searchParams
    );
  }
}
