/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SittingDayQueryParameters = {
    /**
     * the parliamentary house (Commons or Lords)
     */
    House?: SittingDayQueryParameters.House;
    /**
     * the date to search from (yyyy-mm-dd)
     */
    StartDate?: string;
    /**
     * the date to search to (yyyy-mm-dd)
     */
    EndDate?: string;
    /**
     * how many results to skip (Default is 0)
     */
    Skip?: number;
    /**
     * how many results to return per page (maximum 100)
     */
    Take?: number;
    /**
     * how to order results (SittingDateAsc or SittingDateDesc)
     */
    OrderBy?: SittingDayQueryParameters.OrderBy;
    /**
     * whether or not to only include results with sitting sections
     */
    HasSittingSections?: boolean;
};
export namespace SittingDayQueryParameters {
    /**
     * the parliamentary house (Commons or Lords)
     */
    export enum House {
        COMMONS = 'Commons',
        LORDS = 'Lords',
    }
    /**
     * how to order results (SittingDateAsc or SittingDateDesc)
     */
    export enum OrderBy {
        SITTING_DATE_ASC = 'SittingDateAsc',
        SITTING_DATE_DESC = 'SittingDateDesc',
    }
}

