<script lang="ts">
	import type { BaseNFormatOptions } from "./_format_baseN";

	let base: number = 10;

	export function getSettings(): BaseNFormatOptions {
		return { base };
	}
</script>

<!-- prettier-ignore -->
<input type="number" bind:value={base}>
