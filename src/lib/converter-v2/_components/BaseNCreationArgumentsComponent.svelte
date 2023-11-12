<script lang="ts">
	import type { BaseNFormatCreationArguments } from "../_BaseNFormat";

	let base: number = 10;

	export function getCreationArguments(): BaseNFormatCreationArguments {
		return { base };
	}
</script>

<!-- prettier-ignore -->
<input type="number" bind:value={base}>
