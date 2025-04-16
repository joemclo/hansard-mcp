/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DebateOverview = {
    Id?: number;
    ExtId?: string;
    Title?: string;
    HRSTag?: string;
    Date?: string;
    Location?: string;
    House?: string;
    Source?: DebateOverview.Source;
    VolumeNo?: number;
    ContentLastUpdated?: string;
    DebateTypeId?: number;
    SectionType?: number;
    NextDebateExtId?: string;
    NextDebateTitle?: string;
    PreviousDebateExtId?: string;
    PreviousDebateTitle?: string;
};
export namespace DebateOverview {
    export enum Source {
        ROLLING_HANSARD = 'RollingHansard',
        DAILY_HANSARD = 'DailyHansard',
        BOUND_VOLUME = 'BoundVolume',
        HISTORIC = 'Historic',
    }
}

