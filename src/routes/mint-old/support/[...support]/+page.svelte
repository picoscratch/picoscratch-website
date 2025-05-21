<script>
	import { page } from "$app/stores";
    import { Breadcrumb } from "picoscratch-ui";

	/** @type {import('./$types').PageData} */
	export let data;

	$: path = $page.params.support.split("/");

	function humanizeId(str) {
		return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
	}
</script>

<svelte:head>
	<!-- article meta -->
	<title>{data.meta.title} - PicoScratch MINT Support</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<section style="gap: 15px;">
	<!-- <a href="/mint" style="color: white;">MINT</a>
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
	{/if} -->
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/mint">MINT</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/mint/support">Support</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			{#each path as part, i}
				{#if i < path.length - 1}
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/mint/support/{path.slice(0, i + 1).join('/').replace(/ /g, '%20')}">{humanizeId(part)}</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
				{:else}
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/mint/support/{path.slice(0, i + 1).join('/').replace(/ /g, '%20')}">{humanizeId(part)}</Breadcrumb.Link>
					</Breadcrumb.Item>
				{/if}
			{/each}
		</Breadcrumb.List>
	</Breadcrumb.Root>
</section>
<section style="flex-direction: column; gap: 5px; font-size: 1.4em;">
	<h1 class="title">{data.meta.title}</h1>
	<p class="text-muted-foreground text-xl">{data.meta.description}</p>
</section>
<article class="content">
	<svelte:component this={data.content} />
</article>

<style>
	article {
		width: 100%;
		padding-right: .75rem;
		padding-left: .75rem;
		margin-right: auto;
		margin-left: auto;
		box-sizing: border-box; /* Pure magic :O */
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

	h2 {
		margin: 0;
		font-size: 1.3em;
		font-weight: 900;
		letter-spacing: -0.025em; 
	}

	.title {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 800;
		letter-spacing: -0.025em;

		@media (min-width: 1024px) { 
			font-size: 3rem;
			line-height: 1;
		}
	}

	:global(.content h2) {
		padding-bottom: 0.5rem;
		border-bottom-width: 1px;
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		scroll-margin: 5rem;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	:global(.content h3) {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		scroll-margin: 5rem;
	}

	:global(.content h4) {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		scroll-margin: 5rem;
	}

	:global(.content p) {
		line-height: 1.75rem;
	}
</style>