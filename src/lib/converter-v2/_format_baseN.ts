import _OptionsBaseN from "./_Options_BaseN.svelte";
import type { Format, Stream } from "./_format";
import { removeWhitespace } from "./_util";

export interface BaseNFormatOptions {
	base?: number;
}

const allDigits = "0123456789abcdefghijklmnopqrstuvwxyz";
const streamWordMask = 0xff;

export default class BaseNFormat implements Format {
	static name = "Base N";
	static OptionsComponent = _OptionsBaseN;

	base: number;
	validationPattern: any;

	constructor(options?: BaseNFormatOptions) {
		this.base = options?.base ?? 10;

		const validDigits = allDigits.slice(0, this.base);
		this.validationPattern = new RegExp(`^[${validDigits}\\s]*$`);
		console.log(this.validationPattern);
	}

	get name() {
		return `Base ${this.base}`;
	}

	decode(format: string) {
		// prettier-ignore
		return removeWhitespace(format)
			.split(/\s+/)
			.flatMap((word) => this.decodeWord(word));
	}

	private decodeWord(word: string): Stream {
		let decoded = parseInt(word, this.base);

		const stream: Stream = [];

		// always big-endian
		while (decoded != 0) {
			stream.unshift(decoded & streamWordMask);
			decoded >>= 8;
		}

		return stream;
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
