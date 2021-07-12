<script>
	export let title;
</script>

<div class="dropdown-root">
	<a class="no-click" href=".">{title}</a>
	<div class="dropdown">
		<slot></slot>
	</div>
</div>

<style lang="scss">
	a.no-click {
		pointer-events: none;
		cursor: default;
	}
	
	.dropdown-root {
		display: flex;
		flex-direction: column;
		position: relative;
		
		&:hover,
		&:focus {
			.dropdown {
				display: block;
			}
		}
	}
	
	.dropdown {
		white-space: nowrap; // prevent links wrapping inside, rather let the dropdown expand
		display: none;
		margin-top: 32px;
		position: absolute;
		background-color: var(--color-ui-layer-3);
		border-radius: 4px;
		box-shadow: 0 0 10px 0 var(--color-shadow);
		
		> :global(a) {
			padding: 8px 14px;
			
			&:hover,
			&:focus {
				color: white;
				background-color: var(--color-accent-300);
				text-decoration: none;
			}
			
			&:first-child {
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
			}
			
			&:last-child {
				border-bottom-left-radius: 4px;
				border-bottom-right-radius: 4px;
			}
			
		}
		// recoloring the arrow on top
		// can't nest this inside the selector above due to a bug in svelte-preprocess
		> :global(a:first-child::before) {
			content: "";
			// this makes the ::before into a triangle by using a neat trick with borders
			// source: https://css-tricks.com/snippets/css/css-triangle/
			width: 0;
			height: 0;
			background-color: transparent;
			border-left: 24px solid transparent;
			border-right: 24px solid transparent;
			border-bottom: 8px solid var(--color-ui-layer-3);
			// position at top of dropdown
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -100%);
		}
		
		> :global(a:first-child:hover::before),
		> :global(a:first-child:focus::before) {
			border-bottom-color: var(--color-accent-300);
		}
	}
</style>
