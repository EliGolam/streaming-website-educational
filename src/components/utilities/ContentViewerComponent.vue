<template>
	<div>
		<p v-show="activeSearch">Results Found for: {{ searchQuery }}</p>
	</div>
</template>

<script>
import { apiData } from '@/assets/data/apiData.js'
import axios from 'axios';

export default {
	data() {
		return {
			tmdbAPI: apiData.TMDB, // Proxy Handler

			activeSearch: false,
		}
	},

	inject: {
		searchText: {
			from: 'search',
			default: '',
		},
	},

	computed: {
		searchQuery() {
			console.log("New Search", this.searchText);

			this.activeSearch = this.searchText ? true : false;

			return this.searchText;
		}
	},

	mounted() {
		/* DEBUG */
		/*
		console.log("TEST DATA - ", this.tmdbAPI);
		console.log("KEY:", import.meta.env.PR_APIKEY);

		const {base_url, trending_movies} = this.tmdbAPI;

		axios
			.get(base_url + trending_movies + import.meta.env.PR_APIKEY)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.warn("Error Found while searching:", error);
			})
		*/
	}
}
</script>

<style lang="scss" scoped>

</style>