<script>
	import Card from "$lib/Card.svelte";
	// @ts-ignore
	import temperatureSensor from "$lib/images/mint/sensors/temp.png?format=webp&w=512";
	// @ts-ignore
	import tdsSensor from "$lib/images/mint/sensors/tds.png?format=webp&w=512";
	// @ts-ignore
	import co2Sensor from "$lib/images/mint/sensors/co2.png?format=webp&w=512";
	// @ts-ignore
	import phSensor from "$lib/images/mint/sensors/ph.png?format=webp&w=512";
	import PlusMinusIcon from "svelte-fluentui-icons/icons/AddSubtractCircle_Filled.svelte";
	import RangeIcon from "svelte-fluentui-icons/icons/ScaleFit_Filled.svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { Button } from "picoscratch-ui";
    import MintPreorderDialog from "$lib/mint/preorderDialog/MINTPreorderDialog.svelte";

	const INFOLIST = {
		temperature: {
			pic: temperatureSensor,
			name: "Temperatursensor",
			accuracy: "±0.5°C",
			range: "-55 bis +125°C",
			ratio: "1 / 1"
		},
		tds: {
			pic: tdsSensor,
			name: "Wasserqualitätssensor",
			accuracy: "±10%",
			range: "0 bis 1000 ppm",
			ratio: "1 / 1"
		},
		co2: {
			pic: co2Sensor,
			name: "CO<sub>2</sub>-Sensor",
			accuracy: "±50 ppm",
			range: "400 bis 2000 ppm",
			ratio: "1 / 1"
		},
		ph: {
			pic: phSensor,
			name: "pH-Sensor",
			accuracy: "±0.1",
			range: "0 bis 14 pH",
			ratio: "1 / 1"
		}
	};

	const info = $page.params.sensor in INFOLIST ? INFOLIST[$page.params.sensor] : {pic: "", name: "", accuracy: "", range: "", error: true};

	onMount(() => {
		if(info.error == true) {
			goto("/mint");
		}
	});

	let newsletterOpen = false;
</script>

<svelte:head>
	<title>{info.name.replace("<sub>", "").replace("</sub>", "")} für PicoScratch MINT Messgeräte</title>
	<meta name="description" content="Der {info.name} für das PicoScratch MINT Messgerät, das einfachste Messgerät für den MINT-Unterricht.">
</svelte:head>

<MintPreorderDialog bind:open={newsletterOpen} />

<section>
	<img src={info.pic} alt={info.name} width="400vw" style="aspect-ratio: {info.ratio}">
	<div>
		<h1 style="font-size: 4rem;">{@html info.name}</h1>
		<div class="buttons">
			<Button on:click={() => {
				newsletterOpen = true;
			}}>Vorbestellen</Button>
			<a href="/mint" style="display: flex; align-items: center; gap: 5px; justify-content: center;">
				<Button variant="secondary" style="width: 100%;">
					Zurück
				</Button>
			</a>
		</div>
	</div>
</section>
<section style="padding-top: 15px;">
	<Card style="display: flex; flex-direction: column; gap: 15px;">
		<div style="display: flex; gap: 10px; flex-direction: row; align-items: center;">
			<PlusMinusIcon size=30 />
			<span>Genauigkeit: <span>{info.accuracy}</span></span>
		</div>
		<div style="display: flex; gap: 10px; flex-direction: row; align-items: center;">
			<RangeIcon size=30 />
			<span>Bereich: <span>{info.range}</span></span>
		</div>
	</Card>
</section>
{#if info.name == "pH-Sensor"}
	<section style="flex-direction: column; gap: 15px; margin-top: 50px;">
		<h1>Verwendung</h1>
		<span>Die Lösung muss eine Temperatur von genau 25°C haben, da sonst kein genauer Wert ermittelt werden kann.</span>
		<span>Nur in destilliertem Wasser lösen lassen.</span>
	</section>
	<section style="flex-direction: column; gap: 15px; margin-top: 50px;">
		<h1>Nach der Verwendung</h1>
		<span>Sensor gründlich mit destilliertem Wasser durchspülen, bis ein Neutralwert von ≈7pH erreicht wird.</span>
	</section>
	<section style="flex-direction: column; gap: 15px; margin-top: 50px;">
		<h1>Lagerung</h1>
		<span>Sensor nicht trocken halten. Destilliertes Wasser in Prüfspitze lassen.</span>
	</section>
{/if}

<style>
	.buttons {
		flex-direction: row;
		display: flex;
		gap: 15px !important;
		justify-content: center;
	}

	@media (max-width: 800px) {
		.buttons {
			flex-direction: column;
			/* width: 100%; */
		}

		h1 {
			font-size: 2.2rem !important;
		}
	}
</style>