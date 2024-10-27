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
	scrollbar={{ draggable: true }}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
>
	<SwiperSlide>Slide 1</SwiperSlide>
	<SwiperSlide>Slide 2</SwiperSlide>
	<SwiperSlide>Slide 3</SwiperSlide>
	<SwiperSlide>Slide 4</SwiperSlide>
	...
</Swiper>
