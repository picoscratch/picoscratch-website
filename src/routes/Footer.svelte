<script lang="ts">
	import { page } from '$app/stores';
	let path = "/";
	$: {
		path = $page.url.pathname;
		console.log(path);
	}
</script>

<footer>
	PicoScratch
</footer>

<style>
	footer {
		background-color: var(--accent);
		color: var(--background);
		text-align: center;
		padding: 10px;
		background-repeat: no-repeat;
		background-position-y: bottom;
		background-size: 100vw;
		margin: 20px;
		border-radius: 10px;
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