import _OptionsBaseN from "./_Options_BaseN.svelte";
import type { Format, Stream } from "./_format";

export interface BaseNFormatOptions {
	base?: number;
}

const allDigits = "0123456789abcdefghijklmnopqrstuvwxyz";

export default class BaseNFormat implements Format {
	static name = "Base N";
	static OptionsComponent = _OptionsBaseN;

	base: number;
	validationPattern: any;

	constructor(options?: BaseNFormatOptions) {
		this.base = options?.base ?? 10;

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
