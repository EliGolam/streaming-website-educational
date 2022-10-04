<template>
	<header>
		<SearchBar @searchText="searching" />

		<!-- DEBUG TESTING -->
		<p>Test the search in the Header: {{ searchQuery }}</p>
	</header>
</template>

<script>
import SearchBar from '@/components/utilities/SearchBarComponent.vue';


export default {
	name: "Header",

	data() {
		return {
			searchInvervalID: undefined,
			searchInputDelay: 400,

			searchQuery: '',
		}
	},

	methods: {
		searching(inputText) {
			clearInterval(this.searchInvervalID);

			// Small Delay to the Search Emit to avoid stacking too many API calls if the user types fast
			this.searchInvervalID = setInterval(() => {
				this.$emit('search', inputText);
			}, this.searchInputDelay);

			// DEBUG 
			this.searchQuery = inputText;
		}
	},	

	components: { 
		SearchBar 
	}
}
</script>

<style lang="scss" scoped>

</style>