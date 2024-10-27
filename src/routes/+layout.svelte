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

<!-- <Header /> -->
{#if !hasVisited}
	<Splash on:visited={setHasVisited} />
{:else}
	<slot />
{/if}
