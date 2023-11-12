import type { ComponentType, SvelteComponent } from "svelte";

export type Stream = number[];

export interface Format {
	name: string;
	encode: (stream: Stream) => string;
	decode: (format: string) => Stream;
	validate: (format: string) => boolean;
}

export interface CreateArgumentsComponent extends SvelteComponent {
	getSettings(): any;
}

export interface FormatOption {
	new (options?: any): Format;
	name: string;
	CreationArgumentsComponent?: ComponentType<CreateArgumentsComponent>;
}
