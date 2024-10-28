<script>
</script>

<div class="container">
	<main class="menu-container h-screen rounded-lg flex items-center px-6">
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
			<div
				class="h-20 w-full flex items-center justify-center shadow-md bg-[#D7513D] rounded-3xl col-span-2"
			>
				<p class="text-white font-bold text-3xl">EXIT</p>
			</div>
		</div>
	</main>
</div>

<style>
	.menu-container {
		background-color: #f3f4f6;
		opacity: 0.8;
		background-image: linear-gradient(#a4c3ca 1px, transparent 1px),
			linear-gradient(to right, #a4c3ca 1px, #f3f4f6 1px);
		background-size: 20px 20px;
	}

	.container {
		max-width: 64rem;
		margin: auto;
		min-height: 100vh;
		background-color: #f3f4f6; /* Tailwind bg-gray-100 */
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
</style>
