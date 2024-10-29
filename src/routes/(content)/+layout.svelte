<script>
	import { ArrowLeft } from 'lucide-svelte';
</script>

<div class="materi-container px-6 relative">
	<a href="/" class="bg-sky-500 rounded-r-full fixed left-0 mt-4 px-6 text-white">
		<ArrowLeft size={48} />
	</a>

	<img
		src="/images/asset-materi-book.png"
		alt="book"
		width="120"
		class="fixed -left-4 bottom-0 -rotate-45"
	/>
	<img src="/images/asset-materi-plane.png" alt="globe" width="120" class="fixed -right-4" />
	<img
		src="/images/asset-materi-pencil.png"
		alt="globe"
		width="120"
		class="fixed -right-4 bottom-0"
	/>
	<slot />
</div>

<style>
	.materi-container {
		background-image: url('/images/bg-materi.png');
		background-position: center;
		background-size: cover;
		height: 100vh;
		width: 100vw;
	}
</style>
