<script>
	import { pageTitle, blogPostTitle, blogPostSubtitle } from "$lib/pageStores.js";
	import { browser } from "$app/env";
	
	let title;
	let postTitle;
	let postSubtitle;
	pageTitle.set("Blog");
	blogPostTitle.subscribe(val => postTitle = val);
	blogPostSubtitle.subscribe(val => postSubtitle = val);
	
	if (browser)
	{
		// for disqus
		let disqus_config = function () {
			//this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
			this.page.identifier = "test-blog"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
	
		(function() { // DON'T EDIT BELOW THIS LINE
			let d = document, s = d.createElement('script');
			s.src = 'https://karl255-website.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();
	}
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
	<div id="disqus_thread"></div>
</div>
