/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Member } from './Member';
export type DivisionItem = {
    AyeMembers?: Array<Member>;
    NoeMembers?: Array<Member>;
    Id?: number;
    Time?: string;
    Date?: string;
    DivisionHasTime?: boolean;
    ExternalId?: string;
    AyesCount?: number;
    NoesCount?: number;
    House?: string;
    DebateSection?: string;
    DebateSectionSource?: string;
    Number?: string;
    DebateSectionExtId?: string;
    MemberVotedAye?: boolean;
    TextBeforeVote?: string;
    TextAfterVote?: string;
    EVELType?: number;
    EVELInfo?: string;
    EVELAyesCount?: number;
    EVELNoesCount?: number;
    IsCommitteeDivision?: boolean;
};

