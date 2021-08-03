<script>
	// page title store which is read by the layout
	import { pageTitle } from "$lib/pageStores.js";
	
	const title = "Home";
	pageTitle.set(title);
</script>

<div class="columns-7-3">
	<div class="vertical-flow">
		<!-- main page content -->
		<section>
			<h1>Home page</h1>
			<p>This is the home page of my revamped personal website. It's still WIP.</p>
		</section>
	</div>
	
	<aside class="vertical-flow">
		<!-- side content, such as navigations of some kind -->
		<section>
			<h3>Feedback</h3>
			<p>I would appreciate any feedback, criticism and especially ideas for new content. My (hopefully) up-to-date contact info is on the <a href="/about">About & Contact page</a>.</p>
		</section>
	</aside>
</div>