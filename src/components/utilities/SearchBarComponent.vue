<template>
	<input type="text" name="search-movie" id="search-movie"
		v-model="inputSearch"
		@keyup="search()"    
  >
</template>

<script>
export default {
	name: 'SearchBar',

	data() {
		return {
			inputSearch: '',
			searchText: '',
		}
	},

	methods: {
		search() {
			// Guard Statement to avoid creating stream of searches on multiple enter presses
			// The trim() method allows to take into account pressing SpaceBar continuosly
			if (this.searchText === this.inputSearch.trim()) return;

			this.searchText = this.inputSearch.trim(); // Trim method added to keep the output streamlined
			
			this.$emit('searchText', this.searchText); 
		}
	}
}
</script>

<style lang="scss" scoped>

</style>