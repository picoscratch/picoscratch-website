<script>
	import { Button, Drawer, Input } from "picoscratch-ui";

	export let open;

	/**
	 * @type {"start" | "load" | "ok"}
	 */
	let state = "start";
	let mail = "";
</script>

<Drawer.Root bind:open>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Title>Vorbestellung MINT-Messgerät</Drawer.Title>
		</Drawer.Header>
		{#if state == "start"}
		<span style="padding-left: 15px; padding-right: 15px;">Tragen Sie sich in unseren Newsletter ein, und wir benachrichtigen Sie sobald Sie unser Messgerät bald erhalten können!</span>
		<Input type="email" placeholder="E-Mail" style="text-align: center; margin-left: 15px; margin-right: 15px; width: calc(100% - 15px - 15px);" bind:value={mail} />
		<Drawer.Footer>
			<Button class="primary" on:click={async () => {
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
			<Drawer.Close>
				<Button variant="secondary" style="width: 100%;">Abbrechen</Button>
			</Drawer.Close>
		</Drawer.Footer>
		{:else if state == "load"}
			<span style="padding-left: 15px; padding-right: 15px;">Einen Moment bitte...</span>
		{:else if state == "ok"}
			<span style="padding-left: 15px; padding-right: 15px;">Vielen Dank! Wir haben Ihre E-Mail-Adresse erfolgreich gespeichert.</span>
			<Drawer.Footer>
				<Button class="primary" on:click={async () => {
					open = false;
					await new Promise(r => setTimeout(r, 1000));
					state = "start";
				}}>Schließen</Button>
			</Drawer.Footer>
		{/if}
	</Drawer.Content>
</Drawer.Root>