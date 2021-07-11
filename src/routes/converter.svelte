<script>
	// page title store which is read by the layout
	import { pageTitle } from "$lib/pageStores.js";
	
	const title = "Converter";
	pageTitle.set(title);
	
	import { writable } from "svelte/store";
	import ConverterTextbox from "$lib/ConverterTextbox.svelte"
	import { onMount } from "svelte";
	const byteStream = writable([]);
	let inputHtmlDummy;
	
	function stringToStream(str, func) {
		if (typeof func !== "function")
			func = c => c;
		
		return [...str].map(c => func(c.charCodeAt(0)));
	}
	
	// text
	function fromText(input) {
		if (typeof input !== "string")
			return false;
		
		return stringToStream(input);
	}
	
	function toText(stream) {
		if (typeof stream !== "object")
			return "";
		
		return String.fromCharCode(...stream);
	}
	
	// url
	function fromUrl(input) {
		if (typeof input !== "string")
			return false;
		
		if (!input.match(/^([0-9A-Za-z\-_.~!\*'\(\);:@&=\+\$,\/\?#\[\]']|%[0-9A-Fa-f]{2})*$/)) return false;
		
		return stringToStream(decodeURIComponent(input));
	}
	
	function toUrl(stream) {
		if (typeof stream !== "object")
			return "";
		
		return encodeURIComponent(String.fromCharCode(...stream));
	}
	
	// html
	let fromHtml;
	let toHtml;
	
	// hex
	function fromHex(input) {
		if (typeof input !== "string")
			return false;
		
		input = input
			.trim()
			.replaceAll(" ", "")
			.replaceAll("\n", "")
			.replaceAll("\r", "")
			.replaceAll("\t", "");
	
		if (input.length % 2 !== 0 || !input.match(/^[0-9a-fA-F]*$/)) return false;
		
		let stream = [];
		
		for (let i = 0; i < input.length; i += 2) {
			stream.push(parseInt(input.substr(i, 2), 16));
		}
		
		return stream;
	}
	
	function toHex(stream) {
		if (typeof stream !== "object")
			return "";
		
		return stream
			.map(x => ("00" + x.toString(16)).slice(-2))
			.join(" ");
	}
	
	// binary
	function fromBinary(input) {
		if (typeof input !== "string")
			return false;
		
		input = input
			.trim()
			.replaceAll(" ", "")
			.replaceAll("\n", "")
			.replaceAll("\r", "")
			.replaceAll("\t", "");
		
		if (input.length % 8 !== 0 || !input.match(/^[01]*$/)) return false;
		
		let stream = [];
		
		for (let i = 0; i < input.length; i += 8) {
			stream.push(parseInt(input.substr(i, 8), 2));
		}
		
		return stream;
	}
	
	function toBinary(stream) {
		if (typeof stream !== "object")
			return "";
		
		return stream
			.map(x => ("00000000" + x.toString(2)).slice(-8))
			.join(" ");
	}
	
	// decimal
	function fromDecimal(input) {
		if (typeof input !== "string")
			return false;
		
		input = input
			.trim()
			.replaceAll("\n", " ")
			.replaceAll("\r", " ")
			.replaceAll("\t", " ");
		
		if (!input.match(/^[0-9 ]*$/)) return false;
		
		if (input === "") {
			return [];
		}
		
		return input.split(" ").map(x => parseInt(x) % 256);
	}
	
	function toDecimal(stream) {
		if (typeof stream !== "object")
			return "";
		
		return stream
			.map(x => x.toString())
			.join(" ");
	}
	
	// base 64
	function fromBase64(input) {
		if (typeof input !== "string")
			return false;
			
		if (typeof atob !== "function")
			return false;
		
		input = input
			.trim()
			.replaceAll(" ", "")
			.replaceAll("\n", "")
			.replaceAll("\r", "")
			.replaceAll("\t", "");
		
		if (!(input.length % 4 === 0 && (input.length === 0 || input.match(/^[0-9A-Za-z+\/]+={0,2}$/)))) return false;
		
		return stringToStream(atob(input));
	}
	
	function toBase64(stream) {
		if (typeof stream !== "object")
			return "";
		
		if (typeof btoa !== "function")
			return false;
		
		let text = String.fromCharCode(...stream);
		
		if (!text.match(/^[\x00-\xff]*$/)) return;
		
		return btoa(text);
	}
	
	// rot13
	function fromRot13(text) {
		if (typeof text !== "string")
			return false;
		
		return stringToStream(input, charCodeRot13);
	}
	
	function toRot13(stream) {
		if (typeof stream !== "object")
			return;
		
		return String.fromCharCode(...stream.map(charCodeRot13));
	}
	
	function charCodeRot13(char) {
		const char_A = "A".charCodeAt(0);
		const char_a = "a".charCodeAt(0);
		const char_M = "M".charCodeAt(0);
		const char_m = "m".charCodeAt(0);
		const char_N = "N".charCodeAt(0);
		const char_n = "n".charCodeAt(0);
		const char_Z = "Z".charCodeAt(0);
		const char_z = "z".charCodeAt(0);
		
		if (char >= char_A && char <= char_M || char >= char_a && char <= char_m) { // first 13
			return char + 13;
		}
		if (char >= char_N && char <= char_Z || char >= char_n && char <= char_z) { // last 13
			return char - 13;
		}
		
		return char;
	}
	
	// because these use a dummy element, they first need to wait for the element to get initialized
	onMount(() => {
		fromHtml = function (input) {
			if (typeof input !== "string")
			return false;
			
			inputHtmlDummy.innerHTML = input;
			let text = inputHtmlDummy.innerText;
			
			return stringToStream(text);
		};
		
		toHtml = function (stream) {
			if (typeof stream !== "object")
			return "";
			
			inputHtmlDummy.innerText = String.fromCharCode(...stream);
			return inputHtmlDummy.innerHTML;
		}
	});
</script>

<div class="cards">
	<ConverterTextbox {byteStream} decoder={fromText} encoder={toText} title="Text (unicode)" />
	<ConverterTextbox {byteStream} decoder={fromUrl} encoder={toUrl} title="Url encoded text" />
	<ConverterTextbox {byteStream} decoder={fromHtml} encoder={toHtml} title="HTML entities" />
	<ConverterTextbox {byteStream} decoder={fromHex} encoder={toHex} title="Hexadecimal<sub>(16)</sub>" />
	<ConverterTextbox {byteStream} decoder={fromBinary} encoder={toBinary} title="Binary<sub>(2)</sub>" />
	<ConverterTextbox {byteStream} decoder={fromDecimal} encoder={toDecimal} title="Decimal<sub>(10)</sub> (space separated)" />
	<ConverterTextbox {byteStream} decoder={fromBase64} encoder={toBase64} title="Base64<sub>(64)</sub>" />
	<ConverterTextbox {byteStream} decoder={fromRot13} encoder={toRot13} title="ROT13" />
	<section class="full-width">
		<h3>This is a universal encoding converter (almost).</h3>
		<p>It has certain shortcommings: the text input isn't truly unicode, it's UTF-16 and if there's non-ASCII characters the string won't be transcoded into certain encodings (base64). Also the RegExes for input checking are no all perfect (eg. URL encoding).</p>
	</section>
	<div id="input-html-dummy" class="dummy" bind:this={inputHtmlDummy}></div>
</div>

<style>
	.full-width {
		min-width: 100%;
	}
</style>
