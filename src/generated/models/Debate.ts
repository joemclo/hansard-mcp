/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DebateItem } from './DebateItem';
import type { DebateOverview } from './DebateOverview';
import type { SectionTreeItem } from './SectionTreeItem';
export type Debate = {
    Overview?: DebateOverview;
    Navigator?: Array<SectionTreeItem>;
    Items?: Array<DebateItem>;
    ChildDebates?: Array<Debate>;
};

