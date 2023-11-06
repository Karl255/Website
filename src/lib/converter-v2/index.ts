import type { FormatOption } from "./_format";
import AsciiFormat from "./_format_ascii";
import BinaryFormat from "./_format_binary";
import HexFormat from "./_format_hex";

export * from "./_format";

// prettier-ignore
export const formatOptions: FormatOption[] = [
	HexFormat,
	BinaryFormat,
	AsciiFormat,
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
