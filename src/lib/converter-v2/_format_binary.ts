import type { Format, Stream } from "./_format";
import { removeWhitespace } from "./_util";

export default class BinaryFormat implements Format {
	static name = "Binary";

	get name() {
		return BinaryFormat.name;
	}

	decode(format: string) {
		// prettier-ignore
		const octuplets: string[] = format
			.replace(/\s/g, "")
			.match(/.{1,8}/g) ?? [];

		return octuplets.map((octuplet) => parseInt(octuplet, 2));
	}

	encode(stream: Stream) {
		// prettier-ignore
		return stream
			.map((byte) => ("00000000" + byte.toString(2)).slice(-8))
			.join(" ");
	}

	validate(format: string) {
		return removeWhitespace(format).length % 8 == 0 && !!format.match(/^[01\s]*$/);
	}
}
