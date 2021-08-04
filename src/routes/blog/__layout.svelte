<script>
	import { pageTitle } from "$lib/pageStores.js";
	
	let title;
	pageTitle.subscribe(val => title = val);
</script>

<div class="vertical-flow blog-post">
	<h1>{title}</h1>
	<section>
		<slot></slot>
	</section>
</div>
