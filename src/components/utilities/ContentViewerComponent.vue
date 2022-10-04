<template>
	<div>
		<p v-show="activeSearch">Results Found for: {{ newSearchQuery }}</p>
	</div>
</template>

<script>
import { apiData } from '@/assets/data/apiData.js'
import axios from 'axios';

export default {
	props: {
		format: String,
	},
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
		newSearchQuery() {
			console.log("New Search", this.searchText);

			this.activeSearch = this.searchText ? true : false;

			if(this.activeSearch) {
				console.log("SEARCHING...");
				this.search(this.searchText);
			}

			return this.searchText;
		},

	},

	methods: {
		search(query) {
			axios
				.get(this.getQuery(query))
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.warn("Error Found while searching:", error);
				})
		},

		getQuery(query) {
			const {base_url, search_query, search_movie, search_tv} = this.tmdbAPI;

			const key = import.meta.env.PR_APIKEY;
			const search = this.format === 'movies' ? search_movie : search_tv;

			return base_url + search + key + search_query + query.toLowerCase();
		},
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