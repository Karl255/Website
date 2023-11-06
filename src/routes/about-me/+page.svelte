<script lang="ts">
	import HiddenHTML from "$lib/HiddenHTML.svelte";
</script>

<main>
	<section class="panel">
		<h1 class="center">What I do</h1>

		<div class="panel-content columns three-columns">
			<section class="text-flow">
				<h2>Software</h2>
				<p>
					I have used various languages over the years and combined them with various programmig and design
					patterns to bring apps to life.
				</p>
			</section>

			<section class="text-flow">
				<h2>Embedded</h2>
				<p>For now only a hobby. I strive to explore and understand everything under the hood.</p>
			</section>

			<section class="text-flow">
				<h2>Design</h2>
				<p>
					Bringing a consistent and good design language to the web. This website is a bad example of this - I
					designed this back in 2021.
				</p>
			</section>
		</div>
	</section>

	<section class="panel">
		<h1 class="center">What I know</h1>

		<div class="panel-content columns two-columns">
			<section class="text-flow">
				<h2>Languages</h2>
				<ul>
					<li class="heart-marker">
						Elixir &minus; the closest to being a "perfect language" and ecosystem - beautiful and highly
						practical; try it
					</li>
					<li class="heart-marker">TypeScript &minus; a worthy language for the hostile web</li>
					<li>C#, Kotlin &minus; for modern business solutions</li>
					<li>Java &minus; sometimes there's no alternative</li>
					<li>C/C++ &minus; embedded development</li>
					<li class="heart-marker">CSS, SCSS/Sass, Less &minus; to make the web pretty</li>
				</ul>
			</section>

			<section class="text-flow">
				<h2>Platforms, frameworks, environments</h2>
				<ul>
					<li>The web</li>
					<li class="heart-marker">Phoenix, LiveView</li>
					<li class="heart-marker">Svelte and SvelteKit</li>
					<li>ASP.NET, Spring</li>
					<li>React, Vite</li>
					<li>PlatformIO, Arduino</li>
				</ul>
			</section>

			<section class="text-flow">
				<h2>Tooling</h2>
				<ul>
					<li>VS Code (and forks)</li>
					<li>Visual Studio, JetBrains IDEs</li>
					<li class="heart-marker">Linux & WSL</li>
					<li>git</li>
					<li>keyboard, occasionally also a mouse</li>
				</ul>
			</section>
		</div>
	</section>

	<section class="panel">
		<h1 class="center">What I did</h1>

		<div class="panel-content columns three-columns">
			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/UserCSS-Styles">UserCSS-Styles</a></h2>
				<p>A couple UserCSS styles I made and published to make the web prettier for me and others as well.</p>
			</section>

			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/99-problems.ex">99-problems.ex</a></h2>
				<p>
					OCaml functional coding exercises, done elegantly and practically in Elixir. This was a great
					exercise to get a hang out of Elixir's various features.
				</p>
			</section>

			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/tvz-bart">tvz-bart</a></h2>
				<p>
					I found out that the timetable on my university's website fetches data from a public-facing API - so
					I made my own prettier frontend for it with a couple extra features.
				</p>
			</section>

			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/WeatherFetch">Weather&shy;Fetch</a></h2>
				<p>
					A CLI utility for getting the current weather. I created it to learn more about how to make CLI
					tools, implement support for multiple web APIs and learn about dependency inversion.
				</p>
			</section>

			<section class="text-flow">
				<h2><a href="hhttps://github.com/Karl255/tvz-java-projekt">tvz-java-projekt</a></h2>
				<p>
					Project for my Java class at university. A properly layered JavaFX desktop application accessing an
					embedded H2 database and also a web API.
				</p>
			</section>

			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/Nesk">Nesk</a></h2>
				<p>
					My attempt at a cycle-accurate, cross-platform NES emulator in C#. Doesn't work very well, don't
					bother with it. This was my HS graduation project.
				</p>
			</section>

			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/tiny-ir-rgb">tiny-ir-rgb</a></h2>
				<p>
					A project where I replaced an unknown IC in an RGB LED strip controller with an ATtiny45 to run
					custom animations while keeping the rest of the system unchanged.
				</p>
			</section>

			<section class="text-flow">
				<h2>
					<a href="https://github.com/Karl255/ArduinoStaticWebServer">Arduino&shy;Static&shy;Web&shy;Server</a
					>
				</h2>
				<p>
					A very basic and limited static web server for Arduino. Serves pages from a FAT32 formatted SD
					card... slowly... very slowly...
				</p>
			</section>
		</div>
	</section>

	<section class="panel">
		<h1 class="center">Contact me</h1>

		<div class="panel-content text-flow">
			<HiddenHTML encodedHTML="RS1tYWlsOiBrYXJsby5iaXN0cmlja2kyNTZAZ21haWwuY29t" />
		</div>
	</section>
</main>
