<script>
	// @ts-ignore
	import blocks from "$lib/images/blocks.png?format=webp&w=500";
	// @ts-ignore
	import teacherpage from "$lib/images/teacherpage.png?format=webp&w=700";
	// @ts-ignore
	import scratch from "$lib/images/scratch.png?format=webp&w=900";
	// @ts-ignore
	import logo_jf from "$lib/images/logo_jf.svg?format=webp";
	// @ts-ignore
	import blocksbg from "$lib/images/blocksbg.png?format=webp";
	// @ts-ignore
	import { animate } from "../gsap";
	import Dialog from "$lib/Dialog.svelte";
    import Accordion from "$lib/Accordion.svelte";
    import AccordionItem from "$lib/AccordionItem.svelte";

	let downloadDialogOpen = false;

	/**
	 * @param {string} url
	 */
	async function parseUpdateYML(url) {
		const latest = await fetch(url).then(r => r.text());
		if(latest == null) return null;
		let urlregex = latest.match(/url: (.*)/)
		if(urlregex == null) return null;
		if(urlregex.length < 2) return null;
		return urlregex[1];
	}

	/**
	 * @param {string} url
	 */
	function download(url) {
		const link = document.createElement("a");
		link.href = url;
		link.style.display = "none";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	async function downloadLearnWin() {
		const url = await parseUpdateYML("https://update.picoscratch.de/picoscratch-learn/latest.yml");
		if(!url) return;
		download("https://update.picoscratch.de/picoscratch-learn/" + url);
		downloadDialogOpen = true;
	}
</script>

<svelte:head>
	<title>PicoScratch Learn, die spannende Lernsoftware für den Raspberry Pi Pico</title>
	<meta name="description" content="PicoScratch Learn ist eine einfache Lernsoftware für den Raspberry Pi Pico. Die Software bietet für Lehrer ein übersichtliches und intuitives Managementportal." />
	<link rel="canonical" href="https://www.picoscratch.de/learn" />
</svelte:head>

<style>
	/* control, operators, sensing, more, pen, looks,  */
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
	}
	section:nth-of-type(4) {
		background-color: #ff6680;
		background-image: url($lib/images/transitions/transition-3-4.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 35%;
	}
	section:nth-of-type(5) {
		background-color: #0fbd8c;
		background-image: url($lib/images/transitions/transition-4-5.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 15%;
	}
	section:nth-of-type(6) {
		background-color: #9966ff;
		background-image: url($lib/images/transitions/transition-5-6.svg);
		background-repeat: no-repeat;
		background-position-y: top;
		background-size: 100vw;
		padding-top: 15%;
	} */

	@media(max-width: 1200px) {
		section {
			padding-bottom: 50px;
		}
		section img {
			width: 50%;
		}
		section:nth-of-type(5) img {
			width: 20%;
		}
		section:nth-of-type(6) {
			padding-top: 250px;
		}
	}

	@media(max-width: 800px) {
		section {
			padding-bottom: 95px;
		}
		section img {
			width: 80%;
		}
	}

	@media(max-width: 550px) {
		section:nth-of-type(1) h1 {
			font-size: 2.5em !important;
		}
		section:nth-of-type(5) img {
			width: 30%;
		}
	}

	@media(max-width: 320px) {
		section:nth-of-type(1) h1 {
			font-size: 2em !important;
		}
	}

	section {
		padding-bottom: 15%;
	}

	.buttons {
		flex-direction: row;
	}

	@media (max-width: 800px) {
		.buttons {
			flex-direction: column;
			width: 100%;
		}
	}

	:global(.app) {
		overflow-x: hidden;
	}
</style>

<Dialog open={downloadDialogOpen}>
	<h1>Download gestartet!</h1>
	<span>
		<ol style="display: flex; flex-direction: column; align-items: center;">
			<li>Die heruntergeladene Datei anklicken</li>
			<li>Warten, bis die Installationssoftware die Software installiert hat</li>
			<li>Das Programm sollte sich automatisch öffnen</li>
			<li>Im Fenster Ihren Schulcode eingeben</li>
			<span style="color: #cdcdcd;">Eine neue Schule können Sie <a href="https://manager.picoscratch.de/demo">hier</a> erstellen.</span>
			<li>Nun einen Raum auswählen, in dem sich das Gerät befindet</li>
			<span style="color: #cdcdcd;">Der Administrator der Schule muss im <a href="https://manager.picoscratch.de">PicoScratch Manager</a> Räume anlegen.</span>
		</ol>
	</span>
	<button on:click={() => {
		downloadDialogOpen = false;
	}}>Schließen</button>
</Dialog>

<!-- <img src={grain} alt="" style="width: 100vw;"> -->
<section style="flex-direction: column; gap: 15px;">
	<h1 style="font-size: 4em;">PicoScratch Learn</h1>
	<h2><strong>Die</strong> Lernsoftware für den Raspberry Pi Pico.</h2>
	<div class="buttons">
		<button class="primary" on:click={() => {
			downloadLearnWin();
		}}>Download</button>
		<button>
			<a href="https://manager.picoscratch.de" style="display: flex; align-items: center; gap: 5px; justify-content: center;">
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#ffffff"/></svg>
				Manager
			</a>
		</button>
		<button>
			<a href="https://manager.picoscratch.de/register" style="display: flex; align-items: center; gap: 5px; justify-content: center;">
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#ffffff"/></svg>
				Demo
			</a>
		</button>
	</div>
</section>
<section>
	<div>
		<h2>Raspberry Pi Pico programmieren mit Scratch</h2>
		<span>PicoScratch bietet verschiedenste Blöcke um mit den Pins des Raspberry Pi Picos zu arbeiten.</span>
	</div>
	<img src={blocks} alt="Scratch Blöcke um mit dem Pico zu arbeiten" width="30%">
</section>
<section>
	<img src={teacherpage} alt="Ein Bild vom Lehrerportal, ein Kurs ist ausgewählt" width="700px" style="border-radius: 15px;">
	<div>
		<h2>Einfaches Lehrerportal</h2>
		<span>Das Lehrerportal von PicoScratch ist übersichtlich und intuitiv.</span>
	</div>
</section>
<section>
	<div>
		<h2>Software, welche Schüler bereits verstehen.</h2>
		<span>PicoScratch basiert auf Scratch.</span>
	</div>
	<img src={scratch} alt="Die Software, welche die Schüler verwenden" width="900px" style="border-radius: 15px;">
</section>
<!-- <section>
	<img width="200px" src="data:image/png;base64,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" alt=" ic_fluent_arrow_download_24_filled" />
	<div>
		<h2>Regelmäßige Updates</h2>
		<span>PicoScratch wird laufend weiterentwickelt.</span>
	</div>
</section> -->
<section>
	<div>
		<h2>Jugend Forscht</h2>
		<span>In NRW erzielte die Software 2023 im Fachgebiet Informatik<br>(Sparte: Schüler experimentieren) den <strong>2ten Platz</strong>.</span>
	</div>
	<img src={logo_jf} alt="" width="500px">
</section>
<section style="padding-bottom: 20px;">
	<Accordion>
		<AccordionItem>
			<span slot="title">Wie mache ich ...?</span>
			Wir arbeiten immer dran, die Software noch verständlicher zu machen. <a href="mailto:jannik.eckhardt2009@gmail.com">Bitte kontaktieren Sie uns</a>.
		</AccordionItem>
		<AccordionItem>
			<span slot="title">PicoScratch funktioniert nicht!</span>
			Das tut uns leid. Bitte schauen sie auf unsere <a href="https://status.picoscratch.de">Status Seite</a> oder <a href="mailto:jannik.eckhardt2009@gmail.com">schreiben Sie uns</a>.
		</AccordionItem>
		<AccordionItem>
			<span slot="title">Kontakt/Alles weitere</span>
			<a href="mailto:jannik.eckhardt2009@gmail.com">
				Schreiben Sie uns eine Email
			</a>
			, und wir versuchen Ihnen so schnell wie möglich zu helfen.
		</AccordionItem>
	</Accordion>
</section>
