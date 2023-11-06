<script lang="ts">
	export let encodedHTML: string;
	let decodedHTML = "";
	let showing = false;

	function handleShowContent() {
		showing = true;
		decodedHTML = atob(encodedHTML);
	}
</script>

{#if showing}
	<!-- TODO: improve this -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p>{@html decodedHTML}</p>
{:else}
	<!-- prettier-ignore -->
	<button class="btn" on:click={handleShowContent}>Click to reveal</button>
{/if}
