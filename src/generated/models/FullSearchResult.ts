/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DivisionOverview } from './DivisionOverview';
import type { Member } from './Member';
import type { SearchCommitteeItem } from './SearchCommitteeItem';
import type { SearchDebateItem } from './SearchDebateItem';
import type { SearchReferencesItem } from './SearchReferencesItem';
export type FullSearchResult = {
    TotalMembers?: number;
    TotalContributions?: number;
    TotalWrittenStatements?: number;
    TotalWrittenAnswers?: number;
    TotalCorrections?: number;
    TotalPetitions?: number;
    TotalDebates?: number;
    TotalCommittees?: number;
    TotalDivisions?: number;
    SearchTerms?: Array<string>;
    Members?: Array<Member>;
    Contributions?: Array<SearchReferencesItem>;
    WrittenStatements?: Array<SearchReferencesItem>;
    WrittenAnswers?: Array<SearchReferencesItem>;
    Corrections?: Array<SearchReferencesItem>;
    Petitions?: Array<SearchDebateItem>;
    Debates?: Array<SearchDebateItem>;
    Divisions?: Array<DivisionOverview>;
    Committees?: Array<SearchCommitteeItem>;
};

