<script>
	// @ts-ignore
	import mint from "$lib/images/mint/front.png?format=webp&w=512";
	// import Card from "$lib/Card.svelte";
	import BatterySaverIcon from "svelte-fluentui-icons/icons/BatterySaver_Filled.svelte";
	import WifiIcon from "svelte-fluentui-icons/icons/WiFi1_Filled.svelte";
	// @ts-ignore
	import logo_jf from "$lib/images/logo_jf.svg?format=webp";
	import UsbPortIcon from "svelte-fluentui-icons/icons/USBPlug_Filled.svelte";
	import UIIcon from "svelte-fluentui-icons/icons/Fluid_Filled.svelte";
	import SensorIcon from "svelte-fluentui-icons/icons/Temperature_Filled.svelte";
	// @ts-ignore
	import tempsensor from "$lib/images/mint/sensors/temp.png?format=webp&w=256";
	// @ts-ignore
	import tdssensor from "$lib/images/mint/sensors/tds.png?format=webp&w=256";
	// @ts-ignore
	import co2sensor from "$lib/images/mint/sensors/co2.png?format=webp&w=256";
	// @ts-ignore
	import phsensor from "$lib/images/mint/sensors/ph.png?format=webp&w=256";
	// import Dialog from "$lib/Dialog.svelte";
	import { Dialog, Drawer, Input } from "picoscratch-ui";
	import SupportPost from "$lib/SupportPost.svelte";
	import { Button, Card } from "picoscratch-ui";
	import { onMount } from "svelte";
	import MintPreorderDialog from "$lib/mint/preorderDialog/MINTPreorderDialog.svelte";
	
	let newsletterOpen = $state(false);
</script>

<svelte:head>
	<title>PicoScratch MINT - Das beste Messgerät für Ihren MINT-Unterricht!</title>
	<meta name="description" content="PicoScratch MINT ist das einfachste Messgerät für den MINT-Unterricht mit unzähligen Sensoren und intuitivem Lehrerportal.">
	
</svelte:head>

<MintPreorderDialog bind:open={newsletterOpen} />

<section id="sec_mint_1">
	<img src={mint} alt="PicoScratch MINT" class="hero-img" />
	<div style="background-color: var(--background); padding: 20px 5px 20px 5px; box-sizing: border-box;">
		<h2>PicoScratch MINT</h2>
		<span>Das beste Messgerät für Ihren MINT-Unterricht!</span>
		<div class="buttons">
			<Button on:click={() => {
				newsletterOpen = true;
			}}>Vorbestellen</Button>
			<Button variant="secondary">
				<a href="https://mint.picoscratch.de"  style="display: flex; gap: 5px; align-items: center; justify-content: center;">
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#ffffff"/></svg>
					Manager
				</a>
			</Button>
			<!-- <button>
				<a href="#accessories">
					Zubehör
				</a>
			</button> -->
			<Button variant="secondary">
				<a href="https://docs.picoscratch.de"  style="display: flex; gap: 5px; align-items: center; justify-content: center;">
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4.75a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.164l-4.793 4.793a1 1 0 1 1-1.414-1.414l4.793-4.793H13.75a1 1 0 0 1-1-1Z" fill="#ffffff"/></svg>
					Dokumentation
				</a>
			</Button>
		</div>
	</div>
</section>
<section style="flex-wrap: wrap; margin-top: 50px;" id="facts">
	<Card.Root style="display: flex; align-items: center; padding: 10px;">
		<BatterySaverIcon size="100" />
		<h3>30 Stunden<a class="note-link" href="#note-1">*</a></h3>
		<span>Akkulaufzeit</span>
	</Card.Root>
	<Card.Root style="display: flex; align-items: center; padding: 10px;">
		<WifiIcon size="100" />
		<h3>WLAN</h3>
		<span>Konnektivität<a class="note-link" href="#note-2">**</a></span>
	</Card.Root>
	<Card.Root style="display: flex; align-items: center; padding: 10px;">
		<UsbPortIcon size="100" />
		<h3>USB-C</h3>
		<span>Lade- & Datenanschluss</span>
	</Card.Root>
	<Card.Root style="display: flex; align-items: center; padding: 10px;">
		<UIIcon size="100" />
		<h3>Einfache</h3>
		<span>Anwendung</span>
	</Card.Root>
	<Card.Root style="display: flex; align-items: center; padding: 10px;">
		<SensorIcon size="100" />
		<h3>Weite</h3>
		<span>Sensorwahl</span>
	</Card.Root>
</section>
<section style="flex-direction: column; margin-top: 50px;" id="accessories">
	<h1 style="font-size: 3rem;">Alle Sensoren für Ihr PicoScratch MINT Messgerät</h1>
	<div style="display: flex; flex-wrap: wrap; gap: 50px; align-items: center; justify-content: center; width: 100%; flex-direction: row;">
		<Card.Root style="display: flex; align-items: center; padding-bottom: 10px; gap: 10px; flex-direction: column;">
			<img src={tempsensor} alt="Temperatursensor" width="300rem" loading="lazy" style="aspect-ratio: 1/1;">
			<h3>Temperatursensor</h3>
			<a href="/mint/sensor/temperature">
				<Button>
					Mehr
				</Button>
			</a>
		</Card.Root>
		<Card.Root style="display: flex; align-items: center; padding-bottom: 10px; gap: 10px; flex-direction: column;">
			<img src={tdssensor} alt="Wasserqualitätssensor" width="300rem" loading="lazy" style="aspect-ratio: 1/1;">
			<h3>Wasserqualitätssensor</h3>
			<a href="/mint/sensor/tds">
				<Button>
					Mehr
				</Button>
			</a>
		</Card.Root>
		<Card.Root style="display: flex; align-items: center; padding-bottom: 10px; gap: 10px; flex-direction: column;">
			<img src={co2sensor} alt="CO2-Sensor" width="300rem" loading="lazy" style="aspect-ratio: 1/1;">
			<h3>CO<sub>2</sub>-Sensor</h3>
			<a href="/mint/sensor/co2">
				<Button>
					Mehr
				</Button>
			</a>
		</Card.Root>
		<Card.Root style="display: flex; align-items: center; padding-bottom: 10px; gap: 10px; flex-direction: column;">
			<img src={phsensor} alt="pH-Sensor" width="300rem" loading="lazy" style="aspect-ratio: 1/1;">
			<h3>pH-Sensor</h3>
			<a href="/mint/sensor/ph">
				<Button>
					Mehr
				</Button>
			</a>
		</Card.Root>
	</div>
</section>
<section style="flex-direction: column; margin-top: 50px;">
	<h1 style="font-size: 3rem;">Support</h1>
	<div style="display: flex; gap: 5px; flex-direction: row;" class="support">
		<SupportPost title="Datenausgabe" description="Alle Möglichkeiten Daten auszugeben." link="/mint/support/data" />
		<SupportPost title="Fehler" description="Häufige Fehler und deren Lösungen" link="/mint/support/errors" />
	</div>
</section>
<section style="margin-top: 50px;">
	<div>
		<h2>Jugend Forscht</h2>
		<span>Im Regionalwettbewerb Dortmund erzielte das Messgerät 2024 im Fachgebiet Informatik<br> den <strong>1ten Platz</strong>.</span>
	</div>
	<a href="https://jugend-forscht.de">
		<img src={logo_jf} alt="Jugend Forscht Logo" style="width: clamp(300px, 70vw, 500px);" loading="lazy">
	</a>
</section>
<section style="font-size: 1rem; flex-direction: column; gap: 0;">
	<span id="note-1">*In Volllast</span>
	<span id="note-2">**Unterstützung für WLAN-Netzwerke im 2.4GHz Bereich und dem 802.11n-Standard. WPA2 und WPA3 wird unterstützt.</span>
</section>

<style>
	.hero-img {
		width: 40%;
		aspect-ratio: 1/1;
	}

	.buttons {
		flex-direction: row;
		display: flex;
		gap: 15px !important;
		justify-content: center;
		font-size: unset !important;
	}

	@media (min-width: 1300px) {
		#sec_mint_1 {
			display: flex;
			justify-content: left;
		}
	
		#sec_mint_1 div {
			display: flex;
			gap: 40px;
			font-size: clamp(1.5em, 2.5vw, 2em);
		}
	}

	@media (max-width: 1000px) {
		#sec_mint_1 img {
			width: 70%;
		}

		#facts {
			gap: 20px;
		}
	}

	@media (max-width: 800px) {
		.buttons {
			flex-direction: column;
			width: 100%;
		}

		#sec_mint_1 > div {
			padding-left: 20px;
			padding-right: 20px;
		}
		
		.support {
			flex-direction: column !important;
		}
	}

	.note-link {
		color: white;
		text-decoration: none;
		font-size: 0.8em;
	}

	h2 {
		font-size: 1.4em;
		font-weight: 900;
		letter-spacing: -0.025em; 
	}
</style>
