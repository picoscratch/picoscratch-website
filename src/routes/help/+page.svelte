<script>
    import Accordion from "$lib/Accordion.svelte";
import AccordionItem from "$lib/AccordionItem.svelte";
    import Card from "$lib/Card.svelte";

</script>
<svelte:head>
	<title>PicoScratch | Hilfe</title>
	<meta name="description" content="Hilfe für PicoScratch, die Lernsoftware für den Raspberry Pi Pico." />
</svelte:head>

<style>
	/* section:nth-of-type(1) {
		background-color: #ffab1a;
		background-image: url($lib/images/transitions/transition-1-2.svg);
		background-repeat: no-repeat;
		background-position-y: bottom;
		background-size: 100vw;
		padding-bottom: 15%;
	}
	section:nth-of-type(2) {
		background-color: #59c059;
		color: black;
	}
	section:nth-of-type(3) {
		background-color: #5cb1d6;
		background-image: url($lib/images/transitions/transition-2-3.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 20%;
		margin-bottom: -5%;
	}
	section:nth-of-type(4) {
		background-color: #ff6680;
		background-image: url($lib/images/transitions/transition-3-4.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 35%;
	} */

	/* section {
		flex-direction: column;
		flex-wrap: nowrap;
		height: 25vh;
	} */

	@media(max-width: 550px) {
		section:nth-of-type(1) h1 {
			font-size: 2.5em !important;
		}
	}
</style>

<section style="flex-direction: column; gap: 10px;">
	<h1 style="font-size: 4em;">Hilfe</h1>
</section>
<section>
	<Accordion>
		<AccordionItem>
			{#snippet title()}
						<span >Wie mache ich ...?</span>
					{/snippet}
			Wir arbeiten immer dran, die Software noch verständlicher zu machen. <a href="mailto:jannik.eckhardt2009@gmail.com">Bitte kontaktieren Sie uns</a>.
		</AccordionItem>
		<AccordionItem>
			{#snippet title()}
						<span >PicoScratch funktioniert nicht!</span>
					{/snippet}
			Das tut uns leid. Bitte schauen sie auf unsere <a href="https://status.picoscratch.de">Status Seite</a> oder <a href="mailto:jannik.eckhardt2009@gmail.com">schreiben Sie uns</a>.
		</AccordionItem>
		<AccordionItem>
			{#snippet title()}
						<span >Kontakt/Alles weitere</span>
					{/snippet}
			<a href="mailto:jannik.eckhardt2009@gmail.com">
				Schreiben Sie uns eine Email
			</a>
			, und wir versuchen Ihnen so schnell wie möglich zu helfen.
		</AccordionItem>
	</Accordion>
</section>
