<template>
	<section>
		<h1>Replica of a Movie Sharing Website</h1>
		<p>By Elias Mahfuzul Golam</p>
		<p>Project for Boolean S.r.l.</p>

    <v-btn variant="tonal">
      Button
    </v-btn>

    <v-row justify="center">
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            class="ma-2"
            v-bind="props"
          >
            Slide X Transition
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            link
          >
            <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  
      <div class="mx-6 hidden-sm-and-down"></div>
  
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            color="secondary"
            class="ma-2"
            v-bind="props"
          >
            Scroll Y Transition
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            link
          >
            <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
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