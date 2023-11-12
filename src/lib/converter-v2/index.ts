import AsciiFormat from "./_AsciiFormat";
import BaseNFormat from "./_BaseNFormat";
import BinaryFormat from "./_BinaryFormat";
import HexFormat from "./_HexFormat";
import type { Format, FormatType } from "./_format";

export * from "./_format";

// prettier-ignore
export const formatTypes: FormatType<any, any>[] = [
	AsciiFormat satisfies FormatType<any, never>,
	BaseNFormat,
	HexFormat,
	BinaryFormat,
];

export const defaultFormats: Format<any>[] = [
	new AsciiFormat(),
	new BaseNFormat({ base: 16 }),
	new BaseNFormat({ base: 2 }),
	new BaseNFormat({ base: 10 }),
];

/*
TODO formats:
HTML entities (create a new element without adding it to the DOM)
URL encoding
ROT13 (variable)
base64
(new)
hashes?
encryption?
*/
