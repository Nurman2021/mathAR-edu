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
	<SwiperSlide>Slide 2</SwiperSlide>
	<SwiperSlide>Slide 3</SwiperSlide>
	<SwiperSlide>Slide 4</SwiperSlide>
</Swiper>

<style>
	.menu-container {
		background-color: transparent;
		opacity: 0.8;
		background-image: linear-gradient(#a4c3ca 1px, transparent 1px),
			linear-gradient(to right, #a4c3ca 1px, transparent 1px);
		background-size: 30px 30px;
	}
</style>
