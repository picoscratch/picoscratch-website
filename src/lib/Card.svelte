<script>
	export let style = "";
</script>

<div {style}>
	<slot></slot>
</div>

<style>
	div {
		background-color: var(--background-hard);
		border: var(--background-light) 2px solid;
		padding: 10px;
		border-radius: 10px;
	}
</style>