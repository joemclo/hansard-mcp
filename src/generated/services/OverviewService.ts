/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalendarItem } from '../models/CalendarItem';
import type { LinkedSittingDates } from '../models/LinkedSittingDates';
import type { PdfInfo } from '../models/PdfInfo';
import type { SectionTree } from '../models/SectionTree';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OverviewService {
    /**
     * Get list of speaker ids for given sitting date, house and Hansard section name
     * Get list of speaker ids for given sitting date, house and Hansard section name
     * @param format the required output format (xml or json)
     * @param date Sitting date (yyyy-mm-dd)
     * @param house the parliamentary house (Commons or Lords)
     * @param section Hansard section name e.g. CWA, QWA, WMS
     * @returns number OK
     * @throws ApiError
     */
    public static overviewGetSpeakersList(
        format: string,
        date: string,
        house: string,
        section: string,
    ): CancelablePromise<Array<number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/speakerslist/{date}/{house}.{format}',
            path: {
                'format': format,
                'date': date,
                'house': house,
            },
            query: {
                'section': section,
            },
        });
    }
    /**
     * Get status information on which house and sitting date is currently being processed
     * Get status information on which house and sitting date is currently being processed
     * @param format the required output format (xml or json)
     * @returns string OK
     * @throws ApiError
     */
    public static overviewGetCurrentlyProcessing(
        format: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/currentlyprocessing.{format}',
            path: {
                'format': format,
            },
        });
    }
    /**
     * Get the last sitting date for given house.
     * Get the last sitting date for given house.
     * @param house the parliamentary house (Commons or Lords)
     * @param format the required output format (xml or json)
     * @returns string OK
     * @throws ApiError
     */
    public static overviewGetLastSittingDate(
        house: string,
        format: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/lastsittingdate.{format}',
            path: {
                'format': format,
            },
            query: {
                'house': house,
            },
        });
    }
    /**
     * Gets the year of the earliest sitting date in Hansard
     * Gets the year of the earliest sitting date in Hansard
     * @param format the required output format (xml or json)
     * @returns number OK
     * @throws ApiError
     */
    public static overviewGetFirstYear(
        format: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/firstyear.{format}',
            path: {
                'format': format,
            },
        });
    }
    /**
     * Get the previous and next sitting days given a house and date.
     * Get the previous and next sitting days given a house and date. Returns only the previous sitting day if there is no future day with any Hansard data.
     * @param format the required output format (xml or json)
     * @param date the date from which to calculate the previous and next sitting dates (yyyy-mm-dd)
     * @param house the parliamentary house (Commons or Lords)
     * @returns LinkedSittingDates OK
     * @throws ApiError
     */
    public static overviewGetLinkedSittingDates(
        format: string,
        date: string,
        house: string,
    ): CancelablePromise<LinkedSittingDates> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/linkedsittingdates.{format}',
            path: {
                'format': format,
            },
            query: {
                'date': date,
                'house': house,
            },
        });
    }
    /**
     * Get all sitting dates given a year, month and house.
     * Get all sitting dates given a year, month and house.
     * @param format the required output format (xml or json)
     * @param year the year for which to return sitting dates (yyyy)
     * @param month the month for which to return sitting dates (mm)
     * @param house the parliamentary house (Commons or Lords)
     * @returns CalendarItem OK
     * @throws ApiError
     */
    public static overviewDatesWithSittings(
        format: string,
        year: number,
        month: number,
        house: string,
    ): CancelablePromise<Array<CalendarItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/calendar.{format}',
            path: {
                'format': format,
            },
            query: {
                'year': year,
                'month': month,
                'house': house,
            },
        });
    }
    /**
     * Get Hansard name for debate sections given the sitting date and house
     * Get Hansard name for debate sections given the sitting date and house. Note that Commons Chamber is returned as 'Debate'.
     * @param format the required output format (xml or json)
     * @param date date of debate (yyyy-mm-dd)
     * @param house the parliamentary house (Commons or Lords)
     * @returns string OK
     * @throws ApiError
     */
    public static overviewSectionsForDay(
        format: string,
        date: string,
        house: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/sectionsforday.{format}',
            path: {
                'format': format,
            },
            query: {
                'date': date,
                'house': house,
            },
        });
    }
    /**
     * Get section hierarchy given Hansard section name, sitting date and house.
     * Get section hierarchy given Hansard section name, sitting date and house.
     * @param format the required output format (xml or json)
     * @param section the Hansard section name<br />(Hansard section names are returned from ‘Sections For Day’ operation)
     * @param date The sitting date (yyyy-mm-dd)
     * @param house the parliamentary house (Commons or Lords)
     * @param groupByOwner whether or not to group the results by owner
     * @returns SectionTree OK
     * @throws ApiError
     */
    public static overviewGetSectionTrees(
        format: string,
        section: string,
        date: string,
        house: string,
        groupByOwner?: boolean,
    ): CancelablePromise<Array<SectionTree>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/sectiontrees.{format}',
            path: {
                'format': format,
            },
            query: {
                'section': section,
                'date': date,
                'house': house,
                'groupByOwner': groupByOwner,
            },
        });
    }
    /**
     * Get pdf data (titles and sizes) for a given sitting date and house.
     * Get pdf data (titles and sizes) for a given sitting date and house.
     * @param format the required output format (xml or json)
     * @param date the sitting date (yyyy-mm-dd)
     * @param house the parliamentary house (Commons or Lords)
     * @returns PdfInfo OK
     * @throws ApiError
     */
    public static overviewPdfsForDay(
        format: string,
        date: string,
        house: string,
    ): CancelablePromise<Array<PdfInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/overview/pdfsforday.{format}',
            path: {
                'format': format,
            },
            query: {
                'date': date,
                'house': house,
            },
        });
    }
}
