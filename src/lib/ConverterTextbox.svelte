<script>
	export let title;
	export let decoder;
	export let encoder;
	export let byteStream;
	let value = "";
	
	byteStream.subscribe(stream => {
		if (typeof encoder === "function")
			value = encoder(stream)
	});
	
	
	function handleInput(event) {
		let stream = decoder(event.srcElement.value);
		
		if (stream) 
			byteStream.set(stream);
	}
	
</script>
<section>
	<h3>{@html title}</h3>
	<textarea rows=5 on:input={handleInput} bind:value={value}></textarea>
</section>

<style>
	textarea {
		font-family: monospace;
		resize: none;
	}
</style>
