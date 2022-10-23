import { InlineImage } from "./InlineImage";
import { MaybePromise } from "@/ts-types";
export declare type InlineSvgConstructorOption = {
    svg: MaybePromise<string | SVGElement>;
    width?: number;
    height?: number;
};
export declare class InlineSvg extends InlineImage {
    constructor({ svg, width, height }: InlineSvgConstructorOption);
    canBreak(): boolean;
    toString(): string;
}
