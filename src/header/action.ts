import type {
  BaseActionOption,
  HeaderActionOption,
  SortHeaderActionOption,
  SortOption,
} from "@/ts-types";
import { BaseAction } from "./action/BaseAction";
import type { BaseHeaderDefine } from "@/list-grid/layout-map";
import { CheckHeaderAction } from "./action/CheckHeaderAction";
import { SortHeaderAction } from "./action/SortHeaderAction";

class ImmutableSortHeaderAction<T> extends SortHeaderAction<T> {
  get disabled(): boolean {
    return this._disabled;
  }
}
class ImmutableCheckHeaderAction<T> extends CheckHeaderAction<T> {
  get disabled(): boolean {
    return this._disabled;
  }
}

export const ACTIONS = {
  SORT: new ImmutableSortHeaderAction<any>(),

  CHECK: new ImmutableCheckHeaderAction<any>(),
};
/**
 * column actions
 * @namespace cheetahGrid.columns.action
 * @memberof cheetahGrid.columns
 */
export {
  BaseAction,
  SortHeaderAction,
  CheckHeaderAction,
  // types
  BaseActionOption,
  SortHeaderActionOption,
};

export function of<T>(
  headerAction: HeaderActionOption | BaseAction<T> | null | undefined
): BaseAction<T> | undefined {
  if (!headerAction) {
    return undefined;
  } else if (typeof headerAction === "string") {
    const key = headerAction.toUpperCase() as keyof typeof ACTIONS;
    return ACTIONS[key] || of(null);
  } else {
    return headerAction;
  }
}
export function ofCell<T>(
  headerCell: BaseHeaderDefine<T>
): BaseAction<T> | undefined {
  if (headerCell.sort) {
    if (typeof headerCell.sort === "function") {
      const sortMethod = headerCell.sort;
      // 0.9.0 Backward compatibility
      const sort: SortOption<T> = ({ order, col, grid }): void =>
        sortMethod.call(headerCell, order, col, grid);
      return new ImmutableSortHeaderAction({ sort });
    }
    if (typeof headerCell.sort === "string") {
      return new ImmutableSortHeaderAction({ sort: headerCell.sort });
    }
    return ACTIONS.SORT;
  }
  return of(headerCell.headerAction);
}
