<script lang="ts">
	import { fade } from "svelte/transition";
	let downloadStarted = false;
	
	async function parseUpdateYML(url: string) {
		const latest = await fetch(url).then(r => r.text());
		if(latest == null) return null;
		let urlregex = latest.match(/url: (.*)/)
		if(urlregex == null) return null;
		if(urlregex.length < 2) return null;
		return urlregex[1];
	}
	function download(url: string) {
		const link = document.createElement("a");
		link.href = url;
		link.style.display = "none";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	function sleep(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function downloadLearnWin() {
		const url = await parseUpdateYML("https://update.picoscratch.de/picoscratch-learn/latest.yml");
		if(!url) return;
		download("https://update.picoscratch.de/picoscratch-learn/" + url);
		location.href = "#setuplearn";
		downloadStarted = true;
		await sleep(2000);
		downloadStarted = false;
	}
</script>

<svelte:head>
	<title>PicoScratch | Downloads</title>
	<meta name="description" content="Die Lernsoftware für den Raspberry Pi Pico runterladen." />
        <link rel="canonical" href="https://www.picoscratch.de/downloads" />
</svelte:head>

<style>
	section:nth-of-type(1) {
		background-color: #ffab1a; /* control */
		background-image: url($lib/images/transitions/transition-1-2.svg);
		background-repeat: no-repeat;
		background-position-y: bottom;
		background-size: 100vw;
		padding-bottom: 15%;
	}
	section:nth-of-type(2) {
		background-color: #59c059; /* operators */
		color: black;
	}
	section:nth-of-type(3) {
		background-color: #5cb1d6; /* sensing */
		background-image: url($lib/images/transitions/transition-2-3.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 20%;
	}
	section:nth-of-type(4) {
		background-color: #ff6680; /* more */
		background-image: url($lib/images/transitions/transition-3-4.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 35%;
	}
	section:nth-of-type(5) {
		background-color: #0fbd8c; /* pen */
		background-image: url($lib/images/transitions/transition-4-5.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 15%;
	}
	section:nth-of-type(6) {
		background-color: #9966ff; /* looks */
		background-image: url($lib/images/transitions/transition-5-6.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 15%;
	}

	section {
		flex-direction: column;
		flex-wrap: nowrap;
	}

	button {
		font-size: 1.5rem;
		padding: 15px;
		color: white;
		border: none;
		border-radius: 15px;
		cursor: pointer;
	}

	@media(max-width: 550px) {
		section:nth-of-type(1) h1 {
			font-size: 2.5em !important;
		}
	}
</style>

<section style="flex-direction: column; gap: 10px;">
	<h1 style="font-size: 4em;">Downloads</h1>
</section>
<section>
	<div>
		<h2>PicoScratch Learn</h2>
		<span>Die Lernsoftware für den Pico.</span>
	</div>
	<button style="background-color: #389438;" on:click={downloadLearnWin}>Download für Windows</button>
	<button style="background-color: #389438;" disabled>
		<strike>Download für Linux</strike>
	</button>
	<a href="#setuplearn">PicoScratch Learn einrichten</a>
</section>
<section>
	<div>
		<h2>PicoScratch</h2>
		<span>Die einfache Software zum programmieren des Picos.</span>
	</div>
	<!-- <button style="background-color: #389438;" disabled>
		<strike>Download für Windows</strike>
	</button>
	<button style="background-color: #389438;" disabled>
		<strike>Download für Linux</strike>
	</button> -->
	<span>Downloads sind zurzeit nicht verfügbar, da die Software momentan nicht aktuell ist.</span>
	<a href="#setup">PicoScratch einrichten</a>
</section>
<section style="position: relative;">
	<span style="position: absolute; top: 20%;" id="setuplearn"></span>
	<div>
		<h2>PicoScratch Learn einrichten</h2>
		<span>
			<ol style="display: flex; flex-direction: column; align-items: center;">
				<li>Die heruntergeladene Datei anklicken</li>
				<li>Warten, bis die Installationssoftware die Software installiert hat</li>
				<li>Das Programm sollte sich automatisch öffnen</li>
				<li>Im Fenster Ihren Schulcode eingeben</li>
				<span style="color: #cdcdcd;">Eine neue Schule können Sie <a href="https://cfp.is-a.dev/picoscratch/register">hier</a> erstellen.</span>
				<li>Nun einen Raum auswählen, in dem sich das Gerät befindet</li>
				<span style="color: #cdcdcd;">Der Administrator der Schule muss im <a href="https://cfp.is-a.dev/picoscratch/manager">PicoScratch Manager</a> Räume anlegen.</span>
			</ol>
		</span>
	</div>
</section>
<section id="setup">
	<div>
		<h2>PicoScratch einrichten</h2>
		<span>
			<ol style="display: flex; flex-direction: column; align-items: center;">
				<li>Die heruntergeladene Datei anklicken</li>
				<li>Warten, bis die Installationssoftware die Software installiert hat</li>
			</ol>
		</span>
	</div>
</section>
<section>
	<div>
		<h2>Noch Probleme?</h2>
		<a href="mailto:jannik.eckhardt2009@gmail.com">
			<span>Schreiben Sie uns eine Email.</span>
		</a>
	</div>
</section>
{#if downloadStarted}
	<div transition:fade style="position: fixed; bottom: 0; background-color: rgb(37, 176, 245); color: white; text-align: center; width: 100vw;">
		<h1 style="margin: 10px;">Download gestartet!</h1>
	</div>
{/if}
