import type { Format, Stream } from "./_format";

// TODO
const asciiFormat: Format = {
	name: "ASCII",
	decode: (_format: string) => {
		return [];
	},
	encode: (_stream: Stream) => {
		return "";
	},
	validate: (_format: string) => {
		return true;
	},
};

export default asciiFormat;
