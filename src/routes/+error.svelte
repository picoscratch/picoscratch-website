<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>PicoScratch | Über uns</title>
	<meta name="description" content="PicoScratch, die Lernsoftware für den Raspberry Pi Pico." />
</svelte:head>

<style>
	section:nth-child(1) {
		background-color: #ff6680; /* looks */
	}
	section:nth-child(2) {
		background-color: #9966ff; /* looks */
	}
</style>

<section style="flex-direction: column; gap: 10px;">
	<h1 style="font-size: 4em;">{$page.status}</h1>
	{#if $page.error}
		<h2>{$page.error.message}</h2>
	{/if}
</section>
<section>
	{#if $page.status.toString().startsWith("5")}
		<div>
			<h2>Wir sind Schuld!</h2>
			<span>Bitte versuchen Sie es später noch einmal.</span>
		</div>
	{:else if $page.status.toString().startsWith("4")}
		<div>
			<h2>Du scheinst verloren zu sein.</h2>
			<span>Diese Seite gibt es nicht. Hier sind ein paar Seiten die es gibt:</span>
			<div style="display: flex; gap: 10px;">
				<a href=".">Startseite</a>
			</div>
			<span>Oder, wenn du garnicht mehr weiter weißt, <a href="mailto:jannik.eckhardt2009@gmail.com">kontaktiere uns</a>.</span>
		</div>
	{/if}
</section>