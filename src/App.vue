<template>
	<section>
		<h1>Replica of a Movie Sharing Website</h1>
		<p>By Elias Mahfuzul Golam</p>
		<p>Project for Boolean S.r.l.</p>
	</section>

	<Header @search="provideNewSearch" />

	<nav>
		<RouterLink to="/">Home</RouterLink>

		<RouterLink v-for="format in FORMATS" :key="format.name"
			:to="format.path">
			{{ format.name }}
		</RouterLink>
	</nav>

	<RouterView />
</template>

<script>
import Header from './components/Header.vue';
import { computed } from 'vue';

export default {
	name: "App",

	data() {
		return {
			FORMATS: [
				{
					name: 'Movies',
					path: '/movies',
				},
				{
					name: 'TV Shows',
					path: '/tvshows',
				}
			],

			search: ""
		}
	},

	provide() {
		return {
			search: computed(() => this.search),
		}
	},

	methods: {
		provideNewSearch(searchText) {
			if (this.search === searchText) return;
			this.search = searchText;
		}
	},

	components: { 
		Header 
	}
}
</script>

<style lang="scss" scoped>

</style>