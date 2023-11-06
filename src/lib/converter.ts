import { writable } from "svelte/store";

const byteStream = writable<Stream>([]);
const htmlEncodingDummy: { element: any | null } = { element: null };

export type Stream = number[];

function stringToStream(str: string, func: (char: number) => number = c => c): Stream {
	return [...str].map(c => func(c.charCodeAt(0)));
}

// text
function decodeText(input: string): Stream | undefined {
	if (typeof input !== "string") {
		return;
	}

	return stringToStream(input);
}

function encodeText(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	return String.fromCharCode(...stream);
}

// url
function decodeUrl(input: string): Stream | undefined {
	if (typeof input !== "string") {
		return;
	}

	if (!input.match(/^([0-9A-Za-z\-_.~!*'();:@&=+$,/?#[\]']|%[0-9A-Fa-f]{2})*$/)) {
		return;
	}

	return stringToStream(decodeURIComponent(input));
}

function encodeUrl(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	return encodeURIComponent(String.fromCharCode(...stream));
}

// html
function decodeHtml(input: string): Stream | undefined {
	if (typeof input !== "string") {
		return;
	}

	if (htmlEncodingDummy.element === null) {
		return;
	}

	htmlEncodingDummy.element.innerHTML = input;
	const text: string = htmlEncodingDummy.element.innerText;

	return stringToStream(text);
}

function encodeHtml(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	if (htmlEncodingDummy.element === null) {
		return;
	}

	htmlEncodingDummy.element.innerText = String.fromCharCode(...stream);
	return htmlEncodingDummy.element.innerHTML;
}

// hex
function decodeHex(input: string): Stream | undefined {
	if (typeof input !== "string") {
		return;
	}

	input = input
		.trim()
		.replaceAll(" ", "")
		.replaceAll("\n", "")
		.replaceAll("\r", "")
		.replaceAll("\t", "");

	if (input.length % 2 !== 0 || !input.match(/^[0-9a-fA-F]*$/)) {
		return;
	}

	const stream: Stream = [];

	for (let i = 0; i < input.length; i += 2) {
		stream.push(parseInt(input.substr(i, 2), 16));
	}

	return stream;
}

function encodeHex(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	return stream
		.map(x => ("00" + x.toString(16)).slice(-2))
		.join(" ");
}

// binary
function decodeBinary(input: string): Stream | undefined {
	if (typeof input !== "string") {
		return;
	}

	input = input
		.trim()
		.replaceAll(" ", "")
		.replaceAll("\n", "")
		.replaceAll("\r", "")
		.replaceAll("\t", "");

	if (input.length % 8 !== 0 || !input.match(/^[01]*$/)) {
		return;
	}

	const stream: Stream = [];

	for (let i = 0; i < input.length; i += 8) {
		stream.push(parseInt(input.substr(i, 8), 2));
	}

	return stream;
}

function encodeBinary(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	return stream
		.map(x => ("00000000" + x.toString(2)).slice(-8))
		.join(" ");
}

// decimal
function decodeDecimal(input: string): Stream | undefined {
	if (typeof input !== "string") {
		return;
	}

	input = input
		.trim()
		.replaceAll("\n", " ")
		.replaceAll("\r", " ")
		.replaceAll("\t", " ");

	if (!input.match(/^[0-9 ]*$/)) {
		return;
	}

	if (input === "") {
		return [];
	}

	return input.split(" ").map(x => parseInt(x) % 256);
}

function encodeDecimal(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	return stream
		.map(x => x.toString())
		.join(" ");
}

// base 64
function decodeBase64(input: string): Stream | undefined {
	if (typeof input !== "string") {
		return;
	}

	input = input
		.trim()
		.replaceAll(" ", "")
		.replaceAll("\n", "")
		.replaceAll("\r", "")
		.replaceAll("\t", "");

	if (!(input.length % 4 === 0 && (input.length === 0 || input.match(/^[0-9A-Za-z+/]+={0,2}$/)))) {
		return;
	}

	return stringToStream(atob(input));
}

function encodeBase64(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	const text = String.fromCharCode(...stream);

	// eslint-disable-next-line no-control-regex
	if (!text.match(/^[\x00-\xff]*$/)) return;

	return btoa(text);
}

// rot13
function decodeRot13(text: string): Stream | undefined {
	if (typeof text !== "string") {
		return;
	}
	return stringToStream(text, charCodeRot13);
}

function encodeRot13(stream: Stream): string | undefined {
	if (typeof stream !== "object") {
		return;
	}

	return String.fromCharCode(...stream.map(charCodeRot13));
}

function charCodeRot13(char: number) {
	const char_A = "A".charCodeAt(0);
	const char_a = "a".charCodeAt(0);
	const char_M = "M".charCodeAt(0);
	const char_m = "m".charCodeAt(0);
	const char_N = "N".charCodeAt(0);
	const char_n = "n".charCodeAt(0);
	const char_Z = "Z".charCodeAt(0);
	const char_z = "z".charCodeAt(0);

	if (char >= char_A && char <= char_M || char >= char_a && char <= char_m) { // first 13
		return char + 13;
	}
	if (char >= char_N && char <= char_Z || char >= char_n && char <= char_z) { // last 13
		return char - 13;
	}

	return char;
}

export type Decoder = (text: string) => Stream | undefined;
export type Encoder = (stream: Stream) => string | undefined;

export interface Format {
	name: string;
	decode: Decoder;
	encode: Encoder;
}

const formats: Format[] = [
	{
		name: "Text",
		decode: decodeText,
		encode: encodeText,
	},
	{
		name: "URL encoded text",
		decode: decodeUrl,
		encode: encodeUrl,
	},
	{
		name: "HTML entities",
		decode: decodeHtml,
		encode: encodeHtml,
	},
	{
		name: "ROT13",
		decode: decodeRot13,
		encode: encodeRot13,
	},
	{
		name: "Hexadecimal<sub>(16)</sub>",
		decode: decodeHex,
		encode: encodeHex,
	},
	{
		name: "Binary<sub>(2)</sub>",
		decode: decodeBinary,
		encode: encodeBinary,
	},
	{
		name: "Decimal<sub>(10)</sub>",
		decode: decodeDecimal,
		encode: encodeDecimal,
	},
	{
		name: "Base64<sub>(64)</sub>",
		decode: decodeBase64,
		encode: encodeBase64,
	},
];

export default {
	byteStream: byteStream,
	formats: formats,
	htmlEncodingDummy: htmlEncodingDummy,
};
