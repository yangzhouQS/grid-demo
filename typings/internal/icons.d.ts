import { ColumnIconOption } from "@/ts-types";
import { SimpleColumnIconOption } from "@/ts-types-internal";
export declare function getIconProps(tagName: string, className: string): SimpleColumnIconOption;
export declare function toNormalizeArray(iconProps: ColumnIconOption<unknown> | ColumnIconOption<unknown>[]): SimpleColumnIconOption[];
export declare const iconPropKeys: (string | number | symbol)[];
