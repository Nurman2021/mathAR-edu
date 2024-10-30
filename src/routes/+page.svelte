<script>
	import { onMount, onDestroy } from 'svelte';
	import { Volume2, VolumeX } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import { isPlaying, initializeAudio, toggleAudio } from '$lib/audioStore';
	function closeApp() {
		if (confirm('Anda yakin ingin menutup aplikasi ini?')) {
			// window.open('/', '_self');
			// window.close();
			window.open(``, `_blank`, ``);
			window.close();
		}
	}

	onMount(() => {
		const audio = initializeAudio(); // Inisialisasi audio (hanya sekali)

		// Jika sebelumnya audio di-play, lanjutkan pemutaran
		if (localStorage.getItem('musicPlaying') === 'true') {
			audio.play();
		}
	});

	// Update status audio ke localStorage saat user toggle
	function toggleMusic() {
		toggleAudio();
		const playing = get(isPlaying);
		localStorage.setItem('musicPlaying', playing ? 'true' : 'false');
	}
</script>

<!-- <div class="container"> -->
<main class="container">
	<div class="grid grid-cols-2 grid-rows-3 gap-4 w-full">
		<a
			href="/demo"
			class="py-2 w-full flex items-center justify-center shadow-md bg-[#3D3C42] rounded-3xl hover:opacity-80"
		>
			<img src="/images/demo-icon.png" alt="demo" width="120" />
			<p class="text-white font-bold text-xl">DEMONSTRASI</p>
		</a>
		<a
			href="/materi"
			class="py-2 w-full flex items-center justify-center shadow-md bg-blue-700 rounded-3xl hover:opacity-80"
		>
			<img src="/images/materi-icon.png" alt="demo" width="120" />
			<p class="text-white font-bold text-xl">MATERI</p>
		</a>
		<a
			href="/quiz"
			class="py-2 w-full col-span-2 flex items-center justify-center shadow-md bg-sky-500 rounded-3xl hover:opacity-80"
		>
			<img src="/images/quiz-icon.png" alt="demo" width="120" />
			<p class="text-white font-bold text-xl">KUIS</p>
		</a>
		<a
			href="/informasi"
			class="py-2 w-full flex items-center justify-center shadow-md bg-blue-700 rounded-3xl hover:opacity-80"
		>
			<img src="/images/info-icon.png" alt="demo" width="120" />
			<p class="text-white font-bold text-xl">INFORMASI</p>
		</a>
		<a
			href="/kredit"
			class="py-2 w-full flex items-center justify-center shadow-md bg-[#FEBB0D] rounded-3xl hover:opacity-80"
		>
			<img src="/images/kredit-icon.png" alt="demo" width="120" />
			<p class="text-white font-bold text-xl">KREDIT</p>
		</a>
		<div class="flex col-span-2 gap-2">
			<button
				on:click={toggleMusic}
				class=" w-20 h-20 text-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl shadow-md flex items-center justify-center"
			>
				{#if $isPlaying}
					<Volume2 size={48} />
				{:else}
					<VolumeX size={48} />
				{/if}
			</button>
			<button
				on:click={closeApp}
				class="h-20 w-full flex items-center justify-center shadow-md bg-[#D7513D] rounded-3xl hover:opacity-80"
			>
				<p class="text-white font-bold text-3xl">EXIT</p>
			</button>
		</div>
	</div>
</main>

<!-- </div> -->

<style>
	.container {
		max-width: 64rem;
		margin: auto;
		min-height: 100vh;
		background-color: #f3f4f6;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		opacity: 0.8;
		background-image: linear-gradient(#a4c3ca 1px, transparent 1px),
			linear-gradient(to right, #a4c3ca 1px, #f3f4f6 1px);
		background-size: 20px 20px;
		justify-content: center;
	}
</style>
