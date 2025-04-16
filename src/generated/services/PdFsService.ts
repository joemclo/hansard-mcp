/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PdfData } from '../models/PdfData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PdFsService {
    /**
     * Get pdf (data and meta data) for a given sitting date, house or debate section
     * Get pdf (data and meta data) for a given sitting date, house or debate section
     * @param format the required output format (xml or json)
     * @param date the sitting date<br />(yyyy-mm-dd)
     * @param house the parliamentary house (Commons or Lords)
     * @param sectionExternalId the External Id of a debate section
     * @returns PdfData OK
     * @throws ApiError
     */
    public static pdfsGetPdf(
        format: string,
        date: string,
        house: string,
        sectionExternalId?: string,
    ): CancelablePromise<PdfData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pdfs/pdf.{format}',
            path: {
                'format': format,
            },
            query: {
                'date': date,
                'house': house,
                'sectionExternalId': sectionExternalId,
            },
        });
    }
}
