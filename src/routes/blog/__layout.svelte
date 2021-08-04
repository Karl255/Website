<script>
	import { pageTitle, blogPostTitle, blogPostSubtitle } from "$lib/pageStores.js";
	
	let title;
	let postTitle;
	let postSubtitle;
	pageTitle.set("Blog");
	blogPostTitle.subscribe(val => postTitle = val);
	blogPostSubtitle.subscribe(val => postSubtitle = val);
</script>

<div class="vertical-flow blog-post" style="gap:0">
	{#if postTitle}
	<h1>{postTitle}</h1>
	{/if}
	{#if postSubtitle}
		<p>{postSubtitle}</p>
	{/if}
	<section>
		<slot></slot>
	</section>
</div>
