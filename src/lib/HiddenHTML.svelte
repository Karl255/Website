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
	<p>{@html decodedHTML}</p>
{:else}
	<button class="btn" on:click={handleShowContent}>Click to reveal</button>
{/if}
