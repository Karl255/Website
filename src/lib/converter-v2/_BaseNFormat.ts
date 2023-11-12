import BaseNCreationArgumentsComponent from "./_components/BaseNCreationArgumentsComponent.svelte";
import BaseNOptionsComponent from "./_components/BaseNOptionsComponent.svelte";
import type { Format, FormatType, Stream } from "./_format";

export interface BaseNFormatCreationArguments {
	base?: number;
}

export enum Leading0Option {
	NoChange = "No change",
	Pad = "0 pad",
	Trim = "Trim leading",
}

export interface BaseNFormatOptions {
	leading0s: Leading0Option;
}

const allDigits = "0123456789abcdefghijklmnopqrstuvwxyz";

export default class BaseNFormat implements Format<BaseNFormatOptions> {
	static name = "Base N";
	static CreationArgumentsComponent = BaseNCreationArgumentsComponent;
	OptionsComponent = BaseNOptionsComponent;

	base: number;
	validationPattern: any;
	options: BaseNFormatOptions;

	constructor(args?: BaseNFormatCreationArguments, options?: BaseNFormatOptions) {
		this.base = args?.base ?? 10;
		this.options = options ?? { leading0s: Leading0Option.Pad };

		const validDigits = allDigits.slice(0, this.base);
		this.validationPattern = new RegExp(`^[${validDigits}\\s]*$`);
	}

	get name() {
		return `Base ${this.base}`;
	}

	decode(format: string) {
		// prettier-ignore
		return format
			.split(/\s+/)
			.map((word) => parseInt(word, this.base));
	}

	encode(stream: Stream) {
		// prettier-ignore
		return stream
			.map((byte) => byte.toString(this.base))
			.join(" ");
	}

	validate(format: string) {
		return !!format.toLowerCase().match(this.validationPattern);
	}
}

BaseNFormat satisfies FormatType<BaseNFormatCreationArguments, BaseNFormatOptions>;
