import { IconDefine } from "./ts-types";
import { Theme } from "./themes/theme";
export declare function theme(name: string, theme?: Theme): Theme;
export declare function icon(name: string, icon?: IconDefine): IconDefine;
export declare function icons(icons: {
    [key: string]: IconDefine;
}): void;
