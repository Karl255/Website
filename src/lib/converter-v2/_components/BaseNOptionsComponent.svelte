<script lang="ts">
	import { Leading0Option, type BaseNFormatOptions } from "../_BaseNFormat";

	let leading0Option: Leading0Option = Leading0Option.Pad;

	export function getOptions(): BaseNFormatOptions {
		return { leading0s: leading0Option };
	}
</script>

<select bind:value={leading0Option}>
	{#each Object.values(Leading0Option) as option}
		<!-- prettier-ignore -->
		<option value={option} selected={option === Leading0Option.Pad}>
			{option}
		</option>
	{/each}
</select>
