<script>
	export let title;
	export let description;
	export let link;
</script>

<div class="support-post">
	<h2>{title}</h2>
	<span>{description}</span>
	<a href={link}>
		<button>Öffnen</button>
	</a>
</div>

<style>
	.support-post {
		display: flex;
		background-color: var(--background-hard);
		border-radius: 15px;
		border: 2px solid var(--background-light);
		flex-direction: column;
		padding: 15px;
		text-align: center;
	}

	h2 {
		margin: 0;
	}
</style>