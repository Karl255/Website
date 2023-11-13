<script lang="ts">
	import type { BaseNFormatCreationArguments } from "../_BaseNFormat";

	let base: number = 10;

	export function getCreationArguments(): BaseNFormatCreationArguments {
		return { base };
	}

	function setBase(value: number) {
		base = value;
	}
</script>

<button on:click={() => setBase(2)}>2</button>
<button on:click={() => setBase(8)}>8</button>
<button on:click={() => setBase(10)}>10</button>
<button on:click={() => setBase(16)}>16</button>

<!-- prettier-ignore -->
<input type="number" bind:value={base}>

<!-- TODO: improve design -->
