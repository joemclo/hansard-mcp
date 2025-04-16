/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DivisionOverview {
  /** @format int32 */
  Id?: number;
  Time?: string;
  /** @format date-time */
  Date?: string;
  DivisionHasTime?: boolean;
  ExternalId?: string;
  /** @format int32 */
  AyesCount?: number;
  /** @format int32 */
  NoesCount?: number;
  House?: string;
  DebateSection?: string;
  DebateSectionSource?: string;
  Number?: string;
  DebateSectionExtId?: string;
  MemberVotedAye?: boolean;
  TextBeforeVote?: string;
  TextAfterVote?: string;
  /** @format int32 */
  EVELType?: number;
  EVELInfo?: string;
  /** @format int32 */
  EVELAyesCount?: number;
  /** @format int32 */
  EVELNoesCount?: number;
  IsCommitteeDivision?: boolean;
}

export interface DivisionItem {
  AyeMembers?: Member[];
  NoeMembers?: Member[];
  /** @format int32 */
  Id?: number;
  Time?: string;
  /** @format date-time */
  Date?: string;
  DivisionHasTime?: boolean;
  ExternalId?: string;
  /** @format int32 */
  AyesCount?: number;
  /** @format int32 */
  NoesCount?: number;
  House?: string;
  DebateSection?: string;
  DebateSectionSource?: string;
  Number?: string;
  DebateSectionExtId?: string;
  MemberVotedAye?: boolean;
  TextBeforeVote?: string;
  TextAfterVote?: string;
  /** @format int32 */
  EVELType?: number;
  EVELInfo?: string;
  /** @format int32 */
  EVELAyesCount?: number;
  /** @format int32 */
  EVELNoesCount?: number;
  IsCommitteeDivision?: boolean;
}

export interface Member {
  /** @format int32 */
  MemberId?: number;
  /** @format int32 */
  DodsId?: number;
  /** @format int32 */
  PimsId?: number;
  DisplayAs?: string;
  ListAs?: string;
  FullTitle?: string;
  LayingMinisterName?: string;
  HistoricalMemberName?: string;
  HistoricalFullTitle?: string;
  Gender?: string;
  Party?: string;
  /** @format int32 */
  PartyId?: number;
  House?: string;
  MemberFrom?: string;
  /** @format date-time */
  HouseStartDate?: string;
  /** @format date-time */
  HouseEndDate?: string;
  IsTeller?: boolean;
  /** @format int32 */
  SortOrder?: number;
  ConstituencyCountry?: string;
}

export interface Debate {
  Overview?: DebateOverview;
  Navigator?: SectionTreeItem[];
  Items?: DebateItem[];
  ChildDebates?: Debate[];
}

export interface DebateOverview {
  /** @format int32 */
  Id?: number;
  ExtId?: string;
  Title?: string;
  HRSTag?: string;
  /** @format date-time */
  Date?: string;
  Location?: string;
  House?: string;
  Source?: 'RollingHansard' | 'DailyHansard' | 'BoundVolume' | 'Historic';
  /** @format int32 */
  VolumeNo?: number;
  /** @format date-time */
  ContentLastUpdated?: string;
  /** @format int32 */
  DebateTypeId?: number;
  /** @format int32 */
  SectionType?: number;
  NextDebateExtId?: string;
  NextDebateTitle?: string;
  PreviousDebateExtId?: string;
  PreviousDebateTitle?: string;
}

export interface SectionTreeItem {
  /** @format int32 */
  Id?: number;
  Title?: string;
  /** @format int32 */
  ParentId?: number;
  /** @format int32 */
  SortOrder?: number;
  ExternalId?: string;
  HRSTag?: string;
  HansardSection?: string;
  /** @format date-time */
  Timecode?: string;
}

export interface DebateItem {
  ItemType?: string;
  /** @format int64 */
  ItemId?: number;
  /** @format int32 */
  MemberId?: number;
  AttributedTo?: string;
  Value?: string;
  /** @format int32 */
  OrderInSection?: number;
  /** @format date-time */
  Timecode?: string;
  ExternalId?: string;
  HRSTag?: string;
  HansardSection?: string;
  UIN?: string;
  IsReiteration?: boolean;
}

export interface GetMemberContributionDetailsResult {
  AttributedTo?: string;
  ContentItemExtId?: string;
  DebateSectionExtId?: string;
  OverviewText?: string;
  /** @format date-time */
  Timecode?: string;
}

export interface SittingDayQueryParameters {
  /** the parliamentary house (Commons or Lords) */
  House?: 'Commons' | 'Lords';
  /**
   * the date to search from (yyyy-mm-dd)
   * @format date-time
   */
  StartDate?: string;
  /**
   * the date to search to (yyyy-mm-dd)
   * @format date-time
   */
  EndDate?: string;
  /**
   * how many results to skip (Default is 0)
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Skip?: number;
  /**
   * how many results to return per page (maximum 100)
   * @format int32
   * @min 0
   * @max 100
   */
  Take?: number;
  /** how to order results (SittingDateAsc or SittingDateDesc) */
  OrderBy?: 'SittingDateAsc' | 'SittingDateDesc';
  /** whether or not to only include results with sitting sections */
  HasSittingSections?: boolean;
}

export interface HouseSittingDay {
  /** @format int32 */
  HouseId?: number;
  /** @format date-time */
  SittingDate?: string;
}

export interface SittingDayDetailsDto {
  /** @format date-time */
  SittingDate?: string;
  House?: string;
  SittingSections?: SittingSection[];
}

export interface SittingSection {
  Name?: string;
  ExternalId?: string;
  DebateSections?: DebateSection[];
}

export interface DebateSection {
  Title?: string;
  ExternalId?: string;
  ParentExternalId?: string;
}

export interface LinkedSittingDates {
  /** @format date-time */
  PreviousSittingDate?: string;
  /** @format date-time */
  NextSittingDate?: string;
}

export interface CalendarItem {
  House?: string;
  /** @format date-time */
  ItemDate?: string;
  Metadata?: string;
}

export interface SectionTree {
  House?: string;
  /** @format date-time */
  ItemDate?: string;
  Metadata?: string;
  Title?: string;
  Description?: string;
  /** @format int32 */
  SectionType?: number;
  /** @format int32 */
  SortOrder?: number;
  /** @format date-time */
  LastUpdated?: string;
  /** @format int32 */
  VolumeNo?: number;
  SectionTreeItems?: SectionTreeItem[];
  Source?: 'RollingHansard' | 'DailyHansard' | 'BoundVolume' | 'Historic';
}

export interface PdfInfo {
  /** @format date-time */
  SittingDate?: string;
  House?: string;
  IsDebateSectionPdf?: boolean;
  SectionExternalId?: string;
  Title?: string;
  /** @format double */
  PdfSize?: number;
}

export interface PdfData {
  /** @format date-time */
  SittingDate?: string;
  House?: string;
  IsDebateSectionPdf?: boolean;
  Title?: string;
  /** @format double */
  Size?: number;
  /** @format byte */
  Data?: string;
}

export interface SearchQueryParameters {
  /** the parliamentary house (Commons or Lords) */
  House?: string;
  /**
   * the date to search from (yyyy-mm-dd)
   * @format date-time
   */
  StartDate?: string;
  /**
   * the date to search to (yyyy-mm-dd)
   * @format date-time
   */
  EndDate?: string;
  /** the date to search (yyyy-mm-dd) */
  Date?: string;
  /**
   * the unique id of a member (member details are returned from 'Search Members' operation)
   * @format int32
   */
  MemberId?: number;
  /**
   * the unique id of the division to be searched
   * @format int32
   */
  DivisionId?: number;
  /** Hansard identifier */
  HansardIdentifier?: string;
  /** the term for which to search */
  SearchTerm?: string;
  /**
   * how many results to skip (Default is 0)
   * @format int32
   */
  Skip?: number;
  /**
   * how many results to return per page
   * @format int32
   */
  Take?: number;
  /** the list of member ids in which to search */
  MemberIds?: string;
  /** department to be searched */
  Department?: string;
  /** debate type to be searched */
  DebateType?: string;
  /** whether or not to include former members */
  IncludeFormer?: boolean;
  /** whether or not to include current members */
  IncludeCurrent?: boolean;
  /** whether or not to only include results with a division */
  WithDivision?: boolean;
  /**
   * the series number in which to search
   * @format int32
   */
  SeriesNumber?: number;
  /**
   * the Volume Number in which to search
   * @format int32
   */
  VolumeNumber?: number;
  /** the Column number for which to search */
  ColumnNumber?: string;
  /** the title of the committee to be searched */
  CommitteeTitle?: string;
  /**
   * committee type to be searched
   * @format int32
   */
  CommitteeType?: number;
  /** whether or not to include committee divisions */
  IncludeCommitteeDivisions?: boolean;
  /**
   * unique id of the section to search
   * @format int32
   */
  Section?: number;
  /** output type (List or Group) */
  OutputType?: string;
  /**
   * the unique id of the debate section to search
   * @format int32
   */
  DebateSectionId?: number;
  /** timeline grouping size. Enter Day, Month or Year */
  TimelineGroupingSize?: 'Day' | 'Month' | 'Year';
  /** order results (SittingDateAsc or SittingDateDesc) */
  OrderBy?: 'SittingDateAsc' | 'SittingDateDesc';
}

export interface FullSearchResult {
  /** @format int32 */
  TotalMembers?: number;
  /** @format int32 */
  TotalContributions?: number;
  /** @format int32 */
  TotalWrittenStatements?: number;
  /** @format int32 */
  TotalWrittenAnswers?: number;
  /** @format int32 */
  TotalCorrections?: number;
  /** @format int32 */
  TotalPetitions?: number;
  /** @format int32 */
  TotalDebates?: number;
  /** @format int32 */
  TotalCommittees?: number;
  /** @format int32 */
  TotalDivisions?: number;
  SearchTerms?: string[];
  Members?: Member[];
  Contributions?: SearchReferencesItem[];
  WrittenStatements?: SearchReferencesItem[];
  WrittenAnswers?: SearchReferencesItem[];
  Corrections?: SearchReferencesItem[];
  Petitions?: SearchDebateItem[];
  Debates?: SearchDebateItem[];
  Divisions?: DivisionOverview[];
  Committees?: SearchCommitteeItem[];
}

export interface SearchReferencesItem {
  MemberName?: string;
  /** @format int32 */
  MemberId?: number;
  AttributedTo?: string;
  /** @format int64 */
  ItemId?: number;
  ContributionExtId?: string;
  ContributionText?: string;
  ContributionTextFull?: string;
  HRSTag?: string;
  HansardSection?: string;
  /** @format date-time */
  Timecode?: string;
  DebateSection?: string;
  /** @format int32 */
  DebateSectionId?: number;
  DebateSectionExtId?: string;
  /** @format date-time */
  SittingDate?: string;
  Section?: string;
  House?: string;
  /** @format int32 */
  OrderInDebateSection?: number;
  /** @format int32 */
  DebateSectionOrder?: number;
  /** @format int32 */
  Rank?: number;
}

export interface SearchDebateItem {
  DebateSection?: string;
  /** @format date-time */
  SittingDate?: string;
  House?: string;
  Title?: string;
  /** @format int32 */
  Rank?: number;
  DebateSectionExtId?: string;
}

export interface SearchCommitteeItem {
  House?: string;
  Title?: string;
  DebateSection?: string;
}

export interface SearchContributionsQueryResult {
  SearchTerms?: string[];
  /** @format int32 */
  SpokenResultCount?: number;
  /** @format int32 */
  WrittenResultCount?: number;
  /** @format int32 */
  CorrectionsResultCount?: number;
  /** @format int32 */
  DivisionsResultCount?: number;
  Results?: SearchReferencesItem[];
  /** @format int32 */
  TotalResultCount?: number;
}

export interface TimelineDataItem {
  /** @format date-time */
  GroupingDate?: string;
  /** @format int32 */
  GroupingSize?: number;
  /** @format int32 */
  Count?: number;
}

export interface HouseSittingDayResults {
  Results?: HouseSittingDay[];
  /** @format int32 */
  TotalResultCount?: number;
}

export interface MemberResults {
  Results?: Member[];
  /** @format int32 */
  TotalResultCount?: number;
}

export interface SearchDebateItemResults {
  Results?: SearchDebateItem[];
  /** @format int32 */
  TotalResultCount?: number;
}

export interface DivisionOverviewResults {
  Results?: DivisionOverview[];
  /** @format int32 */
  TotalResultCount?: number;
}

export interface SearchCommitteeItemResults {
  Results?: SearchCommitteeItem[];
  /** @format int32 */
  TotalResultCount?: number;
}

export interface TimelineDataItemResults {
  Results?: TimelineDataItem[];
  /** @format int32 */
  TotalResultCount?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://hansard-api.parliament.uk';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key]);
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      }
    ).then(async response => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Hansard API
 * @version v1
 * @baseUrl http://hansard-api.parliament.uk
 * @contact UK Parliament <softwareengineering@parliament.uk> (https://www.parliament.uk/)
 *
 * An API that allows querying of Hansard data.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  debates = {
    /**
     * @description Get a list of speaker id's for a given debate section by External Id
     *
     * @tags Debates
     * @name DebatesGetSpeakersList
     * @summary Get a list of speaker id's for a given debate section
     * @request GET:/debates/speakerslist/{debateSectionExtId}.{format}
     */
    debatesGetSpeakersList: (
      format: string,
      debateSectionExtId: string,
      params: RequestParams = {}
    ) =>
      this.request<number[], any>({
        path: `/debates/speakerslist/${debateSectionExtId}.${format}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get divisions for a given debate section by External Id
     *
     * @tags Debates
     * @name DebatesGetDivisionsList
     * @summary Get divisions for a given debate section
     * @request GET:/debates/divisions/{debateSectionExtId}.{format}
     */
    debatesGetDivisionsList: (
      format: string,
      debateSectionExtId: string,
      params: RequestParams = {}
    ) =>
      this.request<DivisionOverview[], any>({
        path: `/debates/divisions/${debateSectionExtId}.${format}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all data (debate title, aye/noe count, house and a record of how members voted) related to a division.  Results can be filtered to show EVEL (English Votes for English Laws) voters only
     *
     * @tags Debates
     * @name DebatesGetDivision
     * @summary Get all data related to a division
     * @request GET:/debates/division/{divisionExtId}.{format}
     */
    debatesGetDivision: (
      divisionExtId: string,
      format: string,
      query?: {
        /** whether or not to return EVEL (English votes for English laws) voters only */
        isEvel?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<DivisionItem, any>({
        path: `/debates/division/${divisionExtId}.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get data (debate title, date, location, house and a record of each member's contribution) related to a debate section.
     *
     * @tags Debates
     * @name DebatesGetDebate
     * @summary Get data for a debate section
     * @request GET:/debates/debate/{debateSectionExtId}.{format}
     */
    debatesGetDebate: (debateSectionExtId: string, format: string, params: RequestParams = {}) =>
      this.request<Debate, any>({
        path: `/debates/debate/${debateSectionExtId}.${format}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get top level debate id given the id of its child debate section.
     *
     * @tags Debates
     * @name DebatesGetTopLevelDebateId
     * @summary Get top level debate id given the id of its child debate section
     * @request GET:/debates/topleveldebateid/{debateSectionExtId}.{format}
     */
    debatesGetTopLevelDebateId: (
      debateSectionExtId: string,
      format: string,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/debates/topleveldebateid/${debateSectionExtId}.${format}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get top level debate given the house, sitting date and section title
     *
     * @tags Debates
     * @name DebatesGetTopLevelDebateByTitle
     * @summary Get top level debate given the house, sitting date and section title
     * @request GET:/debates/topleveldebatebytitle.{format}
     */
    debatesGetTopLevelDebateByTitle: (
      format: string,
      query: {
        /** the parliamentary house (Commons or Lords) */
        house: string;
        /** sitting date of the required debate (yyyy-mm-dd) */
        date: string;
        /** section title of the required debate */
        sectionTitle: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Debate, any>({
        path: `/debates/topleveldebatebytitle.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Debates
     * @name DebatesGetMemberContributionDetails
     * @summary Get debate contribuitions for a Member
     * @request GET:/debates/memberdebatecontributions/{memberId}.{format}
     */
    debatesGetMemberContributionDetails: (
      memberId: number,
      format: string,
      query: {
        /** the External ID of the required debate section */
        debateSectionExtId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetMemberContributionDetailsResult[], any>({
        path: `/debates/memberdebatecontributions/${memberId}.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  historicsittingdays = {
    /**
     * @description Get historic sitting days given house and sitting date range. Results can be filtered on whether or not to include results with sitting sections
     *
     * @tags Historic Sitting Days
     * @name HistoricSittingDaysQuery
     * @summary Get historic sitting days given house and sitting date range
     * @request GET:/historicsittingdays
     */
    historicSittingDaysQuery: (
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParams.house'?: 'Commons' | 'Lords';
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParams.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParams.endDate'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         * @min 0
         * @max 2147483647
         */
        'queryParams.skip'?: number;
        /**
         * how many results to return per page (maximum 100)
         * @format int32
         * @min 0
         * @max 100
         */
        'queryParams.take'?: number;
        /** how to order results (SittingDateAsc or SittingDateDesc) */
        'queryParams.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
        /** whether or not to only include results with sitting sections */
        'queryParams.hasSittingSections'?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultHouseSittingDay, any>({
        path: `/historicsittingdays`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get details of historic sitting day for given house and sitting date.
     *
     * @tags Historic Sitting Days
     * @name HistoricSittingDaysDetails
     * @summary Get details of historic sitting day given house and sitting date.
     * @request GET:/historicsittingdays/{house}/{sittingDate}
     */
    historicSittingDaysDetails: (
      house: 'Commons' | 'Lords',
      sittingDate: string,
      query: {
        /** whether or not to flatten the structure of the returned data */
        flattenStructure: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<SittingDayDetailsDto, any>({
        path: `/historicsittingdays/${house}/${sittingDate}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  overview = {
    /**
     * @description Get list of speaker ids for given sitting date, house and Hansard section name
     *
     * @tags Overview
     * @name OverviewGetSpeakersList
     * @summary Get list of speaker ids for given sitting date, house and Hansard section name
     * @request GET:/overview/speakerslist/{date}/{house}.{format}
     */
    overviewGetSpeakersList: (
      format: string,
      date: string,
      house: string,
      query: {
        /** Hansard section name e.g. CWA, QWA, WMS */
        section: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<number[], any>({
        path: `/overview/speakerslist/${date}/${house}.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get status information on which house and sitting date is currently being processed
     *
     * @tags Overview
     * @name OverviewGetCurrentlyProcessing
     * @summary Get status information on which house and sitting date is currently being processed
     * @request GET:/overview/currentlyprocessing.{format}
     */
    overviewGetCurrentlyProcessing: (format: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/overview/currentlyprocessing.${format}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the last sitting date for given house.
     *
     * @tags Overview
     * @name OverviewGetLastSittingDate
     * @summary Get the last sitting date for given house.
     * @request GET:/overview/lastsittingdate.{format}
     */
    overviewGetLastSittingDate: (
      format: string,
      query: {
        /** the parliamentary house (Commons or Lords) */
        house: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/overview/lastsittingdate.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets the year of the earliest sitting date in Hansard
     *
     * @tags Overview
     * @name OverviewGetFirstYear
     * @summary Gets the year of the earliest sitting date in Hansard
     * @request GET:/overview/firstyear.{format}
     */
    overviewGetFirstYear: (format: string, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/overview/firstyear.${format}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the previous and next sitting days given a house and date. Returns only the previous sitting day if there is no future day with any Hansard data.
     *
     * @tags Overview
     * @name OverviewGetLinkedSittingDates
     * @summary Get the previous and next sitting days given a house and date.
     * @request GET:/overview/linkedsittingdates.{format}
     */
    overviewGetLinkedSittingDates: (
      format: string,
      query: {
        /** the date from which to calculate the previous and next sitting dates (yyyy-mm-dd) */
        date: string;
        /** the parliamentary house (Commons or Lords) */
        house: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<LinkedSittingDates, any>({
        path: `/overview/linkedsittingdates.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all sitting dates given a year, month and house.
     *
     * @tags Overview
     * @name OverviewDatesWithSittings
     * @summary Get all sitting dates given a year, month and house.
     * @request GET:/overview/calendar.{format}
     */
    overviewDatesWithSittings: (
      format: string,
      query: {
        /**
         * the year for which to return sitting dates (yyyy)
         * @format int32
         */
        year: number;
        /**
         * the month for which to return sitting dates (mm)
         * @format int32
         */
        month: number;
        /** the parliamentary house (Commons or Lords) */
        house: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CalendarItem[], any>({
        path: `/overview/calendar.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get Hansard name for debate sections given the sitting date and house. Note that Commons Chamber is returned as 'Debate'.
     *
     * @tags Overview
     * @name OverviewSectionsForDay
     * @summary Get Hansard name for debate sections given the sitting date and house
     * @request GET:/overview/sectionsforday.{format}
     */
    overviewSectionsForDay: (
      format: string,
      query: {
        /** date of debate (yyyy-mm-dd) */
        date: string;
        /** the parliamentary house (Commons or Lords) */
        house: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<string[], any>({
        path: `/overview/sectionsforday.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get section hierarchy given Hansard section name, sitting date and house.
     *
     * @tags Overview
     * @name OverviewGetSectionTrees
     * @summary Get section hierarchy given Hansard section name, sitting date and house.
     * @request GET:/overview/sectiontrees.{format}
     */
    overviewGetSectionTrees: (
      format: string,
      query: {
        /** the Hansard section name<br />(Hansard section names are returned from ‘Sections For Day’ operation) */
        section: string;
        /** The sitting date (yyyy-mm-dd) */
        date: string;
        /** the parliamentary house (Commons or Lords) */
        house: string;
        /** whether or not to group the results by owner */
        groupByOwner?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<SectionTree[], any>({
        path: `/overview/sectiontrees.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get pdf data (titles and sizes) for a given sitting date and house.
     *
     * @tags Overview
     * @name OverviewPdfsForDay
     * @summary Get pdf data (titles and sizes) for a given sitting date and house.
     * @request GET:/overview/pdfsforday.{format}
     */
    overviewPdfsForDay: (
      format: string,
      query: {
        /** the sitting date (yyyy-mm-dd) */
        date: string;
        /** the parliamentary house (Commons or Lords) */
        house: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PdfInfo[], any>({
        path: `/overview/pdfsforday.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  pdfs = {
    /**
     * @description Get pdf (data and meta data) for a given sitting date, house or debate section
     *
     * @tags PDFs
     * @name PdfsGetPdf
     * @summary Get pdf (data and meta data) for a given sitting date, house or debate section
     * @request GET:/pdfs/pdf.{format}
     */
    pdfsGetPdf: (
      format: string,
      query: {
        /** the sitting date<br />(yyyy-mm-dd) */
        date: string;
        /** the parliamentary house (Commons or Lords) */
        house: string;
        /** the External Id of a debate section */
        sectionExternalId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PdfData, any>({
        path: `/pdfs/pdf.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  search = {
    /**
     * @description Get a web link for a content item, debate section or division given its external id.
     *
     * @tags Search
     * @name SearchGetParliSearchRedirect
     * @summary Get a web link for a content item, debate section or division
     * @request GET:/search/parlisearchredirect.{format}
     */
    searchGetParliSearchRedirect: (
      format: string,
      query: {
        /** The External Id of a content item, debate section or division */
        externalId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/search/parlisearchredirect.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all members whose name contains the search term. Results can be filtered to include current members, former members or both.
     *
     * @tags Search
     * @name SearchSearchMembers
     * @summary Gets all members whose name contains the search term.
     * @request GET:/search/members.{format}
     */
    searchSearchMembers: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultMember, any>({
        path: `/search/members.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all contributions of required type that contain the specified search term. Results can be filtered by house, memberid, debate, section and sitting date range. <br /><br /> OutputType can be List or Group <br /><br /> How many results to skip and how many to return (used for paging), can also be configured. Note: skip and take parameters can be omitted to return all results. <br /><br /> The search term can be simple text or it can contain directives for advanced searches.<br /> you can also connect multiple search directives with AND<br /> use spokenby:name to find contributions when named person spoke<br /> use debate:debate to find contributions in debates matching supplied text<br /> use words:words to find contributions containing specified words<br />
     *
     * @tags Search
     * @name SearchSearchContributions
     * @summary Gets all contributions of required type that contain the specified search term. OutputType can be List or Group.
     * @request GET:/search/contributions/{contributionType}.{format}
     */
    searchSearchContributions: (
      contributionType: string,
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<SearchContributionsQueryResult, any>({
        path: `/search/contributions/${contributionType}.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name SearchGetMemberContributionSummary
     * @summary Get contribution summary for a given Member
     * @request GET:/search/membercontributionsummary/{memberId}.{format}
     */
    searchGetMemberContributionSummary: (
      memberId: number,
      format: string,
      query: {
        /**
         * How many results to skip
         * @format int32
         */
        skip: number;
        /**
         * How many results to return per page
         * @format int32
         */
        take: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultSearchDebateItem, any>({
        path: `/search/membercontributionsummary/${memberId}.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name SearchSearchDebates
     * @summary Get all debates for the given house, date range and title (from search term)
     * @request GET:/search/debates.{format}
     */
    searchSearchDebates: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<object, any>({
        path: `/search/debates.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all divisions for a given house and sitting date range that contain the specified search term in their title. <br />Specifying MemberId returns information on how that member voted <br /><br /> Results can be filtered by whether search should IncludeCommitteeDivisions and also WithDivision. Specifying MemberId returns information on how that member voted in MemberVotedAye
     *
     * @tags Search
     * @name SearchSearchDivisions
     * @summary Get all divisions for the given house, sitting date range and title (from search term)
     * @request GET:/search/divisions.{format}
     */
    searchSearchDivisions: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultDivisionOverview, any>({
        path: `/search/divisions.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the debate for a given volume number, column number and house
     *
     * @tags Search
     * @name SearchFindDebateByColumnNumber
     * @summary Get the debate for a given volume number, column number and house
     * @request GET:/search/debatebycolumn.{format}
     */
    searchFindDebateByColumnNumber: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultSearchDebateItem, any>({
        path: `/search/debatebycolumn.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the debate for a given contribution Id (external reference id)
     *
     * @tags Search
     * @name SearchFindDebateByContributionId
     * @summary Get the debate for a given contribution id (external reference id)
     * @request GET:/search/debatebyexternalid.{format}
     */
    searchFindDebateByContributionId: (
      format: string,
      query: {
        /** The external reference id of the contribution */
        contentItemExternalId: string;
        /** The house to search */
        house: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultSearchDebateItem, any>({
        path: `/search/debatebyexternalid.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all petitions that contain the specified search term in their title. <br />Results can be filtered by house and sitting date range. <br />How many results to skip and how many to return (used for paging) can also be configured. Note: skip and take parameters can be omitted to return all results.
     *
     * @tags Search
     * @name SearchSearchPetitions
     * @summary Gets all petitions that contain the specified search term in their title
     * @request GET:/search/petitions.{format}
     */
    searchSearchPetitions: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultSearchDebateItem, any>({
        path: `/search/petitions.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all committees for the given house, sitting date range and title which contains a given search term. Results can be filtered on whether they have a division
     *
     * @tags Search
     * @name SearchSearchCommittees
     * @summary Gets committees for the given house, sitting date range and title
     * @request GET:/search/committees.{format}
     */
    searchSearchCommittees: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultSearchCommitteeItem, any>({
        path: `/search/committees.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all committee debates. Results can be filtered by house, sitting date range, member id and debate section id.
     *
     * @tags Search
     * @name SearchSearchCommitteeDebates
     * @summary Gets all committee debates
     * @request GET:/search/committeedebates.{format}
     */
    searchSearchCommitteeDebates: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultSearchDebateItem, any>({
        path: `/search/committeedebates.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  searchFormat = {
    /**
     * @description Get contributions, written statements, written answers, corrections, petitions, committees, divisions and members that contain the given search term. <br /><br /> There are a maximum of four search results of each type. <br /><br /> The search term can be simple text or it can contain directives for advanced searches.<br /> you can also connect multiple search directives with AND<br /> use spokenby:name to get results when named person spoke<br /> use debate:debate to get results for debates matching supplied text<br /> use words:words to get results containing specified words<br />
     *
     * @tags Search
     * @name SearchFullSearch
     * @summary Get all results that contain the given search term
     * @request GET:/search.{format}
     */
    searchFullSearch: (
      format: string,
      query?: {
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<FullSearchResult, any>({
        path: `/search.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  timelineStatsFormat = {
    /**
     * @description Get counts for given contribution type and sitting date range. Counts are by given TimelineGroupingSize (Day, Month or Year), house, contribution type, search term, optional memberid and whether this is a debates search <br /><br /><br /> The search term can be simple text or it can contain directives for advanced searches.<br /> you can also connect multiple search directives with AND<br /> use spokenby:name to count times when named person spoke<br /> use debate:debate to count debates matching supplied text<br /> use words:words to count occurrences of specified words<br />
     *
     * @tags TimelineStats
     * @name TimelineStatsQuery
     * @summary Get counts for given contribution type and sitting date range.
     * @request GET:/timeline-stats.{format}
     */
    timelineStatsQuery: (
      format: string,
      query?: {
        /** the type of contribution to return (Spoken, Written, Corrections or Petitions */
        contributionType?:
          | 'Spoken'
          | 'Written'
          | 'Corrections'
          | 'Petitions'
          | 'WrittenAnswers'
          | 'Divisions';
        /** whether or not to search debates */
        isDebatesSearch?: boolean;
        /** the parliamentary house (Commons or Lords) */
        'queryParameters.house'?: string;
        /**
         * the date to search from (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.startDate'?: string;
        /**
         * the date to search to (yyyy-mm-dd)
         * @format date-time
         */
        'queryParameters.endDate'?: string;
        /** the date to search (yyyy-mm-dd) */
        'queryParameters.date'?: string;
        /**
         * the unique id of a member (member details are returned from ‘Search Members’ operation)
         * @format int32
         */
        'queryParameters.memberId'?: number;
        /**
         * the unique id of the division to be searched
         * @format int32
         */
        'queryParameters.divisionId'?: number;
        /** Hansard identifier */
        'queryParameters.hansardIdentifier'?: string;
        /** the term for which to search */
        'queryParameters.searchTerm'?: string;
        /**
         * how many results to skip (Default is 0)
         * @format int32
         */
        'queryParameters.skip'?: number;
        /**
         * how many results to return per page
         * @format int32
         */
        'queryParameters.take'?: number;
        /** the list of member ids in which to search */
        'queryParameters.memberIds'?: string;
        /** department to be searched */
        'queryParameters.department'?: string;
        /** debate type to be searched */
        'queryParameters.debateType'?: string;
        /** whether or not to include former members */
        'queryParameters.includeFormer'?: boolean;
        /** whether or not to include current members */
        'queryParameters.includeCurrent'?: boolean;
        /** whether or not to only include results with a division */
        'queryParameters.withDivision'?: boolean;
        /**
         * the series number in which to search
         * @format int32
         */
        'queryParameters.seriesNumber'?: number;
        /**
         * the Volume Number in which to search
         * @format int32
         */
        'queryParameters.volumeNumber'?: number;
        /** the Column number for which to search */
        'queryParameters.columnNumber'?: string;
        /** the title of the committee to be searched */
        'queryParameters.committeeTitle'?: string;
        /**
         * committee type to be searched
         * @format int32
         */
        'queryParameters.committeeType'?: number;
        /** whether or not to include committee divisions */
        'queryParameters.includeCommitteeDivisions'?: boolean;
        /**
         * unique id of the section to search
         * @format int32
         */
        'queryParameters.section'?: number;
        /** output type (List or Group) */
        'queryParameters.outputType'?: string;
        /**
         * the unique id of the debate section to search
         * @format int32
         */
        'queryParameters.debateSectionId'?: number;
        /** timeline grouping size. Enter Day, Month or Year */
        'queryParameters.timelineGroupingSize'?: 'Day' | 'Month' | 'Year';
        /** order results (SittingDateAsc or SittingDateDesc) */
        'queryParameters.orderBy'?: 'SittingDateAsc' | 'SittingDateDesc';
      },
      params: RequestParams = {}
    ) =>
      this.request<QueryResultTimelineDataItem, any>({
        path: `/timeline-stats.${format}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
}
