/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DivisionOverview } from '../models/DivisionOverview';
import type { FullSearchResult } from '../models/FullSearchResult';
import type { Member } from '../models/Member';
import type { QueryResult } from '../models/QueryResult';
import type { SearchCommitteeItem } from '../models/SearchCommitteeItem';
import type { SearchContributionsQueryResult } from '../models/SearchContributionsQueryResult';
import type { SearchDebateItem } from '../models/SearchDebateItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { SearchQueryParameters } from '../models/SearchQueryParameters';
import type { SearchOptions } from '../models/SearchOptions';
export class SearchService {
  /**
   * Get a web link for a content item, debate section or division
   * Get a web link for a content item, debate section or division given its external id.
   * @param externalId The External Id of a content item, debate section or division
   * @param format The required output format (xml or json)
   * @returns string OK
   * @throws ApiError
   */
  public static searchGetParliSearchRedirect(
    externalId: string,
    format: string
  ): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/parlisearchredirect.{format}',
      path: {
        format: format,
      },
      query: {
        externalId: externalId,
      },
    });
  }
  /**
   * Get all results that contain the given search term
   * Get contributions, written statements, written answers, corrections,
   * petitions, committees, divisions and members that contain the given search term.
   * <br /><br />
   * There are a maximum of four search results of each type.
   * <br /><br />
   * The search term can be simple text or it can contain directives for advanced searches.<br />
   * you can also connect multiple search directives with AND<br />
   * use spokenby:name to get results when named person spoke<br />
   * use debate:debate to get results for debates matching supplied text<br />
   * use words:words to get results containing specified words<br />
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns FullSearchResult OK
   * @throws ApiError
   */
  public static searchFullSearch(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<FullSearchResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search.{format}',
      path: {
        format: format,
      },
      query: {
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
  /**
   * Gets all members whose name contains the search term.
   * Gets all members whose name contains the search term.
   * Results can be filtered to include current members, former members or both.
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns QueryResult<Member> OK
   * @throws ApiError
   */
  public static searchSearchMembers(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/members.{format}',
      path: {
        format: format,
      },
      query: {
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
  /**
   * Gets all contributions of required type that contain the specified search term. OutputType can be List or Group.
   * Gets all contributions of required type that contain the specified search term.
   * Results can be filtered by house, memberid, debate, section and sitting date range.
   * <br /><br />
   * OutputType can be List or Group
   * <br /><br />
   * How many results to skip and how many to return (used for paging), can also be configured.
   * Note: skip and take parameters can be omitted to return all results.
   * <br /><br />
   * The search term can be simple text or it can contain directives for advanced searches.<br />
   * you can also connect multiple search directives with AND<br />
   * use spokenby:name to find contributions when named person spoke<br />
   * use debate:debate to find contributions in debates matching supplied text<br />
   * use words:words to find contributions containing specified words<br />
   * @param contributionType The type of contribution to return (Spoken, Written, Corrections or Petitions)
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns SearchContributionsQueryResult OK
   * @throws ApiError
   */
  public static searchSearchContributions(
    contributionType: string,
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<SearchContributionsQueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/contributions/{contributionType}.{format}',
      path: {
        contributionType: contributionType,
        format: format,
      },
      query: {
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
  /**
   * Get contribution summary for a given Member
   * @param memberId The member id for which to search
   * @param format The required output format (xml or json)
   * @param skip How many results to skip
   * @param take How many results to return per page
   * @returns QueryResult<SearchDebateItem> OK
   * @throws ApiError
   */
  public static searchGetMemberContributionSummary(
    memberId: number,
    format: string,
    skip: number,
    take: number
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/membercontributionsummary/{memberId}.{format}',
      path: {
        memberId: memberId,
        format: format,
      },
      query: {
        skip: skip,
        take: take,
      },
    });
  }
  /**
   * Get all debates for the given house, date range and title (from search term)
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns any OK
   * @throws ApiError
   */
  public static searchSearchDebates(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/debates.{format}',
      path: {
        format: format,
      },
      query: {
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
  /**
   * Get all divisions for the given house, sitting date range and title (from search term)
   * Gets all divisions for a given house and sitting date range that contain the specified search term in their title.
   * <br />Specifying MemberId returns information on how that member voted
   * <br /><br />
   * Results can be filtered by whether search should IncludeCommitteeDivisions and also WithDivision.
   * Specifying MemberId returns information on how that member voted in MemberVotedAye
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns QueryResult<DivisionOverview> OK
   * @throws ApiError
   */
  public static searchSearchDivisions(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/divisions.{format}',
      path: {
        format: format,
      },
      query: {
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
  /**
   * Get the debate for a given volume number, column number and house
   * Get the debate for a given volume number, column number and house
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns QueryResult<SearchDebateItem> OK
   * @throws ApiError
   */
  public static searchFindDebateByColumnNumber(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/debatebycolumn.{format}',
      path: {
        format: format,
      },
      query: {
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
  /**
   * Get the debate for a given contribution id (external reference id)
   * Get the debate for a given contribution Id (external reference id)
   * @param format The required output format (xml or json)
   * @param contentItemExternalId The external reference id of the contribution
   * @param house The house to search
   * @returns QueryResult<SearchDebateItem> OK
   * @throws ApiError
   */
  public static searchFindDebateByContributionId(
    format: string,
    contentItemExternalId: string,
    house: string
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/debatebyexternalid.{format}',
      path: {
        format: format,
      },
      query: {
        contentItemExternalId: contentItemExternalId,
        house: house,
      },
    });
  }
  /**
   * Gets all petitions that contain the specified search term in their title
   * Gets all petitions that contain the specified search term in their title.
   * <br />Results can be filtered by house and sitting date range.
   * <br />How many results to skip and how many to return (used for paging) can also be configured.
   * Note: skip and take parameters can be omitted to return all results.
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns QueryResult<SearchDebateItem> OK
   * @throws ApiError
   */
  public static searchSearchPetitions(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/petitions.{format}',
      path: {
        format: format,
      },
      query: {
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
  /**
   * Gets committees for the given house, sitting date range and title
   * Gets all committees for the given house, sitting date range and title which contains a given search term. Results can be filtered on whether they have a division
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns QueryResult<SearchCommitteeItem> OK
   * @throws ApiError
   */
  public static searchSearchCommittees(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/committees.{format}',
      path: {
        format: format,
      },
      query: {
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
  /**
   * Gets all committee debates
   * Gets all committee debates. Results can be filtered by house, sitting date range, member id and debate section id.
   * @param format The required output format (xml or json)
   * @param queryParametersHouse the parliamentary house (Commons or Lords)
   * @param queryParametersStartDate the date to search from (yyyy-mm-dd)
   * @param queryParametersEndDate the date to search to (yyyy-mm-dd)
   * @param queryParametersDate the date to search (yyyy-mm-dd)
   * @param queryParametersMemberId the unique id of a member (member details are returned from 'Search Members' operation)
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
   * @returns QueryResult<SearchDebateItem> OK
   * @throws ApiError
   */
  public static searchSearchCommitteeDebates(
    format: string,
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
    queryParametersOrderBy?: 'SittingDateAsc' | 'SittingDateDesc'
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search/committeedebates.{format}',
      path: {
        format: format,
      },
      query: {
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
