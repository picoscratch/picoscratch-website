<script lang="ts">
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import { onNavigate } from '$app/navigation';
	import "picoscratch-ui/css";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

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
		{@render children?.()}
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		scrollbar-gutter: stable;
		color-scheme: dark;
	}

	main {
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
	}
</style>
