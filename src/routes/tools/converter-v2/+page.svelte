<script lang="ts">
	import ConverterTextboxV2 from "$lib/ConverterTextbox-v2.svelte";
	import {
		defaultFormats,
		formatTypes,
		type Format,
		type FormatCreateArgumentsComponent,
		type Stream,
	} from "$lib/converter-v2";
	import { writable } from "svelte/store";

	const byteStreamStore = writable<Stream>([]);

	let selectedFormatIndex: number = 0;
	let chosenFormats: Format<any>[] = defaultFormats;
	let optionsComponent: FormatCreateArgumentsComponent<any> | null = null;

	function addSelectedFormat() {
		chosenFormats.push(new formatTypes[selectedFormatIndex](optionsComponent?.getCreationArguments()));
		chosenFormats = chosenFormats;
	}

	function removeFormat(removedFormat: Format<any>) {
		chosenFormats = chosenFormats.filter((format) => format !== removedFormat);
	}
</script>

<div class="page">
	<section class="panel">
		<h2>Choose your formats</h2>

		<div class="panel__content format-options">
			<select bind:value={selectedFormatIndex}>
				{#each formatTypes as formatOption, index}
					<option value={index}>{formatOption.name}</option>
				{/each}
			</select>

			<div class="stretch">
				{#if formatTypes[selectedFormatIndex].CreationArgumentsComponent}
					<svelte:component
						this={formatTypes[selectedFormatIndex].CreationArgumentsComponent}
						bind:this={optionsComponent}
					/>
				{/if}
			</div>

			<button on:click={addSelectedFormat}>Add</button>
		</div>
	</section>

	<div class="flexible-cards">
		{#each chosenFormats as format (format)}
			<!-- prettier-ignore -->
			<ConverterTextboxV2 {byteStreamStore} {format} on:remove={() => removeFormat(format)} />
		{/each}
	</div>

	<div class="panel">
		<h1>Universal encoder-decoder V2</h1>

		<div class="panel__content">
			<p>
				This tool converts between several encodings at once, right as you type. Currently the converter doesn't
				work perfectly with Unicode.
			</p>
			<p>
				If you have any suggestions, create an issue on
				<a href="https://github.com/Karl255/Website/">this website's GitHub repo</a>.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.page {
		grid-column: content-wide-start / content-wide-end;

		display: grid;
		gap: 2rem;
	}

	.format-options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}

	.stretch {
		flex-grow: 1;
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
