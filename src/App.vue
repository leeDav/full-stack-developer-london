<template>
  <div id="app">
    <div class="row">
      <div class="small-12 medium-6 large-4 columns">
        <video-card></video-card>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from './components/VideoCard'

export default {
  name: 'app',
  components: {
    VideoCard
  }
}
</script>

<style lang="scss">
  @import "./src/scss/main";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
