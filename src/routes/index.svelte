<svelte:head>
	<title>Karlo Bistrički - Personal website</title>
</svelte:head>

<main>
	<div class="glass hero">
		<h1>Hi, I'm Karlo.</h1>
		<p>I am a student who primarily does software development, but I also do some design and occasionally work with electronics.</p>
		<a href="/about-me">Learn about me</a>
		<img src="/profile.jpg">
	</div>
</main>

<style lang="scss">
	.hero {
		grid-column: content-start / content-end;
		display: grid;
		grid-template-areas:
			".           profile"
			"title       profile"
			"description profile"
			"link        profile"
			".           profile";
		
		gap: 1rem;
		font-size: 1.25rem; // 20px
		
		h1 {
			grid-area: title;
		}
		
		p {
			grid-area: description;
		}
		
		a {
			grid-area: link;
		}
		
		img {
			grid-area: profile;
			place-self: center;
			
			width: 240px;
			aspect-ratio: 1;
			border: 3px solid var(--bg-200);
			border-radius: 50%;
		}
		
		@media (max-width: 768px) {
			grid-template-areas:
				"profile"
				"title"
				"description"
				"link";
		}
	}
	
	img.hidden {
		display: none;
	}
</style>
