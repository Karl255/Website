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
	nav {
		background-image: linear-gradient(to bottom, black, transparent);
		font-size: 1rem;
		line-height: 1;
	}
	
	ul {
		grid-column: 2 / -2;
		
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
			border-radius: var(--radius-regular);
			
			display: none;
			position: absolute;
			top: 100%;
			
			white-space: nowrap;
		}
		
		&:hover > ul {
			display: block;
		}
	}
	
	a {
		color: inherit;
		text-decoration: none;
		
		display: block;
		padding: var(--padding-large);
	}
	
	// nav link hover deco
	// above text at the screen edge
	nav li {
		position: relative;
		
		&::before {
			content: "";
			background-color: var(--accent-400);
			
			position: absolute;
			top: 0;
			left: 1.5rem;
			right: 1.5rem;
			height: 0;
			transition: height 200ms;
		}
		
		&:hover::before {
			height: 0.25rem;
		}
	}
	
	// deco on links in the dropdowns is a text underline
	.branch li {
		&::before {
			top: calc(1rem + 1em);
		}
			
		&:hover::before {
			height: 0.125rem;
		}
	}
	
	.hidden {
		display: none;
	}
</style>
