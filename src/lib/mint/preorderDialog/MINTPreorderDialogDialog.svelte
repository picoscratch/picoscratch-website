<script>
	import { Button, Dialog, Input } from "picoscratch-ui";

	export let open;
	/**
	 * @type {"start" | "load" | "ok"}
	 */
	export let state = "start";
	let mail;
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Vorbestellung MINT-Messgerät</Dialog.Title>
		</Dialog.Header>
		{#if state == "start"}
		<span>Tragen Sie sich in unseren Newsletter ein, und wir benachrichtigen Sie sobald Sie unser Messgerät bald erhalten können!</span>
		<Input type="email" placeholder="E-Mail" style="text-align: center;" bind:value={mail} />
		<div class="buttons">
			<Button variant="secondary" on:click={() => {
				open = false;
			}}>Abbrechen</Button>
			<Button on:click={async () => {
				state = "load";
				const res = await fetch("https://mintsrv.picoscratch.de/api/subNewsletter", {
					method: "POST",
					body: JSON.stringify({email: mail})
				});

				console.log(res.status)

				if(res.status == 200) {
					state = "ok";
				} else {
					mail = "";
					state = "start";
				}
			}}>Absenden</Button>
		</div>
		{:else if state == "load"}
			<span>Einen Moment bitte...</span>
		{:else if state == "ok"}
			<span>Vielen Dank! Wir haben Ihre E-Mail-Adresse erfolgreich gespeichert.</span>
			<Button on:click={async () => {
				open = false;
				await new Promise(r => setTimeout(r, 1000));
				state = "start";
			}}>Schließen</Button>
		{/if}
	</Dialog.Content>
</Dialog.Root>

<style>
	.buttons {
		flex-direction: row;
		display: flex;
		gap: 15px !important;
		justify-content: center;
		font-size: unset !important;
	}
</style>