<template>
  <h1>Movies</h1>
  <p>Movie Content goes here</p>

  <ContentViewerComponent :format="'movie'"/>
</template>

<script>
import ContentViewerComponent from '@/components/ContentViewerComponent.vue';

export default {
  components: { ContentViewerComponent }
}
</script>

<style lang="scss" scoped>

</style>