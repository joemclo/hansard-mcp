import type {
  FullSearchResult,
  SearchQueryParameters,
  SearchContributionsQueryResult,
} from '../generated/hansard.generated';

export interface HansardSearchDirectives {
  SpokenBy?: string;
  Debate?: string;
  Words?: string[];
}

export type { FullSearchResult, SearchQueryParameters, SearchContributionsQueryResult };
