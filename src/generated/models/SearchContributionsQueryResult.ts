/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchReferencesItem } from './SearchReferencesItem';
export type SearchContributionsQueryResult = {
    SearchTerms?: Array<string>;
    SpokenResultCount?: number;
    WrittenResultCount?: number;
    CorrectionsResultCount?: number;
    DivisionsResultCount?: number;
    Results?: Array<SearchReferencesItem>;
    TotalResultCount?: number;
};

