<script>
    import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:head>
	<meta name="darkreader-lock">
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
