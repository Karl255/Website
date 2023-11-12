import BaseNFormat from "$lib/converter-v2/_BaseNFormat";
import { beforeEach, describe, expect, test } from "vitest";

test("default base is 10", () => {
	expect(new BaseNFormat().base).toBe(10);
});

describe("base 2, no leading, multiple words", () => {
	let base2Format: BaseNFormat;

	beforeEach(() => {
		base2Format = new BaseNFormat({ base: 2 });
	});

	test("base is 2", () => {
		expect(base2Format.base).toBe(2);
	});

	test("decodes 0-255", () => {
		for (let i = 0; i < 255; i++) {
			const decoded = base2Format.decode(i.toString(2));
			expect(decoded).toEqual([i]);
		}
	});

	test("encodes 0-255 without leading", () => {
		for (let i = 0; i < 255; i++) {
			expect(base2Format.encode([i])).toBe(i.toString(2));
		}
	});

	// prettier-ignore
	test("decodes multiple words", () => {
		expect(base2Format.decode("101010 01010101")).toEqual([42, 85]);
		expect(base2Format.decode("11000101 10100001 01001011")).toEqual([197, 161, 75]);
		expect(base2Format.decode("01111011 00100000 10101111 10100010 00110000")).toEqual([123, 32, 175, 162, 48]);
		expect(base2Format.decode("11110010 11001100 01110111 10100010 00101000 01011101 10100110"))
			.toEqual([242, 204, 119, 162, 40, 93, 166]);
	});

	// prettier-ignore
	test("encodes multiple words without leading", () => {
		expect(base2Format.encode([42, 85])).toEqual("101010 1010101");
		expect(base2Format.encode([197, 161, 75])).toEqual("11000101 10100001 1001011");
		expect(base2Format.encode([123, 32, 175, 162, 48])).toEqual("1111011 100000 10101111 10100010 110000");
		expect(base2Format.encode([242, 204, 119, 162, 40, 93, 166]))
			.toEqual("11110010 11001100 1110111 10100010 101000 1011101 10100110");
	});
});

describe("base 16, no leading, lowercase", () => {
	let base16Format: BaseNFormat;

	beforeEach(() => {
		base16Format = new BaseNFormat({ base: 16 });
	});

	test("base is 16", () => {
		expect(base16Format.base).toBe(16);
	});

	test("decodes 0-255", () => {
		for (let i = 2; i < 255; i++) {
			const decoded = base16Format.decode(i.toString(16));
			expect(decoded).toEqual([i]);
		}
	});

	test("encodes 0-255 without leadingm, lowercase", () => {
		for (let i = 2; i < 255; i++) {
			expect(base16Format.encode([i])).toBe(i.toString(16));
		}
	});

	test("can decode mixed-case", () => {
		expect(base16Format.decode("aB Cd")).toEqual([171, 205]);
	});
});
