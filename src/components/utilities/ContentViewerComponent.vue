<template>
	<div>
		<p>Injection: {{ searchQuery }}</p>
	</div>
</template>

<script>
export default {
	inject: {
		searchQuery: {
			from: 'search',
			default: '',
		}
	}
}
</script>

<style lang="scss" scoped>

</style>