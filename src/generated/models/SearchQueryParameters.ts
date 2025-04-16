/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SearchQueryParameters = {
    /**
     * the parliamentary house (Commons or Lords)
     */
    House?: string;
    /**
     * the date to search from (yyyy-mm-dd)
     */
    StartDate?: string;
    /**
     * the date to search to (yyyy-mm-dd)
     */
    EndDate?: string;
    /**
     * the date to search (yyyy-mm-dd)
     */
    Date?: string;
    /**
     * the unique id of a member (member details are returned from ‘Search Members’ operation)
     */
    MemberId?: number;
    /**
     * the unique id of the division to be searched
     */
    DivisionId?: number;
    /**
     * Hansard identifier
     */
    HansardIdentifier?: string;
    /**
     * the term for which to search
     */
    SearchTerm?: string;
    /**
     * how many results to skip (Default is 0)
     */
    Skip?: number;
    /**
     * how many results to return per page
     */
    Take?: number;
    /**
     * the list of member ids in which to search
     */
    MemberIds?: string;
    /**
     * department to be searched
     */
    Department?: string;
    /**
     * debate type to be searched
     */
    DebateType?: string;
    /**
     * whether or not to include former members
     */
    IncludeFormer?: boolean;
    /**
     * whether or not to include current members
     */
    IncludeCurrent?: boolean;
    /**
     * whether or not to only include results with a division
     */
    WithDivision?: boolean;
    /**
     * the series number in which to search
     */
    SeriesNumber?: number;
    /**
     * the Volume Number in which to search
     */
    VolumeNumber?: number;
    /**
     * the Column number for which to search
     */
    ColumnNumber?: string;
    /**
     * the title of the committee to be searched
     */
    CommitteeTitle?: string;
    /**
     * committee type to be searched
     */
    CommitteeType?: number;
    /**
     * whether or not to include committee divisions
     */
    IncludeCommitteeDivisions?: boolean;
    /**
     * unique id of the section to search
     */
    Section?: number;
    /**
     * output type (List or Group)
     */
    OutputType?: string;
    /**
     * the unique id of the debate section to search
     */
    DebateSectionId?: number;
    /**
     * timeline grouping size. Enter Day, Month or Year
     */
    TimelineGroupingSize?: SearchQueryParameters.TimelineGroupingSize;
    /**
     * order results (SittingDateAsc or SittingDateDesc)
     */
    OrderBy?: SearchQueryParameters.OrderBy;
};
export namespace SearchQueryParameters {
    /**
     * timeline grouping size. Enter Day, Month or Year
     */
    export enum TimelineGroupingSize {
        DAY = 'Day',
        MONTH = 'Month',
        YEAR = 'Year',
    }
    /**
     * order results (SittingDateAsc or SittingDateDesc)
     */
    export enum OrderBy {
        SITTING_DATE_ASC = 'SittingDateAsc',
        SITTING_DATE_DESC = 'SittingDateDesc',
    }
}

