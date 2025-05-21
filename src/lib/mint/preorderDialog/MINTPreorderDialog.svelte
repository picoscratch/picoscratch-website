<script lang="ts">
	import { onMount } from "svelte";
	import MintPreorderDialogDialog from "./MINTPreorderDialogDialog.svelte";
	import MintPreorderDialogDrawer from "./MINTPreorderDialogDrawer.svelte";

	let isDesktop = $state(true);
	let { open = $bindable() } = $props();

	onMount(() => {
		isDesktop = window.innerWidth > 768;
	});
</script>

{#if isDesktop}
<MintPreorderDialogDialog bind:open />
{:else}
<MintPreorderDialogDrawer bind:open />
{/if}