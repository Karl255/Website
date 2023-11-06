<script lang="ts">
	import "../styles/main.scss";
	import NavigationBar from "$lib/NavigationBar.svelte";
</script>

<svelte:head>
	<link rel="preload" href="/background-pattern.png" as="image">
</svelte:head>

<NavigationBar />
<slot></slot>
