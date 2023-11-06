import type { Format } from "./_format";
import asciiFormat from "./_format_ascii";
import binaryFormat from "./_format_binary";
import hexFormat from "./_format_hex";

export * from "./_format";

export const formats: Format[] = [asciiFormat, hexFormat, binaryFormat];
