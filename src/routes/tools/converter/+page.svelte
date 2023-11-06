<script lang="ts">
	import { onMount } from "svelte";
	import ConverterTextbox from "$lib/ConverterTextbox.svelte";
	import converter from "$lib/converter";

	let dummyElement: any; // TODO

	// element bindings aren't instantly initialized
	onMount(() => {
		converter.htmlEncodingDummy.element = dummyElement;
		// converter.byteStream.set([..."Example text"].map(c => c.charCodeAt(0)));
	});
</script>

<main>
	<div class="flexible-cards">
		{#each converter.formats as format}
			<ConverterTextbox byteStream={converter.byteStream} decoder={format.decode} encoder={format.encode} title={format.name} />
		{/each}
	</div>
		
	<section class="panel">
		<h1>Universal encoder-decoder</h1>
		
		<div class="panel-content">
			<p>This tool converts between several encodings at once, right as you type. Currently the converter doesn't work perfectly with Unicode.</p>
			<p>If you have any suggestions, create an issue on <a href="https://github.com/Karl255/Website/">this website's GitHub repo</a>.</p>
		</div>
	</section>
	
	<div id="input-html-dummy" class="hidden" bind:this={dummyElement}></div>
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
	
	:global(h1) {
		font-size: 1.5rem;
	}
	
	.hidden {
		display: none;
	}
</style>