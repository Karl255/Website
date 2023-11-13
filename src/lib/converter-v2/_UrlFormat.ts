import type { Format, FormatType, Stream } from "./_format";

export default class UrlFormat implements Format {
	static name = "URL encoded text";

	get name() {
		return UrlFormat.name;
	}

	decode(format: string) {
		const text = decodeURIComponent(format).replaceAll("+", " ");
		return [...text].map((char) => char.charCodeAt(0));
	}

	encode(stream: Stream) {
		const text = String.fromCodePoint(...stream);
		return new URLSearchParams({ a: text }).toString().slice(2);
	}

	validate(format: string) {
		try {
			this.decode(format);
			return [...format].every((char) => char.charCodeAt(0) < 256);
		} catch (error) {
			return false;
		}
	}
}

UrlFormat satisfies FormatType;
