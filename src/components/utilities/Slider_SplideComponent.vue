<template>
	<Splide :options="options" aria-label="My Favorite Images">
		<SplideSlide v-for="card in cardSlides">
			<InteractiveCardComponent 
				:card="card" 
			/>
		</SplideSlide>
	</Splide>
</template>

<script>
/* SPLIDE */
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import InteractiveCardComponent from './InteractiveCardComponent.vue';

export default {
	props: {
		cardSlides: Array,
	},
	data() {
		return {
			options: {
				type: 'loop',
				perPage: 6,
				focus: 'center',
				gap: '1rem',
			}
		}
	},

  components: {
    Splide,
    SplideSlide,
    InteractiveCardComponent
},
};
</script>

<style lang="scss" scoped>
.splide__slide.is-active {
	border: solid white 2px;
}
</style>