<script>
	export let open = false;

	/**
	 * @type {HTMLDialogElement}
	 */
	let dialog;
	let animatingOut = false;

	// $: if (dialog && open) dialog.showModal();
	$: {
		if(dialog) {
			if(open) dialog.showModal();
			else {
				animatingOut = true;
				setTimeout(() => {
					animatingOut = false;
					dialog.close();
				}, 500);
			}
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (open = false)}
	on:click|self={() => dialog.close()}
	class:out={animatingOut}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot></slot>
	</div>
</dialog>

<style>
	dialog {
		background-color: var(--background-hard);
		border: var(--background-light) 2px solid;
		padding: 10px;
		border-radius: 10px;
		animation: popIn 500ms cubic-bezier(0.65, 0, 0.35, 1);
		color: var(--text);
		text-align: center;
	}

	:global(dialog *) {
		margin: 0;
	}

	dialog div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	dialog::backdrop {
		backdrop-filter: blur(15px);
	}

	dialog.out {
		animation: popOut 500ms cubic-bezier(0.65, 0, 0.35, 1);
	}

	@keyframes popIn {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes popOut {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
</style>