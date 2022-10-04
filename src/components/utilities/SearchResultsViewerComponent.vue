<template>
	<div>
		SEARCH RESULTS
	</div>

	<ul class="card-container flex-center">
		<InteractiveCardComponent v-for="item in results" :key="item.id"
			:card="item"
			class="card-item"
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