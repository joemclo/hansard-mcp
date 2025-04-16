/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult } from '../models/QueryResult';
import type { TimelineDataItem } from '../models/TimelineDataItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TimelineStatsService {
    /**
     * Get counts for given contribution type and sitting date range.
     * Get counts for given contribution type and sitting date range.
     * Counts are by given TimelineGroupingSize (Day, Month or Year), house, contribution type,
     * search term, optional memberid and whether this is a debates search
     * <br /><br /><br />
     * The search term can be simple text or it can contain directives for advanced searches.<br />
     * you can also connect multiple search directives with AND<br />
     * use spokenby:name to count times when named person spoke<br />
     * use debate:debate to count debates matching supplied text<br />
     * use words:words to count occurrences of specified words<br />
     * @param format the required output format (xml or json)
     * @param contributionType the type of contribution to return (Spoken, Written, Corrections or Petitions
     * @param isDebatesSearch whether or not to search debates
     * @param queryParametersHouse the parliamentary house (Commons or Lords)
     * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
     * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
     * @param queryParametersDate the date to search (yyyy-mm-dd)
     * @param queryParametersMemberId the unique id of a member (member details are returned from ‘Search Members’ operation)
     * @param queryParametersDivisionId the unique id of the division to be searched
     * @param queryParametersHansardIdentifier Hansard identifier
     * @param queryParametersSearchTerm the term for which to search
     * @param queryParametersSkip how many results to skip (Default is 0)
     * @param queryParametersTake how many results to return per page
     * @param queryParametersMemberIds the list of member ids in which to search
     * @param queryParametersDepartment department to be searched
     * @param queryParametersDebateType debate type to be searched
     * @param queryParametersIncludeFormer whether or not to include former members
     * @param queryParametersIncludeCurrent whether or not to include current members
     * @param queryParametersWithDivision whether or not to only include results with a division
     * @param queryParametersSeriesNumber the series number in which to search
     * @param queryParametersVolumeNumber the Volume Number in which to search
     * @param queryParametersColumnNumber the Column number for which to search
     * @param queryParametersCommitteeTitle the title of the committee to be searched
     * @param queryParametersCommitteeType committee type to be searched
     * @param queryParametersIncludeCommitteeDivisions whether or not to include committee divisions
     * @param queryParametersSection unique id of the section to search
     * @param queryParametersOutputType output type (List or Group)
     * @param queryParametersDebateSectionId the unique id of the debate section to search
     * @param queryParametersTimelineGroupingSize timeline grouping size. Enter Day, Month or Year
     * @param queryParametersOrderBy order results (SittingDateAsc or SittingDateDesc)
     * @returns QueryResult<TimelineDataItem> OK
     * @throws ApiError
     */
    public static timelineStatsQuery(
        format: string,
        contributionType?: 'Spoken' | 'Written' | 'Corrections' | 'Petitions' | 'WrittenAnswers' | 'Divisions',
        isDebatesSearch?: boolean,
        queryParametersHouse?: string,
        queryParametersStartDate?: string,
        queryParametersEndDate?: string,
        queryParametersDate?: string,
        queryParametersMemberId?: number,
        queryParametersDivisionId?: number,
        queryParametersHansardIdentifier?: string,
        queryParametersSearchTerm?: string,
        queryParametersSkip?: number,
        queryParametersTake?: number,
        queryParametersMemberIds?: string,
        queryParametersDepartment?: string,
        queryParametersDebateType?: string,
        queryParametersIncludeFormer?: boolean,
        queryParametersIncludeCurrent?: boolean,
        queryParametersWithDivision?: boolean,
        queryParametersSeriesNumber?: number,
        queryParametersVolumeNumber?: number,
        queryParametersColumnNumber?: string,
        queryParametersCommitteeTitle?: string,
        queryParametersCommitteeType?: number,
        queryParametersIncludeCommitteeDivisions?: boolean,
        queryParametersSection?: number,
        queryParametersOutputType?: string,
        queryParametersDebateSectionId?: number,
        queryParametersTimelineGroupingSize?: 'Day' | 'Month' | 'Year',
        queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc',
    ): CancelablePromise<QueryResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/timeline-stats.{format}',
            path: {
                'format': format,
            },
            query: {
                'contributionType': contributionType,
                'isDebatesSearch': isDebatesSearch,
                'queryParameters.house': queryParametersHouse,
                'queryParameters.startDate': queryParametersStartDate,
                'queryParameters.endDate': queryParametersEndDate,
                'queryParameters.date': queryParametersDate,
                'queryParameters.memberId': queryParametersMemberId,
                'queryParameters.divisionId': queryParametersDivisionId,
                'queryParameters.hansardIdentifier': queryParametersHansardIdentifier,
                'queryParameters.searchTerm': queryParametersSearchTerm,
                'queryParameters.skip': queryParametersSkip,
                'queryParameters.take': queryParametersTake,
                'queryParameters.memberIds': queryParametersMemberIds,
                'queryParameters.department': queryParametersDepartment,
                'queryParameters.debateType': queryParametersDebateType,
                'queryParameters.includeFormer': queryParametersIncludeFormer,
                'queryParameters.includeCurrent': queryParametersIncludeCurrent,
                'queryParameters.withDivision': queryParametersWithDivision,
                'queryParameters.seriesNumber': queryParametersSeriesNumber,
                'queryParameters.volumeNumber': queryParametersVolumeNumber,
                'queryParameters.columnNumber': queryParametersColumnNumber,
                'queryParameters.committeeTitle': queryParametersCommitteeTitle,
                'queryParameters.committeeType': queryParametersCommitteeType,
                'queryParameters.includeCommitteeDivisions': queryParametersIncludeCommitteeDivisions,
                'queryParameters.section': queryParametersSection,
                'queryParameters.outputType': queryParametersOutputType,
                'queryParameters.debateSectionId': queryParametersDebateSectionId,
                'queryParameters.timelineGroupingSize': queryParametersTimelineGroupingSize,
                'queryParameters.orderBy': queryParametersOrderBy,
            },
        });
    }
}
