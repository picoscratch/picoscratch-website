<script>
  import { Canvas } from '@threlte/core'
	import Scene from "./Scene.svelte";
</script>

<div style="display: flex; height: 100%;">
	<div style="width: 50%; height: 100%; position: fixed; top: 0; left: 0;">
		<Canvas>
			<Scene></Scene>
		</Canvas>
	</div>
	<div style="display: flex; margin-left: 50%; width: 50%; height: 100%; flex-direction: column; gap: 50vh; padding-top: 30vh; padding-bottom: 30vh;">
		<section style="display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 10px;">
			<h1 style="font-family: 'Permanent Marker'; font-size: 5ch; font-weight: bold;">PicoScratch MINT</h1>
			<h2 style="font-family: 'Permanent Marker'; font-size: 3ch;">Der beste Slogan hier.</h2>
		</section>
		<section style="display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 10px;">
			<h1 style="font-family: 'Permanent Marker'; font-size: 5ch; font-weight: bold;">PicoScratch MINT</h1>
			<h2 style="font-family: 'Permanent Marker'; font-size: 3ch;">Der beste Slogan hier.</h2>
		</section>
	</div>
</div>