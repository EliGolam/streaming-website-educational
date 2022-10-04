<template>
	<div>
		EXPLORE!!
	</div>

	<ul class="card-container flex-center" v-for="key in exploreKeys">
		<h3>{{key}}</h3>
		<InteractiveCardComponent v-for="item in explore[key]" :key="item.id"
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
		flex-wrap: wrap;
		  
	  
		// FLEX items
		@mixin calcCardsPerRow($cardsPerRow) {
			width: calc(100% / $cardsPerRow - $c-gap);
		}
	
		.card-item {
			@include calcCardsPerRow(2);
	
			@media only screen and (min-width: $sm-breakpoint) {
				@include calcCardsPerRow(3);
			}
	
			@media only screen and (min-width: $md-breakpoint) {
				@include calcCardsPerRow(4);
			}
	
			@media only screen and (min-width: $lg-breakpoint) {
				@include calcCardsPerRow(6);
			}
		}
	}
	</style>