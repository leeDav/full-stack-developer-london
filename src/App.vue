<template>
  <div id="app">
    <div class="row">
      <div class="small-12">
        <paginate-links
          for="vids"
          :show-step-links="true"
          :classes="{
            'ul': 'pagination__container'
          }"></paginate-links>
      </div>
    </div>

    <div class="row">
      <paginate
        name="vids"
        :list="results"
        :per="6"
        tag="div">
          <div class="small-12 medium-6 large-4 columns" v-for="video in paginated('vids')">
            <video-card :info="video"></video-card>
          </div>
      </paginate>
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
        results: [],
        paginate: ['vids']
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
  @import './src/scss/main';
  @import './src/scss/1-settings/variables';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pagination__container {
    background-color: $grey-light;

    padding: 0;
    text-align: center;

    > li {
      cursor: pointer;
      display: inline-block;
      margin: ms(-1);

      &.active {
        font-weight: $fw-bold;
      }
    }
  }
</style>
