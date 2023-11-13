import type { Format, FormatType, Stream } from "./_format";

export default class HtmlEntitiesFormat implements Format {
	static name = "HTML entities";

	get name() {
		return HtmlEntitiesFormat.name;
	}

	private dummyElement: HTMLParagraphElement;

	constructor() {
		this.dummyElement = document.createElement("p");
	}

	decode(format: string) {
		this.dummyElement.innerHTML = format;
		return [...this.dummyElement.innerText].map((char) => char.charCodeAt(0));
	}

	encode(stream: Stream) {
		this.dummyElement.innerText = String.fromCodePoint(...stream);
		return this.dummyElement.innerHTML;
	}

	validate(format: string) {
		const condition = (char: string) => char.charCodeAt(0) < 256 && char !== "<" && char !== ">";

		return [...format].every(condition);
	}
}

HtmlEntitiesFormat satisfies FormatType;
