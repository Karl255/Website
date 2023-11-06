import type { ComponentType, SvelteComponent } from "svelte";

export type Stream = number[];

export type Encoder = (stream: Stream) => string;
export type Decoder = (format: string) => Stream;
export type Validator = (format: string) => boolean;

export interface Format {
	name: string;
	encode: Encoder;
	decode: Decoder;
	validate: Validator;
}

export interface FormatOption {
	new (options?: any): Format;
	name: string;
	OptionsComponent?: ComponentType<OptionsComponent>;
}

export interface OptionsComponent extends SvelteComponent {
	getSettings(): any;
}
