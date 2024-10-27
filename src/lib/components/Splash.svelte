<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	let active = false;
	const dispatch = createEventDispatcher();

	// Run logic when the component is mounted
	onMount(() => {
		const timer1 = setTimeout(() => {
			active = true; // Activate the animation
			const timer2 = setTimeout(() => {
				dispatch('visited'); // Trigger event to mark splash as complete
			}, 5000); // Adjust this to match your animation duration
		}, 1000); // Delay before activating animation
		// Cleanup timers when the component unmounts
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	});
</script>

<div class="splash-container {active ? 'active' : 'inactive'}">
	<div class="flex gap-4 items-center animate-bounce">
		<img src="/images/splash-icon.png" alt="splash icon" class="h-44" />
		<h1 class="text-8xl font-cheap">
			Math<span class="text-[#394CB5]">AR</span> <span class="text-yellow-500">Balance</span>
		</h1>
	</div>
</div>

<style>
	.splash-container {
		background-image: url('/images/pattern-bg.png');
		background-position: center;
		background-size: cover;
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.5s ease-in-out;
	}
	.active {
		opacity: 1;
	}
	.inactive {
		opacity: 0;
	}
</style>
