<script lang="ts">
	import { page } from '$app/stores';
	let path = "/";
	$: {
		path = $page.url.pathname;
		console.log(path);
	}
</script>

<footer>
	<span>PicoScratch</span>
	<div class="links">
		<a href="/impressum">Impressum</a>
	</div>
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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 5px;
		view-transition-name: footer;
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