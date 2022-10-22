import { ColorDef, MaybePromise } from "@/ts-types";
export type SimpleColumnIconOption = {
  content?: string;
  font?: string;
  color?: ColorDef;
  className?: string;
  tagName?: string;
  isLiga?: boolean;
  width?: number;
  src?: MaybePromise<string>;
  svg?: string;
  name?: string;
  path?: string;
};
