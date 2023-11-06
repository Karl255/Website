export function removeWhitespace(text: string): string {
	return text.replaceAll(/\s/g, "");
}
