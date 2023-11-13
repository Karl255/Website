import AsciiFormat from "./_AsciiFormat";
import BaseNFormat from "./_BaseNFormat";
import HtmlEntitiesFormat from "./_HtmlEntitiesFormat";
import type { Format, FormatType } from "./_format";

export * from "./_format";

// prettier-ignore
export const formatTypes: FormatType<any, any>[] = [
	AsciiFormat,
	BaseNFormat,
	HtmlEntitiesFormat,
];

export const defaultFormats: Format<any>[] = [
	new AsciiFormat(),
	new BaseNFormat({ base: 16 }),
	new BaseNFormat({ base: 2 }),
	new BaseNFormat({ base: 10 }),
	new HtmlEntitiesFormat(),
];

/*
TODO formats:
URL encoding
ROT13 (variable)
base64
(new)
unicode
hashes?
encryption?
*/
