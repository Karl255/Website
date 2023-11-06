import type { Format, Stream } from "./_format";
import { removeWhitespace } from "./_util";

// TODO
const hexFormat: Format = {
	name: "Hexadecimal",
	decode: (format: string) => {
		// prettier-ignore
		const hexPairs: string[] = removeWhitespace(format)
			.match(/.{1,2}/g) ?? [];

		return hexPairs.map((hexPair) => parseInt(hexPair, 16));
	},
	encode: (stream: Stream) => {
		// prettier-ignore
		return stream
			.map((byte) => ("00" + byte.toString(16)).slice(-2))
			.join(" ");
	},
	validate: (format: string) => {
		return removeWhitespace(format).length % 2 == 0 && !!format.match(/^[0-9a-fA-F\s]*$/);
	},
};

export default hexFormat;
