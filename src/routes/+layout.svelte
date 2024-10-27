<script>
	import '../app.css';

	import Splash from '../lib/components/Splash.svelte';
	import { onMount } from 'svelte';

	let hasVisited = false;

	// Check localStorage for visit status
	onMount(() => {
		const storedVisit = localStorage.getItem('hasVisited');
		hasVisited = storedVisit === 'true';

		// Mark as not visited on page refresh or unload
		const handleBeforeUnload = () => {
			localStorage.setItem('hasVisited', 'false');
		};

		window.addEventListener('beforeunload', handleBeforeUnload);

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	});

	// Function to update visit status in localStorage
	function setHasVisited() {
		localStorage.setItem('hasVisited', 'true');
		hasVisited = true;
	}
</script>

<svelte:head>
	<title>MathAR Balance</title>
	<meta name="description" content="Ar App" />
</svelte:head>
<div
	class="portrait:flex portrait:gap-4 z-50 w-full portrait:fixed portrait:items-center portrait:justify-center portrait:h-screen portrait:bg-black landscape:hidden"
>
	<div class="phone"></div>
	<p class="text-white text-xl font-bold mt-10">Rotate Your Phone</p>
</div>
{#if !hasVisited}
	<Splash on:visited={setHasVisited} />
{:else}
	<slot />
{/if}

<style>
	.phone {
		height: 50px;
		width: 100px;
		border: 3px solid white;
		border-radius: 10px;
		animation: rotate 1.5s ease-in-out infinite alternate;
		/* display: none; */
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-90deg);
		}
		100% {
			transform: rotate(-90deg);
		}
	}
</style>
