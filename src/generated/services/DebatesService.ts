/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Debate } from '../models/Debate';
import type { DivisionItem } from '../models/DivisionItem';
import type { DivisionOverview } from '../models/DivisionOverview';
import type { GetMemberContributionDetailsResult } from '../models/GetMemberContributionDetailsResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DebatesService {
    /**
     * Get a list of speaker id’s for a given debate section
     * Get a list of speaker id’s for a given debate section by External Id
     * @param format the required output format (xml or json)
     * @param debateSectionExtId the External ID of the required debate section
     * @returns number OK
     * @throws ApiError
     */
    public static debatesGetSpeakersList(
        format: string,
        debateSectionExtId: string,
    ): CancelablePromise<Array<number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debates/speakerslist/{debateSectionExtId}.{format}',
            path: {
                'format': format,
                'debateSectionExtId': debateSectionExtId,
            },
        });
    }
    /**
     * Get divisions for a given debate section
     * Get divisions for a given debate section by External Id
     * @param format the required output format (xml or json)
     * @param debateSectionExtId the External ID of the required debate section
     * @returns DivisionOverview OK
     * @throws ApiError
     */
    public static debatesGetDivisionsList(
        format: string,
        debateSectionExtId: string,
    ): CancelablePromise<Array<DivisionOverview>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debates/divisions/{debateSectionExtId}.{format}',
            path: {
                'format': format,
                'debateSectionExtId': debateSectionExtId,
            },
        });
    }
    /**
     * Get all data related to a division
     * Get all data (debate title, aye/noe count, house and a record of how members voted) related to a division.  Results can be filtered to show EVEL (English Votes for English Laws) voters only
     * @param divisionExtId the External ID of the required division
     * @param format the required output format (xml or json)
     * @param isEvel whether or not to return EVEL (English votes for English laws) voters only
     * @returns DivisionItem OK
     * @throws ApiError
     */
    public static debatesGetDivision(
        divisionExtId: string,
        format: string,
        isEvel?: boolean,
    ): CancelablePromise<DivisionItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debates/division/{divisionExtId}.{format}',
            path: {
                'divisionExtId': divisionExtId,
                'format': format,
            },
            query: {
                'isEvel': isEvel,
            },
        });
    }
    /**
     * Get data for a debate section
     * Get data (debate title, date, location, house and a record of each member’s contribution) related to a debate section.
     * @param debateSectionExtId the External ID of the required debate section
     * @param format the required output format (xml or json)
     * @returns Debate OK
     * @throws ApiError
     */
    public static debatesGetDebate(
        debateSectionExtId: string,
        format: string,
    ): CancelablePromise<Debate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debates/debate/{debateSectionExtId}.{format}',
            path: {
                'debateSectionExtId': debateSectionExtId,
                'format': format,
            },
        });
    }
    /**
     * Get top level debate id given the id of its child debate section
     * Get top level debate id given the id of its child debate section.
     * @param debateSectionExtId the External ID of the required debate section
     * @param format the required output format (xml or json)
     * @returns string OK
     * @throws ApiError
     */
    public static debatesGetTopLevelDebateId(
        debateSectionExtId: string,
        format: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debates/topleveldebateid/{debateSectionExtId}.{format}',
            path: {
                'debateSectionExtId': debateSectionExtId,
                'format': format,
            },
        });
    }
    /**
     * Get top level debate given the house, sitting date and section title
     * Get top level debate given the house, sitting date and section title
     * @param house the parliamentary house (Commons or Lords)
     * @param date sitting date of the required debate (yyyy-mm-dd)
     * @param sectionTitle section title of the required debate
     * @param format the required output format (xml or json)
     * @returns Debate OK
     * @throws ApiError
     */
    public static debatesGetTopLevelDebateByTitle(
        house: string,
        date: string,
        sectionTitle: string,
        format: string,
    ): CancelablePromise<Debate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debates/topleveldebatebytitle.{format}',
            path: {
                'format': format,
            },
            query: {
                'house': house,
                'date': date,
                'sectionTitle': sectionTitle,
            },
        });
    }
    /**
     * Get debate contribuitions for a Member
     * @param memberId the MNIS Id of the Member
     * @param format the required output format (xml or json)
     * @param debateSectionExtId the External ID of the required debate section
     * @returns GetMemberContributionDetailsResult OK
     * @throws ApiError
     */
    public static debatesGetMemberContributionDetails(
        memberId: number,
        format: string,
        debateSectionExtId: string,
    ): CancelablePromise<Array<GetMemberContributionDetailsResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debates/memberdebatecontributions/{memberId}.{format}',
            path: {
                'memberId': memberId,
                'format': format,
            },
            query: {
                'debateSectionExtId': debateSectionExtId,
            },
        });
    }
}
