<template>
	<div>
		<p v-show="activeSearch">Results Found for: {{ newSearchQuery }}</p>
	</div>

    <div class="explore-page" v-show="!activeSearch" >
	    <ExploreViewerComponent :format="format" />
    </div>

    <div class="search-page" v-show="activeSearch">
	    <SearchResultsViewerComponent :results="contentArray"/>
    </div>
</template>

<script>
import ExploreViewerComponent from '@/components/utilities/ExploreViewerComponent.vue';
import SearchResultsViewerComponent from '@/components/utilities/SearchResultsViewerComponent.vue';

import { apiData } from '@/assets/data/apiData.js'
import axios from 'axios';

export default {
    props: {
        format: String,
    },
    data() {
        return {
            tmdbAPI: apiData.TMDB,
            activeSearch: false,
            contentArray: [],
        };
    },
    inject: {
        searchText: {
            from: "search",
            default: "",
        },
    },
    computed: {
        newSearchQuery() {
            console.log("New Search", this.searchText);
            this.activeSearch = this.searchText ? true : false;
            if (this.activeSearch) {
                console.log("SEARCHING...");
                this.searchDatabase(this.searchText);
            }
            return this.searchText;
        },
    },
    methods: {
        searchDatabase(query) {
            axios
                .get(this.getQuery(query))
                .then(response => {
                this.processData(response);
                console.log("Search Results", this.contentArray);
            })
                .catch(error => {
                console.warn("Error Found while searching:", error);
            });
        },

        getQuery(query) {
            const { base_url, search_query, search } = this.tmdbAPI;
            const key = import.meta.env.PR_APIKEY;
            return base_url + search + this.format + '?' + key + search_query + query.toLowerCase();
        },

        processData({ status, data }) {
            if (status !== 200)
                return; // Guard Statement
            this.contentArray = data.results;
            // Query Format:
            /*
            data:
            {
              "page": Number,
              "results": Array of Objects (movie/tvshows),
              "total_pages": Number,
              "total_results": Number
            }
          */
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
    },

    components: { 
			ExploreViewerComponent, 
			SearchResultsViewerComponent 
		}
}
</script>

<style lang="scss" scoped>

</style>