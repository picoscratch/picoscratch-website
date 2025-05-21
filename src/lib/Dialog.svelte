<script>
	import { run, self, createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	/**
	 * @typedef {Object} Props
	 * @property {boolean} [open]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { open = $bindable(false), children } = $props();

	/**
	 * @type {HTMLDialogElement}
	 */
	let dialog = $state();
	let animatingOut = $state(false);

	// $: if (dialog && open) dialog.showModal();
	run(() => {
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
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => (open = false)}
	onclick={self(() => dialog.close())}
	class:out={animatingOut}
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div onclick={stopPropagation(bubble('click'))}>
		{@render children?.()}
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
		margin: 10px;
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