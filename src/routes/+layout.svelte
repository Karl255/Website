<script lang="ts">
	import "../styles/main.scss";
	import NavigationBar from "$lib/NavigationBar.svelte";
</script>

<svelte:head>
	<!-- prettier-ignore -->
	<link rel="preload" href="/background-pattern.png" as="image">
</svelte:head>

<NavigationBar />
<slot />
