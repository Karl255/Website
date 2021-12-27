<nav>
	<ul>
		<li><a href="/">Home page</a></li>
		<li><a href="/about-me">About me</a></li>
		<li class="branch">
			<a href="#" class="disabled">Tools</a>
			<ul>
				<li><a href="/tools/converter">Universal converter</a></li>
			</ul>
		</li>
		<li class="branch hidden">
			<a href="#" class="disabled">Blog</a>
			<ul>
				<li><a href="/blog/test-post">Test post</a></li>
			</ul>
		</li>
	</ul>
</nav>

<style lang="scss">
	@use "../styles/imports";
	
	nav {
		display: grid;
		grid-template-columns: inherit;
		
		background-image: linear-gradient(to bottom, black, transparent);
		font-size: 1rem;
		line-height: 1;
		z-index: 10;
	}
	
	nav > ul {
		grid-column: content-start / content-end;
		gap: 3rem;
	}
	
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		
		display: flex;	
	}
	
	.branch {
		position: relative;
		display: flex;
		justify-content: center;
		
		> ul {
			background-color: var(--bg-100);
			border-radius: imports.$radius-regular;
			
			display: block;
			position: absolute;
			top: 100%;
			
			white-space: nowrap;
			opacity: 0;
			visibility: hidden;
			transition:
				opacity 100ms,
				visibility 100ms;
		}
		
		&:hover > ul {
			display: block;
			opacity: 1;
			visibility: visible;
		}
		
		&::after {
			content: "🢓";
			position: absolute;
			font-size: 1.25rem;
			
			top: calc(100% - 11px);
			left: 50%;
			transform: translateX(-50%);
		}
	}
	
	a {
		color: inherit;
		text-decoration: none;
		
		display: block;
		padding: imports.$padding-large;
		
		nav > ul > li > & {
			padding-left: 0;
			padding-right: 0;
		}
	}
	
	// nav link hover deco
	// above text at the screen edge
	nav li {
		position: relative;
		
		&::before {
			content: "";
			background-color: var(--accent-500);
			
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 0;
			transition: height 200ms;
		}
		
		&:hover::before {
			height: 0.125rem;
		}
	}
	
	// deco on links in the dropdowns is a text underline
	.branch li {
		&::before {
			top: calc(1rem + 1.25em);
			// because of the 1.5rem padding
			left: 1.5rem;
			right: 1.5rem;
		}
	}
	
	.hidden {
		display: none;
	}
</style>
