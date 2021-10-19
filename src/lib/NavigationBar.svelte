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
		<li class="branch">
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
		padding: 16px 24px;
	}
</style>
