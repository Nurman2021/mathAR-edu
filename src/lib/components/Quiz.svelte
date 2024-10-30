<script>
	import { writable } from 'svelte/store';

	// Soal-soal kuis dan jawaban yang benar
	const questions = [
		{ question: '1. 2x = 4, berapa nilai x?', options: ['1', '2', '3', '4'], answer: '2' },
		{ question: '2. 3x = 6, berapa nilai x?', options: ['2', '3', '4', '1'], answer: '2' },
		{ question: '3. 2x - 3 = 0, berapa nilai x?', options: ['2', '1.5', '3', '0'], answer: '1.5' },
		{ question: '4. x = 3, apakah benar?', options: ['Benar', 'Salah'], answer: 'Benar' },
		{ question: '5. x - 4 = 0, berapa nilai x?', options: ['0', '1', '2', '4'], answer: '4' }
	];

	let currentQuestion = 0; // Index soal saat ini
	let correctCount = writable(0); // Skor jawaban benar
	let incorrectCount = writable(0); // Skor jawaban salah
	let isAnswered = writable(false); // Status apakah soal sudah dijawab

	// Fungsi untuk memeriksa jawaban
	function checkAnswer(selected, answer) {
		if (selected === answer) {
			correctCount.update((n) => n + 1); // Tambah skor benar
		} else {
			incorrectCount.update((n) => n + 1); // Tambah skor salah
		}
		isAnswered.set(true); // Tandai soal sudah dijawab
	}

	// Fungsi untuk lanjut ke soal berikutnya
	function nextQuestion() {
		currentQuestion++;
		isAnswered.set(false);
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
	<h1 class="text-2xl font-bold mb-5">Quiz Persamaan Linear</h1>

	{#if currentQuestion < questions.length}
		<div class="bg-white p-6 rounded shadow-md w-full">
			<h2 class="text-lg font-medium mb-4">
				{questions[currentQuestion].question}
			</h2>

			<div class="grid grid-cols-2 gap-4">
				{#each questions[currentQuestion].options as option}
					<button
						class="border border-gray-300 p-3 rounded hover:bg-gray-200 transition"
						on:click={() => checkAnswer(option, questions[currentQuestion].answer)}
						class:correct={$isAnswered && option === questions[currentQuestion].answer}
						class:incorrect={$isAnswered && option !== questions[currentQuestion].answer}
						disabled={$isAnswered}
					>
						{option}
					</button>
				{/each}
			</div>

			{#if $isAnswered}
				<button
					class="mt-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
					on:click={nextQuestion}
				>
					Soal Berikutnya
				</button>
			{/if}
		</div>
	{:else}
		<div class="bg-white p-6 rounded shadow-md w-full max-w-lg text-center">
			<h2 class="text-xl font-bold mb-4">Skor Anda</h2>
			<p>Jawaban Benar: {$correctCount}</p>
			<p>Jawaban Salah: {$incorrectCount}</p>
			<a
				href="/quiz"
				class="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white p-2 rounded"
			>
				Ulangi Kuis
			</a>
		</div>
	{/if}
</div>

<style>
	.correct {
		@apply bg-green-500 text-white;
	}
	.incorrect {
		@apply bg-red-500 text-white;
	}
</style>
