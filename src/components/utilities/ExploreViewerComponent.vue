<template>
	<div>
		EXPLORE!!
	</div>

	<h3 class="section-title"> Trending </h3>
	<ul class="card-container flex-center">
		
		<InteractiveCardComponent v-for="item in explore.trending" :key="item.id"
			:card="item"
			class="card-item"
		/>
	</ul>

	<h3 class="section-title"> Popular </h3>
	<ul class="card-container flex-center">
		
		<InteractiveCardComponent v-for="item in explore.popular" :key="item.id"
			:card="item"
			class="card-item"
		/>
	</ul>

	<h3 class="section-title"> Top Rated </h3>
	<ul class="card-container flex-center">
		
		<InteractiveCardComponent v-for="item in explore.topRated" :key="item.id"
			:card="item"
			class="card-item"
		/>
	</ul>
</template>

<script>
import { apiData } from '@/assets/data/apiData.js'
import axios from 'axios';

import InteractiveCardComponent from '@/components/utilities/InteractiveCardComponent.vue';

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
			}
		}
	},
	
	computed: {
		exploreKeys() {
			return Object.keys(this.explore);
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

	created() {
		this.exploreKeys.forEach(item => {
			this.getExplorePageContent(item);
		})
	},

	components: {
		InteractiveCardComponent,
	}
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.card-container {
	// FLEX container
	$r-gap: $_size-5;
	$c-gap: $_size-3;
	
	row-gap: $r-gap;
	column-gap: $c-gap;

	align-items: flex-start;

		
	overflow-x: scroll;

	.section-title {
		min-width: 100%;
		text-align: center;
	}

	// FLEX items
	@mixin calcCardsInWindow($visibleCards) {
		min-inline-size: calc((100% / $visibleCards - $c-gap) + (100px / $visibleCards)) ;
	}
	.card-item {
		@include calcCardsInWindow(3);

		@media only screen and (min-width: $sm-breakpoint) {
		@include calcCardsInWindow(4);
		}

		@media only screen and (min-width: $md-breakpoint) {
		@include calcCardsInWindow(5);
		}

		@media only screen and (min-width: $lg-breakpoint) {
		@include calcCardsInWindow(6);
		}

		@media only screen and (min-width: $xl-breakpoint) {
		@include calcCardsInWindow(8);
		}
	}
}
</style>