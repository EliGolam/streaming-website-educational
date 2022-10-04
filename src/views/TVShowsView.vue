<template>
    <h1>TV Shows</h1>
    <p>Show Content goes here</p>

    <ContentViewerComponent :format="'tvshows'" />
  </template>
  
  <script>
import ContentViewerComponent from '../components/ContentViewerComponent.vue';
    export default {
    components: { ContentViewerComponent }
}
  </script>
  
  <style lang="scss" scoped>
  
  </style>