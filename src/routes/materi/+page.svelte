<script>
	import Swiper from '../../lib/components/Swiper.svelte';
</script>

<div class="materi-container px-6 relative">
	<!-- <img
		src="/images/asset-materi-globe.png"
		alt="globe"
		width="120"
		class="fixed -left-4 rotate-45"
	/> -->
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a href="/" class="cursor-pointer">
		<div class="bg-sky-500 rounded-r-full fixed left-0 mt-4 px-6 text-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
			>
		</div>
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
	<Swiper />
</div>

<style>
	.materi-container {
		background-image: url('/images/bg-materi.png');
		background-position: center;
		background-size: cover;
	}
</style>
