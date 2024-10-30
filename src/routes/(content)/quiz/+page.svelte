<script>
	import Quiz from '$lib/components/Quiz.svelte';
	let startQuiz = false;
</script>

<div class="h-screen flex flex-col items-center justify-center">
	{#if !startQuiz}
		<!-- Tampilan Menu Awal -->
		<section class="menu-container p-20 rounded-xl flex items-center space-x-8">
			<img src="/images/hero-quiz.png" alt="quiz" width="250" />
			<div class="text-center">
				<h1 class="text-6xl font-bold mb-6">QUIZ</h1>
				<button
					class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded text-xl"
					on:click={() => (startQuiz = true)}
				>
					Mulai
				</button>
			</div>
		</section>
	{:else}
		<!-- Tampilkan Quiz -->
		<Quiz />
	{/if}
</div>

<style>
	.menu-container {
		background-color: transparent;
		opacity: 0.8;
		background-image: linear-gradient(#a4c3ca 1px, transparent 1px),
			linear-gradient(to right, #a4c3ca 1px, transparent 1px);
		background-size: 30px 30px;
	}
</style>
