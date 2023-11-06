<script lang="ts">
	import { get, type Writable } from "svelte/store";
	import type { Format, Stream } from "./converter-v2";

	export let byteStreamStore: Writable<Stream>;
	export let format: Format;

	let text: string;
	let valid: boolean;

	byteStreamStore.subscribe((byteStream) => {
		text = format.encode(byteStream);
	});

	function onInput(input: string) {
		valid = format.validate(input);

		if (valid) {
			byteStreamStore.set(format.decode(input));
		}
	}

	function onDeselect() {
		if (valid) {
			text = format.encode(get(byteStreamStore));
		}
	}
</script>

<section class="panel">
	<h2>{format.name}</h2>

	<!-- NOTE: order of on:input and bind:valud IS IMPORTANT -->
	<textarea
		class="panel-content code"
		rows="8"
		on:input={(e) => onInput(e.currentTarget.value)}
		bind:value={text}
		on:blur={() => onDeselect()}
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
