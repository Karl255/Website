<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { Decoder, Encoder, Stream } from "./converter";
	import type { FormEventHandler } from "svelte/elements";

	export let title: string;
	export let decoder: Decoder;
	export let encoder: Encoder;
	export let byteStream: Writable<Stream>;
	let value = "";

	byteStream.subscribe((stream: Stream) => {
		let str = encoder(stream);

		if (str) {
			value = str;
		}
	});

	const handleInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
		let stream = decoder((event.target as any).value); // TODO: improve typing by partially inlining function

		if (stream) {
			byteStream.set(stream);
		}
	};
</script>

<section class="panel">
	<!-- TODO: improve -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<h1>{@html title}</h1>
	<textarea
		class="panel__content code"
		rows="8"
		on:input={handleInput}
		bind:value
		autocapitalize="none"
		autocomplete="off"
		autocorrect="off"
		spellcheck="false"
	></textarea>
</section>

<style lang="scss">
	textarea {
		width: 100%;
		resize: none;
	}
</style>
