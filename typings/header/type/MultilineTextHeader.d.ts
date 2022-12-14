import { DrawCellInfo, GridInternal } from "@/ts-types-internal";
import { BaseHeader } from "./BaseHeader";
import { CellContext } from "@/ts-types";
import { GridCanvasHelper } from "@/GridCanvasHelper";
import { MultilineTextHeaderStyle } from "../style/MultilineTextHeaderStyle";
export declare class MultilineTextHeader<T> extends BaseHeader<T> {
    get StyleClass(): typeof MultilineTextHeaderStyle;
    clone(): MultilineTextHeader<T>;
    drawInternal(value: unknown, context: CellContext, style: MultilineTextHeaderStyle, helper: GridCanvasHelper<T>, _grid: GridInternal<T>, { drawCellBase, getIcon }: DrawCellInfo<T>): void;
}
