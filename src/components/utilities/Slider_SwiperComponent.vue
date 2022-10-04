<template>
<swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
>
    <swiper-slide v-for="card in cardSlides" >
        <InteractiveCardComponent :card="card" />
    </swiper-slide>
    
</swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import InteractiveCardComponent from './InteractiveCardComponent.vue';

// Import Swiper styles
export default {
    props: {
		cardSlides: Array,
	},
    components: {
    Swiper,
    SwiperSlide,
    InteractiveCardComponent
},
    setup() {
    const onSwiper = (swiper) => {
        console.log(swiper);
    };
    const onSlideChange = () => {
        console.log('slide change');
    };
    return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
    };
    },
};
</script>
  