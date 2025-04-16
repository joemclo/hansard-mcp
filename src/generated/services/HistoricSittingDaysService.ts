/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HouseSittingDay } from '../models/HouseSittingDay';
import type { QueryResult } from '../models/QueryResult';
import type { SittingDayDetailsDto } from '../models/SittingDayDetailsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HistoricSittingDaysService {
  /**
   * Get historic sitting days given house and sitting date range
   * Get historic sitting days given house and sitting date range. Results can be filtered on whether or not to include results with sitting sections
   * @param queryParamsHouse the parliamentary house (Commons or Lords)
   * @param queryParamsStartDate the date to search from (yyyy-mm-dd)
   * @param queryParamsEndDate the date to search to (yyyy-mm-dd)
   * @param queryParamsSkip how many results to skip (Default is 0)
   * @param queryParamsTake how many results to return per page (maximum 100)
   * @param queryParamsOrderBy how to order results (SittingDateAsc or SittingDateDesc)
   * @param queryParamsHasSittingSections whether or not to only include results with sitting sections
   * @returns QueryResult<HouseSittingDay> OK
   * @throws ApiError
   */
  public static historicSittingDaysQuery(
    queryParamsHouse?: 'Commons' | 'Lords',
    queryParamsStartDate?: string,
    queryParamsEndDate?: string,
    queryParamsSkip?: number,
    queryParamsTake?: number,
    queryParamsOrderBy?: 'SittingDateAsc' | 'SittingDateDesc',
    queryParamsHasSittingSections?: boolean
  ): CancelablePromise<QueryResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/historicsittingdays',
      query: {
        'queryParams.house': queryParamsHouse,
        'queryParams.startDate': queryParamsStartDate,
        'queryParams.endDate': queryParamsEndDate,
        'queryParams.skip': queryParamsSkip,
        'queryParams.take': queryParamsTake,
        'queryParams.orderBy': queryParamsOrderBy,
        'queryParams.hasSittingSections': queryParamsHasSittingSections,
      },
    });
  }
  /**
   * Get details of historic sitting day given house and sitting date.
   * Get details of historic sitting day for given house and sitting date.
   * @param house the parliamentary house (Commons or Lords)
   * @param sittingDate the sitting date <br />(yyyy-mm-dd)
   * @param flattenStructure whether or not to flatten the structure of the returned data
   * @returns SittingDayDetailsDto OK
   * @throws ApiError
   */
  public static historicSittingDaysDetails(
    house: 'Commons' | 'Lords',
    sittingDate: string,
    flattenStructure: boolean
  ): CancelablePromise<SittingDayDetailsDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/historicsittingdays/{house}/{sittingDate}',
      path: {
        house: house,
        sittingDate: sittingDate,
      },
      query: {
        flattenStructure: flattenStructure,
      },
    });
  }
}
