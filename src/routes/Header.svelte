<script lang="ts">
	// @ts-ignore
	import logo from "$lib/images/picoscratch-large.png?format=webp&w=500";
	import { page } from '$app/stores';
	import { fade } from "svelte/transition";
  import { onMount } from "svelte";
	// @ts-ignore
	import NavigationFilled from "svelte-fluentui-icons/icons/Navigation_Filled.svelte"
	// @ts-ignore
	import Open from "svelte-fluentui-icons/icons/Open_Filled.svelte"
	let path = "/";
	$: {
		path = $page.url.pathname;
		console.log(path);
	}
	let navBtn: HTMLButtonElement;
	let navShown = false;
	onMount(() => {
		navBtn.addEventListener("click", () => {
			navShown = !navShown;
		})
	})
</script>

<header>
	<div class="nav">
		<div>
			<a href="/">
				<img src={logo} alt="PicoScratch">
			</a>
			<button bind:this={navBtn}>
				<NavigationFilled size="40" color="white"></NavigationFilled>
			</button>
		</div>
		<nav class={navShown ? "" : "hidden"}>
			<a class={path == "/" ? "active" : ""} href="/">Home</a>
			<a class={path == "/learn" ? "active" : ""} href="/learn">Learn</a>
			<!-- <a class={path == "/downloads" ? "active" : ""} href="/downloads/">Downloads</a> -->
			<!-- <a href="https://manager.picoscratch.de/">Manager</a> -->
			<!-- <a href="https://manager.picoscratch.de/register/">Demo</a> -->
			<!-- <a class={path == "/help" ? "active" : ""} href="/help/">Hilfe</a> -->
		</nav>
	</div>
</header>

<style>
	header {
		background-color: hsl(var(--background-hsl) / 0.5);
		background-image: url($lib/images/noise.webp);
		background-size: contain;
		position: sticky;
		top: 0;
		backdrop-filter: blur(15px);
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	header img {
		width: 10em;
	}

	header nav {
		padding: 20px;
		display: flex;
		gap: 15px;
	}

	header nav a {
		color: white;
		text-decoration: none;
		font-size: 1.8rem;
		border-right: 2px solid white;
		padding-right: 15px;
	}

	header nav a:last-of-type {
		border-right: none;
		border-bottom: none;
	}

	nav a::after {
		content: "";
		display: block;
		width: 100%;
		height: 5px;
		background-color: white;
		border-radius: 5px;
		transition: background-color 200ms, opacity 200ms;
		opacity: 0;
	}

	.active::after,
	nav a:hover::after {
		opacity: 1;
	}

	nav a:hover::after {
		background-color: rgb(187, 187, 187);
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.nav div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		margin-right: 15px;
	}

	button {
		border: 3px solid #2e2e2e;
		background-color: #1d1d1d;
		border-radius: 10px;
	}

	/* @media (min-width: 850px) { */
	@media (min-width: 1050px) {
		.nav div button {
			display: none;
		}
	}

	/* @media (max-width: 850px) { */
	@media (max-width: 1050px) {
		header nav {
			/* display: none; */
			flex-direction: column;
			animation: slideIn 1s ease-in-out;
		}
		.nav {
			flex-direction: column;
		}
		header nav a {
			border-right: none;
			border-bottom: 2px solid white;
			text-align: center;
			font-size: 2.3rem;
		}
		.hidden {
			display: none;
		}
		nav a::after {
			display: none;
		}
		nav a.active {
			color: #b4b4b4;
			font-weight: 900;
		}
		header img {
			width: 13em;
		}
	}

	@media(max-width: 360px) {
		header img {
			width: 10em;
		}
	}

	@media(max-width: 320px) {
		header img {
			width: 9em;
		}
	}
</style>
