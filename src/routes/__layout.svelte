<script>
	import "../styles/main.scss";
	import { pageTitle } from "$lib/pageStores.js";
	
	let title;
	pageTitle.subscribe(val => title = val);
</script>

<svelte:head>
	<title>{title}</title>	
</svelte:head>

<header>
	<div class="subcontainer-main">
		<h1>{title}</h1>
		<a href=".">Home</a>
		<a href="/converter">Converter</a>
		<a href="/about">About & Contact</a>
	</div>
</header>
<main>
	<slot></slot>
</main>
<footer>
	<span>Copyleft <span style="display: inline-block; transform: scaleX(-1)">©</span> Karl</span>
</footer>
