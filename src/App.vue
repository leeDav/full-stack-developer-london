<template>
  <div id="app">
    <div class="row">
      <div class="small-12 medium-6 large-4 columns" v-for="video in results">
        <video-card :info="video"></video-card>
      </div>
    </div>
  </div>
</template>

<script>
  // Third-party imports
  import axios from 'axios'
  // Component imports
  import VideoCard from './components/VideoCard'

  export default {
    name: 'app',
    components: {
      VideoCard
    },
    data () {
      return {
        API: './static/data.json',
        results: null
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData: function () {
        let self = this
        return axios.get(this.API)
          .then(function (response) {
            self.results = response.data.data
          })
          .catch(function (error) {
            // TODO: Better, user friendlier, error handling
            self.results = new Error(error)
          })
      }
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
