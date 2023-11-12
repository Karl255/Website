<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Leading0Option, type BaseNFormatOptions } from "../_BaseNFormat";

	const dispatch = createEventDispatcher<{ change: null }>();

	let leading0Option: Leading0Option = Leading0Option.Pad;

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
		<option value={option} selected={option === Leading0Option.Pad}>
			{option}
		</option>
	{/each}
</select>
