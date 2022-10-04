<template>
	<div>
		SEARCH RESULTS
	</div>

	<ul class="card-container">
		<InteractiveCardComponent v-for="item in results" :key="item.id"
			:card="item"
		/>
	</ul>
</template>

<script>
import InteractiveCardComponent from './InteractiveCardComponent.vue';
	export default {

    props: {
        results: Array,
    },

    components: { 
		InteractiveCardComponent 
	}
}
</script>

<style lang="scss" scoped>

</style>