#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { HansardService } from './services/hansard.service.js';
import { logInfo, logError } from './utils/logger.js';

const server = new McpServer({
  name: 'mcp-hansard',
  version: '1.0.0',
});

const hansardService = new HansardService();

const commonParams = {
  searchTerm: z.string().optional().describe('search term to search for'),
  spokenBy: z
    .string()
    .optional()
    .describe('Filter by the name of the member(MP or Lord) who made the contribution'),
  debate: z
    .string()
    .optional()
    .describe('use debate to get results for debates matching supplied text'),
  words: z
    .array(z.string())
    .default([])
    .describe('Optional list of specific words to search for, each word ANDed together'),
  take: z.number().optional().describe('Maximum number of results to return in a single query'),
  skip: z.number().optional().describe('Number of results to skip for pagination'),
  startDate: z.string().optional().describe('Filter results from this date onwards (yyyy-mm-dd)'),
  endDate: z.string().optional().describe('Filter results up to this date (yyyy-mm-dd)'),
  house: z
    .enum(['Commons', 'Lords'])
    .optional()
    .describe('Filter results by house of Parliament (Commons or Lords)'),
};

server.tool(
  'hansard_search',
  {
    ...commonParams,
    take: z
      .number()
      .optional()
      .describe(
        'Maximum number of results to return in a single query, Note only 4 results are returned for each contribution type, for more results use hansard_contributions_search'
      ),
  },
  async params => {
    try {
      const result = await hansardService.search(
        {
          Take: params.take,
          Skip: params.skip,
          StartDate: params.startDate?.toLowerCase(),
          EndDate: params.endDate?.toLowerCase(),
          House: params.house,
          SearchTerm: params.searchTerm,
        },
        {
          SpokenBy: params.spokenBy,
          Debate: params.debate,
          Words: params.words,
        }
      );
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
        _meta: {
          description:
            'Returns a preview of up to 4 results from each contribution type (Spoken, Written, Corrections, Petitions). For complete results of a specific type, use hansard_contributions_search instead.',
        },
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
      };
    }
  }
);

// Contributions search
server.tool(
  'hansard_contributions_search',
  {
    contributionType: z
      .enum(['Spoken', 'Written', 'Corrections', 'Petitions'])
      .describe('The specific type of contribution to search within (required)'),

    ...commonParams,
  },
  async params => {
    try {
      const result = await hansardService.searchContributions(
        params.contributionType,
        {
          Take: params.take,
          Skip: params.skip,
          StartDate: params.startDate?.toLowerCase(),
          EndDate: params.endDate?.toLowerCase(),
          House: params.house?.toLowerCase(),
          SearchTerm: params.searchTerm,
        },
        {
          SpokenBy: params.spokenBy,
          Debate: params.debate,
          Words: params.words,
        }
      );
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
        _meta: {
          description: 'Returns all matching results for the specified contribution type.',
        },
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
      };
    }
  }
);

async function main() {
  try {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    logInfo('Hansard MCP Server started');

    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      logInfo('Shutting down...');
      process.exit(0);
    });
  } catch (error) {
    logError('Failed to start server:', { error });
    process.exit(1);
  }
}

main();
