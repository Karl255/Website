<script lang="ts">
	import { get, type Writable } from "svelte/store";
	import type { Format, Stream } from "./converter-v2";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher<{ remove: null }>();

	export let byteStreamStore: Writable<Stream>;
	export let format: Format;

	let text: string;
	let valid: boolean;

	let delayedValidTimer: number;
	let delayedValid: boolean;

	byteStreamStore.subscribe((byteStream) => {
		text = format.encode(byteStream);
		setValid(true);
	});

	function setValid(value: boolean, skipDebounce: boolean = false) {
		valid = value;

		clearTimeout(delayedValidTimer);

		if (value || skipDebounce) {
			delayedValid = value;
		} else {
			delayedValidTimer = setTimeout(() => {
				delayedValid = value;
			}, 500);
		}
	}

	function onInput(input: string) {
		setValid(format.validate(input));

		if (valid) {
			byteStreamStore.set(format.decode(input));
		}
	}

	function onDeselect(input: string) {
		setValid(format.validate(input), true);

		if (valid) {
			text = format.encode(get(byteStreamStore));
		}
	}
</script>

<section class="panel">
	<div class="header">
		<h2>{format.name}</h2>
		<button on:click={() => dispatch("remove")}>X</button>
	</div>

	<!-- NOTE: order of on:input and bind:value is important -->
	<textarea
		class="panel__content code"
		class:invalid={!delayedValid}
		rows="8"
		on:input={(e) => onInput(e.currentTarget.value)}
		on:blur={(e) => onDeselect(e.currentTarget.value)}
		bind:value={text}
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

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			background: none;
			border: none;
			border-radius: 0.25rem;
			padding: 0.25rem;
			line-height: 1;
			cursor: pointer;

			&:hover {
				background-color: var(--glass-400);
			}
		}
	}

	.invalid {
		outline: 1px solid red;
	}
</style>
