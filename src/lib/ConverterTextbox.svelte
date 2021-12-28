<script>
	export let title;
	export let decoder;
	export let encoder;
	export let byteStream;
	let value = "";
	
	byteStream.subscribe(stream => {
		if (typeof encoder === "function") {
			let str = encoder(stream)
			
			if (typeof(str) === "string") {
				value = str;
			}
		}
	});
	
	function handleInput(event) {
		let stream = decoder(event.srcElement.value);
		
		if (typeof(stream) == "object") {
			byteStream.set(stream);
		}
	}
</script>

<section class="panel">
	<h1>{@html title}</h1>
	<textarea class="panel-content code" rows=8 on:input={handleInput} bind:value={value} autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false"></textarea>
</section>

<style lang="scss">
	textarea {
		width: 100%;
		resize: none;
	}
</style>
