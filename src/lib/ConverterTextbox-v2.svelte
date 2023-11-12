<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { get, type Writable } from "svelte/store";
	import type { Format, FormatOptionsComponent, Stream } from "./converter-v2";

	const dispatch = createEventDispatcher<{ remove: null }>();

	export let byteStreamStore: Writable<Stream>;
	export let format: Format<any>;
	let optionsComponent: FormatOptionsComponent<any> | null = null;

	let text: string;
	let valid: boolean;

	let delayedValidTimer: ReturnType<typeof setTimeout>;
	let delayedValid: boolean;

	byteStreamStore.subscribe((byteStream) => {
		text = format.encode(byteStream);
		setValid(true);
	});

	function reformat() {
		text = format.encode(get(byteStreamStore));
	}

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
			reformat();
		}
	}

	function onOptionsChanged() {
		if (optionsComponent) {
			format.options = optionsComponent.getOptions();

			if (valid) {
				reformat();
			}
		}
	}
</script>

<section class="panel">
	<div class="header">
		<h2>{format.name}</h2>
		{#if format.OptionsComponent}
			<svelte:component
				this={format.OptionsComponent}
				bind:this={optionsComponent}
				on:change={onOptionsChanged}
			/>
		{/if}
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
		align-items: center;
		gap: 1rem;

		button {
			background: none;
			border: none;
			border-radius: 0.25rem;

			margin-left: auto;
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
