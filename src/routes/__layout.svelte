<script>
	import "../styles/main.scss";
	import NavigationDropdown from "$lib/NavigationDropdown.svelte";
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
		<ul>
			<li><a href="/">Home</a></li>
			<li>
				<NavigationDropdown title="Tools">
					<a href="/tools/converter">Universal converter</a>
				</NavigationDropdown>
			</li>
			<li>
				<NavigationDropdown title="Blog">
					<a href="/blog/test-post">Test blog</a>
				</NavigationDropdown>
			</li>
			<li><a href="/about">About & Contact</a></li>
		</ul>
	</div>
</header>
<main>
	<slot></slot>
</main>
<!--
	<footer>
	</footer>
-->
