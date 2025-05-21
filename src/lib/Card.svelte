<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { children, ...rest }: Props = $props();
</script>

<div {...rest}>
	{@render children?.()}
</div>

<style>
	div {
		background-color: var(--background-hard);
		border: var(--background-light) 2px solid;
		padding: 10px;
		border-radius: 10px;
	}
</style>