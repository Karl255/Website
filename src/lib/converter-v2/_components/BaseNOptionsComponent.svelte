<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Leading0Option, type BaseNFormatOptions, defaultOptions } from "../_BaseNFormat";

	const dispatch = createEventDispatcher<{ change: null }>();

	let leading0Option: Leading0Option = defaultOptions.leading0s;

	export function getOptions(): BaseNFormatOptions {
		return { leading0s: leading0Option };
	}

	function onChange() {
		dispatch("change");
	}
</script>

<!-- prettier-ignore -->
<select bind:value={leading0Option} on:change={onChange}>
	{#each Object.values(Leading0Option) as option}
		<option value={option} selected={option === defaultOptions.leading0s}>
			{option}
		</option>
	{/each}
</select>

<!-- TODO: improve design -->
