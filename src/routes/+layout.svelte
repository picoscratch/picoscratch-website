<script>
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta name="darkreader-lock">
	<!-- <title>PicoScratch</title> -->
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
		scrollbar-gutter: stable;
		color-scheme: dark;
	}

	main {
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
	}
</style>
