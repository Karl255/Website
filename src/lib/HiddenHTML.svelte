<script>
	export let encodedHTML;
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
	<button on:click={handleShowContent}>Click to reveal</button>
{/if}
