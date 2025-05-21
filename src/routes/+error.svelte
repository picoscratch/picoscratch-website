<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>PicoScratch</title>
	<meta name="description" content="404 | PicoScratch" />
</svelte:head>

<style>
	.sections {
		display: flex;
		gap: 50px;
		flex-direction: column;
	}

	section {
		flex-direction: column;
		gap: 10px;
	}
</style>

<div class="sections">
	<section>
		<h1 style="font-size: 4em;">{page.status}</h1>
		{#if page.error}
			<h2>{page.error.message}</h2>
		{/if}
	</section>
	<section>
		<span>Wir helfen Ihnen hier raus:</span>
		<a href="/">
			<button class="primary">Startseite</button>
		</a>
	</section>
</div>