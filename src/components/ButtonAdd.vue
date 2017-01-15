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
        window.localStorage.setItem('video', this.videoId)
        this.buttonText = (this.buttonText === 'Add') ? 'Remove' : 'Add'
        return this.buttonText
      }
    }
  }
</script>
