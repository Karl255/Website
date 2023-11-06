<script lang="ts">
	import { browser } from "$app/environment";
	//import { beforeNavigate } from "$app/navigation";
	import { navigating } from "$app/stores";

	let isOpen: null | true = null;
	navigating.subscribe(v => {
		if (v) {
			isOpen = null;
		}
	});

	if (browser) {
		//beforeNavigate(() => isOpen = null);
	}

	function menuToggle() {
		isOpen = isOpen ? null : true;
	}
</script>

<nav class="content-full-width" data-open={isOpen}>
	<div class="nav-content">
		<button class="menu-icon" on:click={menuToggle}>MENU</button>
		<ul class="top-level">
			<li><a href="/">Home page</a></li>
			<li><a href="/about-me">About me</a></li>
			<li class="branch">
				<a class="disabled" aria-disabled="true">Tools</a>
				<ul>
					<li><a href="/tools/converter">Universal converter</a></li>
				</ul>
			</li>
			<li class="branch hidden">
				<a class="disabled" aria-disabled="true">Blog</a>
				<ul>
					<li><a href="/blog/test-post">Test post</a></li>
				</ul>
			</li>
		</ul>
	</div>
</nav>

<style lang="scss">
	@use "../styles/imports";
	
	nav {
		display: grid;
		grid-template-columns: inherit;
		
		background-image: linear-gradient(to bottom, black, transparent);
		background-size: 100% min(100%, 3rem);
		background-repeat: no-repeat;
		
		font-size: 1rem;
		line-height: 1;
		z-index: 10; // not sure if this is needed anymore
	}
	
	.nav-content {
		grid-column: content-start / content-end;
		
		display: flex;
		flex-direction: column;
	}
	
	ul {
		list-style: none;
		margin: 0;
		padding-left: 1rem;
		
		display: none;
		flex-direction: column;
		
		.branch:hover > &,
		[data-open] &.top-level {
			display: flex;
		}
		
		@media #{imports.$desktop-only} {
			padding: 0;
			
			&.top-level {
				display: flex;
				flex-direction: row;
				gap: 3rem;
			}
		}
	}
	
	.branch {
		position: relative;
		
		& > a::after { // triangle deco for dropdowns, at end of link text
			content: "";
			vertical-align: middle;
			font-size: 0;
			margin-left: .5rem;
			
			border-top: 4px solid currentColor;
			border-left: 4px solid transparent;
			border-right: 4px solid transparent;
			
			// reposition to be below
			@media #{imports.$desktop-only} {
				position: absolute;
				margin-left: 0;
				
				top: calc(100% - 10px);
				left: 50%;
				transform: translateX(-50%);
			}
		}
		
		@media #{imports.$desktop-only} {
			display: flex;
			justify-content: center;
		}
	}
	
	// nav link hover deco
	li {
		align-self: start;
	}
	
	button {
		margin: 0;
		padding: 0;
		background: none;
		border: none
	}
	
	a, .menu-icon {
		position: relative;
		
		// deco on links in the dropdowns is an underline
		&::before {
			content: "";
			background-color: var(--accent-500);
			
			position: absolute;
			top: calc(1rem + 1.25em); // 1rem = padding
			left: 0.5rem;
			right: 0.5rem;
			height: 0;
			transition: height 200ms;
		}
	}
	
	// show decoration on hover/opened menu
	:hover > a::before,
	[data-open] .menu-icon::before {
		height: 0.125rem;
	}
	
	@media #{imports.$desktop-only} {
		a::before {
			left: 1.5rem;
			right: 1.5rem;
		}
		
		// deco is above text, at the screen edge
		ul.top-level > li > a::before {
			top: 0;
			left: 0;
			right: 0;
		}
		
		.branch > ul {
			background-color: var(--bg-100);
			border-radius: imports.$radius-regular;
			
			position: absolute;
			top: 100%;
			
			white-space: nowrap; // no text overflows
			opacity: 0;
			visibility: hidden;
			transition: opacity 100ms, visibility 100ms;
		}
		
		.branch:hover > ul {
			display: flex;
			opacity: 1;
			visibility: visible;
		}
	}
	
	a, .menu-icon {
		color: inherit;
		text-decoration: none;
		
		display: inline-block;
		padding: imports.$padding-large 0;
		
		@media #{imports.$desktop-only} {
			.branch ul & { // links in dropdowns
				padding: imports.$padding-large;
			}
		}
	}
	
	.menu-icon {
		align-self: start;
		
		@media #{imports.$desktop-only} {
			display: none;
		}
	}
	
	.hidden {
		display: none;
	}
</style>
