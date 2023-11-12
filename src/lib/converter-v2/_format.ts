import type { ComponentType, SvelteComponent } from "svelte";

export type Stream = number[];

export interface FormatType<TArgs = never, TOptions = never> {
	CreationArgumentsComponent?: ComponentType<FormatCreateArgumentsComponent<TArgs>>;
	name: string;
	new (args?: TArgs): Format<TOptions>;
}

export interface Format<TOptions = never> {
	OptionsComponent?: ComponentType<FormatOptionsComponent<TOptions>>;
	name: string;
	options?: TOptions;
	encode: (stream: Stream) => string;
	decode: (format: string) => Stream;
	validate: (format: string) => boolean;
}

export interface FormatCreateArgumentsComponent<T> extends SvelteComponent {
	getCreationArguments(): T;
}

export interface FormatOptionsComponent<T> extends SvelteComponent {
	getOptions(): T;
}
