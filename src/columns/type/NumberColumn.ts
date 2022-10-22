import { Column } from "./Column";
import { NumberColumnOption } from "@/ts-types";
import { NumberStyle } from "../style/NumberStyle";

let defaultFotmat: Intl.NumberFormat;

export class NumberColumn<T> extends Column<T> {
	private _format?: Intl.NumberFormat;

	static get defaultFotmat(): Intl.NumberFormat {
		return defaultFotmat || (defaultFotmat = new Intl.NumberFormat());
	}

	static set defaultFotmat(fmt: Intl.NumberFormat) {
		defaultFotmat = fmt;
	}

	constructor(option: NumberColumnOption = {}) {
		super(option);
		this._format = option.format;
	}

	get StyleClass(): typeof NumberStyle {
		return NumberStyle;
	}

	clone(): NumberColumn<T> {
		return new NumberColumn(this);
	}

	get format(): Intl.NumberFormat | undefined {
		return this._format;
	}

	withFormat(format: Intl.NumberFormat): NumberColumn<T> {
		const c = this.clone();
		c._format = format;
		return c;
	}

	convertInternal(value: unknown): string {
		const num = Number(value);
		if (isNaN(num)) {
			const convertedValue = super.convertInternal(value);
			return convertedValue != null ? String(convertedValue) : "";
		}
		const format = this._format || NumberColumn.defaultFotmat;
		return format.format(num);
	}
}
