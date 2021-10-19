<svelte:head>
	<title>Karlo Bistrički - Personal website</title>
</svelte:head>

<div class="hero">
	<h1>Hi, I'm Karlo.</h1>
	<p>I am a student who primarily does software development, but I also do design and occasionally work with electronics.</p>
	<a href="/about-me">Learn about me</a>
	<img class="hidden">
</div>

<style lang="scss">
	.hero {
		grid-column: 2 / -2;
		gap: 1rem;
		
		h1 {
			grid-column: 1 / 5;
			grid-row: 1;
		}
		
		p {
			grid-column: 1 / 4;
			grid-row: 2;
			
			font-size: 1.25rem; // 20px
		}
		
		a {
			grid-column: 1 / 4;
			grid-row: 3;
		}
		
		img {
			grid-column: 4 / 7;
			grid-row: 1 / span 4;
		}
	}
	
	img.hidden {
		display: none;
	}
</style>
