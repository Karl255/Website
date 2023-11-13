import BaseNCreationArgumentsComponent from "./_components/BaseNCreationArgumentsComponent.svelte";
import BaseNOptionsComponent from "./_components/BaseNOptionsComponent.svelte";
import type { Format, FormatType, Stream } from "./_format";

export interface BaseNFormatCreationArguments {
	base?: number;
}

export enum Leading0Option {
	Pad = "0 pad",
	Trim = "Trim leading",
}

export interface BaseNFormatOptions {
	leading0s: Leading0Option;
}

export const defaultOptions: BaseNFormatOptions = {
	leading0s: Leading0Option.Pad,
};

const allDigits = "0123456789abcdefghijklmnopqrstuvwxyz";

export default class BaseNFormat implements Format<BaseNFormatOptions> {
	static name = "Base N";
	static CreationArgumentsComponent = BaseNCreationArgumentsComponent;
	OptionsComponent = BaseNOptionsComponent;

	base: number;
	options: BaseNFormatOptions;

	private validationPattern: any;
	private padding: string;

	constructor(args?: BaseNFormatCreationArguments) {
		this.base = args?.base ?? 10;
		this.options = defaultOptions;

		const validDigits = allDigits.slice(0, this.base);
		this.validationPattern = new RegExp(`^[${validDigits}\\s]*$`);
		this.padding = "0".repeat((255).toString(this.base).length);
	}

	get name() {
		return `Base ${this.base}`;
	}

	decode(format: string) {
		// prettier-ignore
		return format
			.split(/\s+/)
			.filter((word) => word !== "")
			.map((word) => parseInt(word, this.base) & 0xff);
	}

	encode(stream: Stream) {
		const encodeWord: (word: number) => string =
			this.options.leading0s === Leading0Option.Pad
				? (word) => (this.padding + word.toString(this.base)).slice(-this.padding.length)
				: (word) => word.toString(this.base);

		return stream.map(encodeWord).join(" ");
	}

	validate(format: string) {
		return !!format.toLowerCase().match(this.validationPattern);
	}
}

BaseNFormat satisfies FormatType<BaseNFormatCreationArguments, BaseNFormatOptions>;
