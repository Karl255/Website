import Rot13OptionsComponent from "./_components/Rot13OptionsComponent.svelte";
import type { Format, FormatType, Stream } from "./_format";

export interface Rot13FormatOptions {
	shiftAmount: number;
}

export const defaultOptions: Rot13FormatOptions = {
	shiftAmount: 13,
};

export default class Rot13Format implements Format<Rot13FormatOptions> {
	static name = "ROT13";
	OptionsComponent = Rot13OptionsComponent;

	options = defaultOptions;

	get name() {
		return `ROT${this.options.shiftAmount}`;
	}

	decode(format: string) {
		return [...format].map((char) => rotate(char.charCodeAt(0), -this.options.shiftAmount));
	}

	encode(stream: Stream) {
		return String.fromCodePoint(...stream.map((char) => rotate(char, this.options.shiftAmount)));
	}

	validate(format: string) {
		return [...format].every((char) => char.charCodeAt(0) < 256);
	}
}

Rot13Format satisfies FormatType<never, Rot13FormatOptions>;

function rotate(charCode: number, shiftAmount: number) {
	const ranges = [
		["A".charCodeAt(0), "Z".charCodeAt(0)],
		["a".charCodeAt(0), "z".charCodeAt(0)],
	];

	const range = ranges.find(([start, end]) => charCode >= start && charCode <= end);

	if (range) {
		// prettier-ignore
		return (charCode - range[0] + 26 + shiftAmount) % 26 + range[0];
	}

	return charCode;
}
