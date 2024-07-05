<script>
	// import Card from "$lib/Card.svelte";
	import learnpic from "$lib/images/blocks.png";
	import mint from "$lib/images/mint/front.png";
    import { Button, Card } from "picoscratch-ui";
</script>

<svelte:head>
	<title>PicoScratch</title>
	<link rel="canonical" href="https://www.picoscratch.de">
	<meta name="description" content="Fördern Sie MINT mit PicoScratch: Innovative und praktische Lösungen für den Bildungsbereich. Entfachen Sie die Begeisterung für Technik und Wissenschaft.">
</svelte:head>

<section id="sec-1">
	<h1 id="title">PicoScratch</h1>
</section>
<section id="products">
	<Card.Root style="width: var(--card-width); height: var(--card-height); display: flex; justify-content: center; padding-bottom: 10px;">
		<img src={mint} alt="PicoScratch Learn" width="80%">
		<h2>PicoScratch Messgerät</h2>
		<span>Das beste für Ihren MINT-Unterricht!</span>
		<a href="/mint">
			<Button class="primary">Mehr</Button>
		</a>
	</Card.Root>
	<Card.Root style="width: var(--card-width); height: var(--card-height); display: flex; justify-content: center; padding-bottom: 10px;">
		<img src={learnpic} alt="PicoScratch Learn" width="90%">
		<h2>PicoScratch Learn</h2>
		<span>Die Scratch-basierte Lernsoftware</span>
		<a href="/learn">
			<Button class="primary">Mehr</Button>
		</a>
	</Card.Root>
</section>

<style>
	#products {
		--card-width: 30rem;
		--card-height: 35rem;
		display: flex;
		flex-wrap: wrap;
		flex: 1 0 auto;
		align-items: center;
		justify-items: center;
		justify-content: space-evenly;
	}

	#title {
		font-size: 4em;
		font-weight: 600;
	}

	@media (min-width: 800px) {
		#sec-1 {
			height: 9rem;
			align-items: flex-end;
		}
	}

	@media (max-width: 800px) {
		#title {
			font-size: 3em;
		}

		#products {
			--card-width: 20rem;
		}

		#sec-1 {
			height: 7rem !important;
		}
	}

	@media (max-width: 400px) {
		#title {
			font-size: 2.3em;
		}

		#products {
			--card-width: 20rem;
		}
	}

	#products img {
		margin: auto;
	}

	h2 {
		padding-bottom: 0.5rem; 
		border-bottom-width: 1px; 
		font-size: 1.875rem;
		line-height: 2.25rem; 
		font-weight: 600; 
		letter-spacing: -0.025em; 
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms; 
		scroll-margin: 5rem; 
	}
</style>