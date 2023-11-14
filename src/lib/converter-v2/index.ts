import AsciiFormat from "./_AsciiFormat";
import Base64Format from "./_Base64Format";
import BaseNFormat from "./_BaseNFormat";
import HtmlEntitiesFormat from "./_HtmlEntitiesFormat";
import UrlFormat from "./_UrlFormat";
import type { Format, FormatType } from "./_format";

export * from "./_format";

// prettier-ignore
export const formatTypes: FormatType<any, any>[] = [
	AsciiFormat,
	BaseNFormat,
	Base64Format,
	HtmlEntitiesFormat,
	UrlFormat,
];

export const defaultFormats: Format<any>[] = [
	new AsciiFormat(),
	new Base64Format(),
	new BaseNFormat({ base: 16 }),
	new BaseNFormat({ base: 2 }),
];

/*
TODO formats:
ROT13 (variable)
(new)
unicode
hashes?
encryption?
*/
