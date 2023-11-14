import type { Format, FormatType, Stream } from "./_format";

export default class Base64Format implements Format {
	static name = "Base 64";

	get name() {
		return Base64Format.name;
	}

	decode(format: string) {
		const text = atob(format);
		return [...text].map((char) => char.charCodeAt(0));
	}

	encode(stream: Stream) {
		const text = String.fromCodePoint(...stream);
		return btoa(text);
	}

	validate(format: string) {
		return [...format].every((char) => char.charCodeAt(0) < 256);
	}
}

Base64Format satisfies FormatType;
