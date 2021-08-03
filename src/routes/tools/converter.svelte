<script>
	// page title store which is read by the layout
	import { pageTitle } from "$lib/pageStores.js";
	
	const title = "Converter";
	pageTitle.set(title);
	
	import { onMount } from "svelte";
	import ConverterTextbox from "$lib/ConverterTextbox.svelte"
	import converter from "$lib/converter.js";
	
	let dummyElement;
	
	// element bindings aren't instantly initialized
	onMount(() => {
		converter.htmlEncodingDummy.element = dummyElement;
		// converter.byteStream.set([..."Example text"].map(c => c.charCodeAt(0)));
	});
</script>

<div class="cards">
	{#each converter.formats as format}
		<ConverterTextbox byteStream={converter.byteStream} decoder={format.decode} encoder={format.encode} title={format.name} />
	{/each}
	<section class="full-width">
		<h3>This is a universal encoding converter (almost)</h3>
		<p>It has certain shortcommings: the text input isn't truly unicode, it's UTF-16 and if there's non-ASCII characters the string won't be transcoded into certain encodings (base64). Also the RegExes for input checking are no all perfect (eg. URL encoding).</p>
		<p>You can let me know about any important bugs and issues or give suggestions in form of an issue on the GitHub repo for this website. You can find the link for it on the <a href="/about">about page</a>.</p>
	</section>
	<div id="input-html-dummy" class="dummy" bind:this={dummyElement}></div>
</div>

<style>
	.full-width {
		min-width: 100%;
	}
</style>
