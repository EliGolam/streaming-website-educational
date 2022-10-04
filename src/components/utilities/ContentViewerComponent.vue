<template>
	<div>
		<p>Injection: {{ searchQuery }}</p>
	</div>
</template>

<script>
import { apiData } from '@/assets/data/apiData.js'

export default {
	inject: {
		searchQuery: {
			from: 'search',
			default: '',
		},
	},

	mounted() {
		console.log("TEST DATA - ", apiData.TMDB);
		console.log("KEY:", import.meta.env.PR_APIKEY);
	}
}
</script>

<style lang="scss" scoped>

</style>