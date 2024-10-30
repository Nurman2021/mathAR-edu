import { writable } from 'svelte/store';

let audio = null;

// Inisialisasi store untuk status audio
export const isPlaying = writable(false);

// Fungsi untuk memulai audio (hanya sekali)
export function initializeAudio() {
	if (!audio) {
		audio = new Audio('/music/bg-music.mp3'); // Path musik Anda
		audio.loop = true;

		// Sinkronisasi status audio dengan store
		audio.addEventListener('play', () => isPlaying.set(true));
		audio.addEventListener('pause', () => isPlaying.set(false));
	}
	return audio;
}

// Fungsi untuk play/pause audio
export function toggleAudio() {
	if (audio) {
		audio.paused ? audio.play() : audio.pause();
	}
}
