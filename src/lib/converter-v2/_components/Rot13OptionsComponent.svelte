<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { Rot13FormatOptions } from "../_Rot13Format";

	const dispatch = createEventDispatcher<{ change: null }>();

	let shiftAmount = 13;

	export function getOptions(): Rot13FormatOptions {
		return { shiftAmount };
	}

	function onChange() {
		console.log("CHANGE");
		dispatch("change");
	}
</script>

<!-- prettier-ignore -->
<input type="number" min="0" max="26" bind:value={shiftAmount} on:change={onChange}>

<!-- TODO: improve design -->
