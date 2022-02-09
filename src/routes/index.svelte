<svelte:head>
	<title>Karlo Bistrički - Personal website</title>
</svelte:head>

<main>
	<div class="glass hero">
		<h1>Hi, I'm Karlo.</h1>
		<div class="description">
			<p>I am a software engineering student. I do software development (primarily), a bit of design and I occasionally work with electronics.</p>
			<!-- TODO: add a bit more info here -->
		</div>
		<a href="/about-me">Learn about me</a>
		<img src="/profile.jpg" alt="avatar">
	</div>
</main>

<style lang="scss">
	@use "../styles/imports";
	
	.hero {
		display: grid;
		grid-template-areas:
			"profile"
			"title"
			"description"
			"link";
		
		gap: 1rem;
		font-size: 1.25rem; // 20px
		
		h1 {
			grid-area: title;
		}
		
		.description {
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
		
		@media #{imports.$desktop-only} {
			grid-template-areas:
				".           profile"
				"title       profile"
				"description profile"
				"link        profile"
				".           profile";
		}
	}
</style>
