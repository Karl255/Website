<script>
	import HiddenHTML from "$lib/HiddenHTML.svelte";
	import DisqusThread from "$lib/DisqusThread.svelte";
</script>

<main>
	<section class="panel">
		<h1 class="center">What I do</h1>
		
		<div class="panel-content columns three-columns">
			<section class="text-flow">
				<h2>Programming</h2>
				<p>Primarily C#, but I also know a couple other and I am looking to learn more.</p>
			</section>
			
			<section class="text-flow">
				<h2>Design</h2>
				<p>Mainly web design, but I am also familiar with vector graphics design using Inkscape.</p>
			</section>
			
			<section class="text-flow">
				<h2>Electronics</h2>
				<p>Mostly a hobby, for fun, but I know a fair bit.</p>
			</section>
		</div>
	</section>
	
	<section class="panel">
		<h1 class="center">What I know</h1>
		
		<div class="panel-content columns two-columns">
			<section class="text-flow">
				<h2>Languages</h2>
				<ul>
					<li>C# &minus; currently my main go-to language</li>
					<li>JavaScript &minus; for the web</li>
					<li>Lua &minus; in apps that embed it</li>
					<li>C &minus; embedded development</li>
					<li>CSS, SCSS/Sass, Less &minus; to make the web pretty</li>
				</ul>
			</section>
		
			<section class="text-flow">
				<h2>Platforms, frameworks etc.</h2>
				<ul>
					<li>The web</li>
					<li>Cross-platform CLI tools</li>
					<li>Desktop GUI apps (only for Windows; awaiting MAUI)</li>
					<li class="heart-marker">Svelte and SvelteKit</li>
					<li>PlatformIO, Arduino</li>
					<li>MonoGame</li>
				</ul>
			</section>
		
			<section class="text-flow">
				<h2>Tooling</h2>
				<ul>
					<li>Visual Studio</li>
					<li>VS Code (and forks)</li>
					<li class="heart-marker">WSL</li>
					<li>git</li>
					<li>keyboard, occasionally also a mouse</li>
				</ul>
			</section>
		</div>
	</section>
	
	<section class="panel">
		<h1 class="center">My projects</h1>
	
		<div class="panel-content columns three-columns">
			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/UserCSS-Styles">UserCSS-Styles</a></h2>
				<p>A couple UserCSS styles I made and published to make the web prettier for me and others as well.</p>
			</section>
		
			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/NBodySim">N&shy;Body&shy;Sim</a></h2>
				<p>A 2D n-body physics simulator with honestly quite unintuitive controls.</p>
			</section>
		
			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/YetAnotherTetrisClone">Yet&shy;Another&shy;Tetris&shy;Clone</a></h2>
				<p>The name says everything. A very very simple clone in MonoGame.</p>
			</section>
		
			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/WeatherFetch">Weather&shy;Fetch</a></h2>
				<p>A CLI utility for getting the current weather. I created it to learn more about how to make CLI tools, implement multi-API backends and properly use dependency injection.</p>
			</section>
			
			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/ArduinoStaticWebServer">Arduino&shy;Static&shy;Web&shy;Server</a></h2>
				<p>A very basic and limited static web server for Arduino. Serves pages from a FAT32 formatted SD card... slowly... very slowly...</p>
			</section>
			
			<section class="text-flow">
				<h2><a href="https://github.com/Karl255/Nesk">Nesk</a></h2>
				<p>My attempt at a cycle-accurate, cross-platform NES emulator. Doesn't work, don't bother with it. This was my HS graduation project.</p>
			</section>
		</div>
	</section>
	
	<section class="panel">
		<h1 class="center">Contact me</h1>
		
		<div class="panel-content text-flow">
			<HiddenHTML encodedHTML="RS1tYWlsOiBrYXJsby5iaXN0cmlja2kyNTZAZ21haWwuY29t" />
			<h2>Or send a message in this Disqus thread:</h2>
			<DisqusThread pageIdentifier="about-me" />
		</div>
	</section>
</main>
