import _OptionsBaseN from "./_Options_BaseN.svelte";
import type { Format, Stream } from "./_format";
import { removeWhitespace } from "./_util";

export interface BaseNFormatOptions {
	base?: number;
}

export default class BaseNFormat implements Format {
	static name = "Base N";
	static OptionsComponent = _OptionsBaseN;

	base: number;

	constructor(options?: BaseNFormatOptions) {
		this.base = options?.base ?? 10;
	}

	get name() {
		return `Base ${this.base}`;
	}

	decode(format: string) {
		// prettier-ignore
		return format
			.split(/\s+/)
			.map((octuplet) => parseInt(octuplet, this.base));
	}

	encode(stream: Stream) {
		// prettier-ignore
		return stream
			.map((byte) => byte.toString(this.base))
			.join(" ");
	}

	validate(format: string) {
		return removeWhitespace(format).length % 8 == 0 && !!format.match(/^[01\s]*$/);
	}
}
