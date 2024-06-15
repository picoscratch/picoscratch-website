<script>
	import { slide } from "svelte/transition";

	export let open = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class={open ? "open" : ""}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<h2 tabindex="0" on:click={() => {
		open = !open;
	}}>
		<slot name="title"></slot>
		<svg width="40px" height="40px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a1 1 0 0 1 .993.883L19 4v16a1 1 0 0 1-1.993.117L17 20V4a1 1 0 0 1 1-1Zm-12.707.293a1 1 0 0 1 1.32-.083l.094.083 8 8a1 1 0 0 1 .083 1.32l-.083.094-8 8a1 1 0 0 1-1.497-1.32l.083-.094L12.586 12 5.293 4.707a1 1 0 0 1 0-1.414Z" fill="#ffffff"/></svg>
	</h2>
	{#if open}	
	<span transition:slide>
		<slot></slot>
	</span>
	{/if}
</div>

<style>
	div {
		display: flex;
		border-radius: 15px;
		overflow: hidden;
		border: var(--background-light) 2px solid;
		width: 100%;
	}

	h2 {
		background-color: var(--background-hard);
		padding: 15px;
		display: flex;
		gap: 20px;
		justify-content: center;
		cursor: pointer;
		transition: background-color 500ms ease-in-out;
	}
	
	.open h2 {
		border-bottom: var(--background-light) 2px solid;
	}

	h2:hover {
		background-color: var(--background);
	}

	svg {
		transition: rotate 500ms ease-in-out;
		margin-left: auto;
	}

	.open > h2 > svg {
		rotate: -90deg;
	}

	:not(.open) > h2 > svg {
		rotate: 90deg;
	}

	span {
		padding-bottom: 10px;
	}
</style>