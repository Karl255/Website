import type { Format, FormatOption } from "./_format";
import AsciiFormat from "./_format_ascii";
import BaseNFormat from "./_format_baseN";
import BinaryFormat from "./_format_binary";
import HexFormat from "./_format_hex";

export * from "./_format";

// prettier-ignore
export const formatOptions: FormatOption[] = [
	AsciiFormat,
	BaseNFormat,
	HexFormat,
	BinaryFormat,
];

export const defaultFormats: Format[] = [
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
"raw" formats (varaible base, up to 36?)
base64
(new)
hashes?
encryption
*/
