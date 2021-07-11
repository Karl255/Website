<script>
	// page title store which is read by the layout
	import { pageTitle } from "$lib/pageStores.js";
	
	const title = "Home";
	pageTitle.set(title);
</script>

<div class="columns-7-3">
	<div class="card-flow">
		<section>
			<h1>Title</h1>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque sequi impedit, maxime fugit
				officiis deserunt dolore delectus quis magnam ducimus, iste cumque aliquam. Eaque, non! Nam,
				repellat aspernatur culpa tenetur quibusdam accusantium voluptatem ducimus. Aperiam, in nesciunt
				laboriosam, possimus unde, sequi placeat quo quisquam culpa minima reprehenderit nulla dolore.</p>
			<img src="https://unsplash.it/500/300" alt="random">
		</section>
		<section>
			<h1>This could be like news maybe</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit tenetur doloremque impedit? Vel eligendi recusandae iusto iure illo nulla! Suscipit, voluptate minus. Cumque perferendis deleniti in ducimus voluptatibus nulla, minima doloribus et tempora optio. Suscipit iure sunt accusamus illum exercitationem voluptate repellendus, tenetur at rerum perspiciatis, et officia voluptatem modi id. Iusto autem mollitia ab nobis sit, a blanditiis delectus molestiae vero ut ullam incidunt accusantium, commodi recusandae corporis illo! Nemo enim dolore maiores, sapiente voluptatum distinctio ab perferendis iste.</p>
		</section>
	</div>
	
	<div class="card-flow">
		<aside>
			<h2>Side info</h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, sunt blanditiis? Error ut quisquam corrupti?</p>
			<img src="https://unsplash.it/200/100" alt="random">
		</aside>
		<aside>
			<h2>Your mom</h2>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, eligendi!</p>
		</aside>
	</div>
</div>