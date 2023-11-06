import type { Format, Stream } from "./_format";

// TODO
const asciiFormat: Format = {
	name: "ASCII",
	decode: (format: string) => {
		return [...format].map((char) => char.charCodeAt(0));
	},
	encode: (stream: Stream) => {
		return String.fromCodePoint(...stream);
	},
	validate: (format: string) => {
		return [...format].every((char) => char.charCodeAt(0) < 256);
	},
};

export default asciiFormat;
