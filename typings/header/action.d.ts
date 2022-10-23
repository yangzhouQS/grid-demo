import { BaseActionOption, HeaderActionOption, SortHeaderActionOption } from "@/ts-types";
import { BaseAction } from "./action/BaseAction";
import { BaseHeaderDefine } from "@/list-grid/layout-map";
import { CheckHeaderAction } from "./action/CheckHeaderAction";
import { SortHeaderAction } from "./action/SortHeaderAction";
declare class ImmutableSortHeaderAction<T> extends SortHeaderAction<T> {
    get disabled(): boolean;
}
declare class ImmutableCheckHeaderAction<T> extends CheckHeaderAction<T> {
    get disabled(): boolean;
}
export declare const ACTIONS: {
    SORT: ImmutableSortHeaderAction<any>;
    CHECK: ImmutableCheckHeaderAction<any>;
};
/**
 * column actions
 * @namespace cheetahGrid.columns.action
 * @memberof cheetahGrid.columns
 */
export { BaseAction, SortHeaderAction, CheckHeaderAction, BaseActionOption, SortHeaderActionOption, };
export declare function of<T>(headerAction: HeaderActionOption | BaseAction<T> | null | undefined): BaseAction<T> | undefined;
export declare function ofCell<T>(headerCell: BaseHeaderDefine<T>): BaseAction<T> | undefined;
