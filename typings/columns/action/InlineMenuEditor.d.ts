import { CellAddress, ColumnMenuItemOption, EventListenerId, InlineMenuEditorOption, LayoutObjectId, ListGridAPI } from "@/ts-types";
import { GridInternal } from "@/ts-types-internal";
import { Editor } from "./Editor";
import { RangePasteContext } from "./BaseAction";
export declare class InlineMenuEditor<T> extends Editor<T> {
    private _classList?;
    private _options;
    constructor(option?: InlineMenuEditorOption<T>);
    dispose(): void;
    get classList(): string[] | undefined;
    set classList(classList: string[] | undefined);
    get options(): (record: T | undefined) => ColumnMenuItemOption[];
    set options(options: (record: T | undefined) => ColumnMenuItemOption[]);
    clone(): InlineMenuEditor<T>;
    onChangeDisabledInternal(): void;
    onChangeReadOnlyInternal(): void;
    bindGridEvent(grid: GridInternal<T>, cellId: LayoutObjectId): EventListenerId[];
    onPasteCellRangeBox(grid: ListGridAPI<T>, cell: CellAddress, value: string, context: RangePasteContext): void;
    onDeleteCellRangeBox(grid: ListGridAPI<T>, cell: CellAddress): void;
    private _pasteDataToOptionValue;
}
