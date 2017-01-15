<template>
  <button class="btn__action" v-on:click="toggleItemInPlaylist">{{ buttonText }}</button>
</template>

<script>
  export default {
    name: 'button-add',
    props: ['videoId'],
    data () {
      return {
        buttonText: 'Add'
      }
    },
    methods: {
      toggleItemInPlaylist: function () {
        // let favourites = JSON.parse(window.localStorage.getItem('favourites')) || []
        // favourites.push(this.videoId)
        // favourites = JSON.stringify(favourites)
        // window.localStorage.setItem('favourites', favourites)
        this.buttonText = (this.buttonText === 'Add') ? 'Remove' : 'Add'
        return this.buttonText
      }
    }
  }
</script>
