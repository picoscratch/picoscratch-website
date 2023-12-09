<script>
	import Card from "$lib/Card.svelte";
	import learnpic from "$lib/images/blocks.png";
	import mint from "$lib/images/picoscratch-large.png";
</script>
<style>
</style>
<section>
	<h1 style="font-size: 4em;">PicoScratch</h1>
</section>
<section style="display: flex;">
	<Card style="width: 30%">
		<img src={learnpic} alt="PicoScratch Learn" width="100%">
		<h2>PicoScratch Learn</h2>
		<span>Die Scratch-basierte Lernsoftware</span>
		<a href="/learn">
			<button class="primary">Mehr</button>
		</a>
	</Card>
	<Card style="width: 30%">
		<img src={mint} alt="PicoScratch Learn" width="100%">
		<h2>PicoScratch Messgerät</h2>
		<span>Das beste für Ihren MINT-Unterricht!</span>
		<a href="#">
			<button class="primary">Mehr</button>
		</a>
	</Card>
</section>