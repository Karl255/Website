import type { Format, FormatType, Stream } from "./_format";

export default class AsciiFormat implements Format {
	static name = "ASCII";

	get name() {
		return AsciiFormat.name;
	}

	decode(format: string) {
		return [...format].map((char) => char.charCodeAt(0));
	}

	encode(stream: Stream) {
		return String.fromCodePoint(...stream);
	}

	validate(format: string) {
		return [...format].every((char) => char.charCodeAt(0) < 256);
	}
}

AsciiFormat satisfies FormatType;
