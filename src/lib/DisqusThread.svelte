<script>
	import { browser } from "$app/env";
	
	export let pageIdentifier = null;
	
	if (pageIdentifier != null) {
		let disqus_config = function () {
			//this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
			this.page.identifier = pageIdentifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		
		if (browser) {
			// DON'T EDIT BELOW THIS LINE
			let d = document, s = d.createElement('script');
			s.src = 'https://karl255-website.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		}
	}
</script>

<div id="disqus_thread"></div>

<style lang="scss" global>
	* + #disqus_thread {
		margin-top: 1rem;
		margin-bottom: -2.5rem;
	}
</style>
