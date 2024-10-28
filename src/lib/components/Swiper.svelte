<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
</script>

<Swiper
	modules={[Navigation, Pagination, Scrollbar, A11y]}
	spaceBetween={50}
	slidesPerView={1}
	navigation
	pagination={{ clickable: true }}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
>
	<SwiperSlide>
		<div class="h-screen flex flex-col items-center justify-center">
			<section class="menu-container p-20 rounded-xl">
				<h1 class="text-center text-6xl font-bold">
					PERSAMAAN <br /> LINEAR SATU <br /> VARIABEL
				</h1>
			</section>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="container">
			<h1 class="text-center font-semibold text-4xl">MATERI</h1>
			<div class="bg-gray-200 rounded-2xl py-4 px-8">
				<p class="text-[#193f63] text-lg">
					Persamaan linier satu variabel adalah suatu kalimat terbuka yang menggunakan tanda sama
					dengan (=) memuat satu variabel dan berpangkat satu Bentuk umum Persamaan Linear Satu
					Variabel adalah ax + b = 0, a ≠ 0, a, b∈R.
				</p>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="container">
			<h1 class="text-center font-semibold text-4xl">BENTUK UMUM</h1>
			<div class="bg-gray-200 rounded-2xl py-4 px-8">
				<img src="" alt="bentuk umum" />
				<p class="text-[#193f63] text-lg">
					Bentuk umum Persamaan Linear Satu Variabel adalah ax + b = 0, a ≠ 0, a, b∈R.
				</p>
				<p class="text-[#193f63] text-lg">
					Keterangan: x disebut variabel atau peubah a disebut koefisien dari x b disebut konstanta
					ax + b terletak di ruas kiri 0 terletak pada ruas kanan ruas kiri ruas kanan dipisahkan
					oleh tanda ‘’=’’.
				</p>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="container">
			<h1 class="text-center font-semibold text-4xl">CIRI - CIRI PLSV</h1>
			<div class="bg-gray-200 rounded-2xl py-4 px-8">
				<ol class="text-[#193f63] text-lg list-decimal">
					<li>Mempunyai variabel hanya satu</li>
					<li>Variabel berpangkat satu</li>
					<li>Dihubungkan dengan tanda sama dengan (=)</li>
					<li>Merupakan kalimat terbuka (kalimat yang belum dapat ditentukan kebenarannya)</li>
				</ol>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="h-screen flex flex-col items-center justify-center">
			<section class="menu-container p-20 rounded-xl">
				<h1 class="text-center text-6xl font-bold">QUIZ</h1>
			</section>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="container">
			<h1 class="text-center font-semibold text-4xl">SUKU - SUKU SEJENIS</h1>
			<p class="text-lg text-[#193f63] text-center">
				Suku-suku sejenis adalah suku-suku pada bentuk aljabar yang memiliki vatiabel dengan pangkat
				yang sama
			</p>
			<div class="grid grid-cols-3 grid-rows-2 gap-4">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="container">
			<h1 class="text-center font-semibold text-4xl">METODE PENYELESAIAN</h1>
			<div class="bg-gray-200 rounded-2xl py-4 px-8">
				<p>
					Menggunakan Sifat-sifat Persamaan Menambah, mengurangi, mengali, membagi ruas kanan dan
					kiri dengan bilangan atau bentuk aljabar yang sama. Contoh : Penyelesaian dari x - 2 = 17
					adalah...
				</p>
				<ol class="text-[#193f63] text-lg">
					<li>=> x - 2 = 17</li>
					<li>=> x - 2 + 2 = 17 + 2</li>
					<li>=> x = 19</li>
					<li>Jadi, penyelesaiannya adalah x = 19</li>
				</ol>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="container">
			<h1 class="text-center font-semibold text-4xl">LANGKAH PENYELESAIAN MASALAH PLSV</h1>
			<div class="bg-gray-200 rounded-2xl py-4 px-8">
				<ol class="text-[#193f63] text-lg list-decimal">
					<li>Memisalkan yang belum diketahui dengan variabel (x atau yang lainnya)</li>
					<li>Menyusun persamaan berdasarkan informasi yang diberikan menjadi model matematika</li>
					<li>Menyelesaikan persamaan tersebut</li>
				</ol>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="container">
			<h1 class="text-center font-semibold text-4xl">
				ILUSTRASI PENYELESAIAN MENGGUNAKAN TIMBANGAN
			</h1>
			<div class="bg-gray-200 rounded-2xl py-4 px-8">
				<p class="text-[#193f63] text-lg list-decimal">
					Sebuah timbangan dengan sisi kiri berisi sebuah kantong yang didalamnya berisi mainan
					rubrik. Banyaknya rubrik dalam kantong belum memenuhi daya tampung. Untuk memenuhi daya
					tampung kantong tersebut masih kurang 4 rubrik. Sedangkan pada sisi kanan timbangan
					tersebut terdapat 2 rubrik sehingga timbangan pada posisi yang setimbang. Berapakah daya
					tampung kantong tersebut?
				</p>
			</div>
		</div>
	</SwiperSlide>
</Swiper>

<style>
	.menu-container {
		background-color: transparent;
		opacity: 0.8;
		background-image: linear-gradient(#a4c3ca 1px, transparent 1px),
			linear-gradient(to right, #a4c3ca 1px, transparent 1px);
		background-size: 30px 30px;
	}

	.container {
		max-width: 64rem;
		margin: auto;
		min-height: 100vh;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
</style>
