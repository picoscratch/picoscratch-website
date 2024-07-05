<script>
	import { onMount } from "svelte";
	import MintPreorderDialogDialog from "./MINTPreorderDialogDialog.svelte";
	import MintPreorderDialogDrawer from "./MINTPreorderDialogDrawer.svelte";

	let isDesktop = true;
	export let open;

	onMount(() => {
		isDesktop = window.innerWidth > 768;
	});
</script>

{#if isDesktop}
<MintPreorderDialogDialog bind:open />
{:else}
<MintPreorderDialogDrawer bind:open />
{/if}