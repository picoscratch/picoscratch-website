<script lang="ts">
	import { run } from 'svelte/legacy';

	import { page } from '$app/stores';
	let path = $state("/");
	run(() => {
		path = $page.url.pathname;
		console.log(path);
	});
</script>

<footer class={path == "/help" ? "help" : ""}>
	PicoScratch is not endorsed, sponsored, or affiliated with the Scratch Foundation in any way.
</footer>

<style>
	footer {
		background-color: #25b0f5;
		text-align: center;
		padding: 10px;
		background-image: url($lib/images/transitions/bottom-waves.svg);
		background-repeat: no-repeat;
		background-position-y: bottom;
		background-size: 100vw;
		padding-top: 15%;
	}

	.help {
		background-image: url($lib/images/transitions/bottom-waves-help.svg);
	}

	@media(max-width: 1200px) {
		footer {
			background-position-y: 120%;
		}
	}

	@media(max-width: 500px) {
		footer {
			background-position-y: 220%;
		}
	}
</style>