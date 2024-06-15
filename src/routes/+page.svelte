<script>
	import Card from "$lib/Card.svelte";
	import learnpic from "$lib/images/blocks.png";
	import mint from "$lib/images/mint/front.png";
</script>

<svelte:head>
	<title>PicoScratch</title>
	<link rel="canonical" href="https://www.picoscratch.de">
</svelte:head>

<section id="sec-1">
	<h1 id="title">PicoScratch</h1>
</section>
<section id="products">
	<Card style="width: var(--card-width); height: var(--card-height); display: flex; justify-content: center;">
		<img src={learnpic} alt="PicoScratch Learn" width="100%">
		<h2>PicoScratch Learn</h2>
		<span>Die Scratch-basierte Lernsoftware</span>
		<a href="/learn">
			<button class="primary">Mehr</button>
		</a>
	</Card>
	<Card style="width: var(--card-width); height: var(--card-height); display: flex; justify-content: center;">
		<img src={mint} alt="PicoScratch Learn" width="80%">
		<h2>PicoScratch Messgerät</h2>
		<span>Das beste für Ihren MINT-Unterricht!</span>
		<a href="/mint">
			<button class="primary">Mehr</button>
		</a>
	</Card>
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
</style>