/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SectionTreeItem } from './SectionTreeItem';
export type SectionTree = {
    House?: string;
    ItemDate?: string;
    Metadata?: string;
    Title?: string;
    Description?: string;
    SectionType?: number;
    SortOrder?: number;
    LastUpdated?: string;
    VolumeNo?: number;
    SectionTreeItems?: Array<SectionTreeItem>;
    Source?: SectionTree.Source;
};
export namespace SectionTree {
    export enum Source {
        ROLLING_HANSARD = 'RollingHansard',
        DAILY_HANSARD = 'DailyHansard',
        BOUND_VOLUME = 'BoundVolume',
        HISTORIC = 'Historic',
    }
}

