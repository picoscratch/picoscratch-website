<script>
	import { page } from "$app/stores";

	/** @type {import('./$types').PageData} */
	export let data;

	$: path = $page.params.support.split("/");

	function humanizeId(str) {
		return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
	}
</script>

<section style="gap: 15px;">
	<a href="/mint" style="color: white;">MINT</a>
	<span>&gt;</span>
	<a href="/mint/support" style="color: white;">Support</a>
	{#if $page.params.support != ""}
		{#each path as part, i}
			{#if i < path.length - 1}
				<span>&gt;</span>
				<a href="/mint/support/{path.slice(0, i + 1).join('/').replace(/ /g, '%20')}" style="color: white;">{humanizeId(part)}</a>
			{:else}
				<span>&gt;</span>
				<span>{humanizeId(part)}</span>
			{/if}
		{/each}
	{/if}
</section>
<section style="flex-direction: column; gap: 5px; font-size: 1.4em;">
	<h1>{data.meta.title}</h1>
	<p>{data.meta.description}</p>
</section>
<article>
	<svelte:component this={data.content} />
</article>

<style>
	article {
		width: 100%;
		padding-right: .75rem;
		padding-left: .75rem;
		margin-right: auto;
		margin-left: auto;
	}

	@media (min-width: 576px) {
		article {
			max-width: 540px;
		}
	}

	@media (min-width: 768px) {
		article {
			max-width: 720px;
		}
	}

	@media (min-width: 992px) {
		article {
			max-width: 960px;
		}
	}

	@media (min-width: 1200px) {
		article {
			max-width: 1140px;
		}
	}
</style>