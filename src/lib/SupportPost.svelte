<script lang="ts">
	import { Button, Card } from "picoscratch-ui";
	
	let { title, description, link } = $props();
</script>

<!-- <div class="support-post"> -->
<Card.Root style="padding: 10px; display: flex; flex-direction: column; align-items: center;">
	<h2>{title}</h2>
	<span>{description}</span>
	<a href={link}>
		<Button variant="secondary">Öffnen</Button>
	</a>
</Card.Root>
<!-- </div> -->

<style>
	/* .support-post {
		display: flex;
		background-color: var(--background-hard);
		border-radius: 15px;
		border: 2px solid var(--background-light);
		flex-direction: column;
		padding: 15px;
		text-align: center;
	} */

	h2 {
		margin: 0 !important;
		font-size: 1.3em;
		font-weight: 900;
		letter-spacing: -0.025em;
		border-bottom-width: 0px !important;
	}
</style>