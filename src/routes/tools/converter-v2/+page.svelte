<script lang="ts">
	import ConverterTextboxV2 from "$lib/ConverterTextbox-v2.svelte";
	import { formats, type Stream } from "$lib/converter-v2";
	import { writable } from "svelte/store";

	const byteStreamStore = writable<Stream>([]);
</script>

<main>
	<div class="flexible-cards">
		{#each formats as format}
			<!-- prettier-ignore -->
			<ConverterTextboxV2 {byteStreamStore} {format} />
		{/each}
	</div>

	<section class="panel">
		<h1>Universal encoder-decoder V2</h1>

		<div class="panel-content">
			<p>
				This tool converts between several encodings at once, right as you type. Currently the converter doesn't
				work perfectly with Unicode.
			</p>
			<p>
				If you have any suggestions, create an issue on
				<a href="https://github.com/Karl255/Website/">this website's GitHub repo</a>.
			</p>
		</div>
	</section>
</main>

<style lang="scss">
	main {
		grid-column: content-wide-start / content-wide-end;

		display: grid;
		gap: 2rem;
	}

	.flexible-cards {
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;

		> :global(*) {
			flex-basis: 400px;
			flex-grow: 1;

			// more real estate on 2560x1440 screens
			@media screen and (min-width: 2100px) {
				flex-basis: 500px;
			}
		}
	}
</style>
