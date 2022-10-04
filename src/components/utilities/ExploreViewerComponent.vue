<template>
	<div>
		EXPLORE!!
	</div>

	<h3 class="section-title"> Trending </h3>
	<Slider_SwiperComponent :cardSlides="explore.trending" />

	<h3 class="section-title"> Popular </h3>
	<Slider_SwiperComponent :cardSlides="explore.popular" />

	<h3 class="section-title"> Top Rated </h3>
	<Slider_SwiperComponent :cardSlides="explore.topRated" />

</template>

<script>
import { apiData } from '@/assets/data/apiData.js'
import axios from 'axios';

import InteractiveCardComponent from '@/components/utilities/InteractiveCardComponent.vue';
import Slider_SplideComponent from './Slider_SplideComponent.vue';
import Slider_SwiperComponent from './Slider_SwiperComponent.vue';

export default {
	props: {
		format: String
	},

	data() {
		return {
			tmdbAPI: apiData.TMDB,
			explore: {
				popular: [],
				trending: [],
				topRated: [],
			},

			exploreKeys: ['trending', 'popular', 'topRated'],
			sectionTitles: ['Trending', 'Popular', 'Top Rated'],
		}
	},

	computed: {
		exploreContent() {
			return this.explore;
		}
	},

	methods: {
		getExplorePageContent(contentType) {
			axios
				.get(this.getAPIPath(contentType))
				.then(response => {
					this.explore[contentType] = this.getResults(response);
					console.log("TEST _ EXPLORE PAGE:", contentType, this.explore[contentType]);
				})
				.catch(error => {
					console.warn("Error in explore page content", error);
				})
		},

		getAPIPath(contentType) {
			const {base_url, trending, week, popular, topRated } = this.tmdbAPI;
			const api_key = import.meta.env.PR_APIKEY;

			switch (contentType) {
				case 'trending': {
					return base_url + trending + this.format + week + api_key;
				}
				case 'popular': {
					return base_url + this.format + popular + api_key;
				}
				case 'topRated': {
					return base_url + this.format + topRated + api_key;
				} 
			}
		},

		getResults({status, data}) {
			if (status !== 200) {
				console.log("Error, data not found from remote API. STATUS:", status);
				return;
			}

			return data.results;
		}, 
	},

	mounted() {
		this.exploreKeys.forEach(item => {
			this.getExplorePageContent(item);
		})
	},

	components: {
    InteractiveCardComponent,
    Slider_SplideComponent,
    Slider_SwiperComponent
}
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

</style>