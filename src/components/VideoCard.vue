<template>
  <article class="card">
    <div class="card__bg" v-bind:style="{ 'background-image': 'url(' + info.pictures.sizes[2].link + ')' }"></div>
    <div class="card__info">
      <h2 class="card__info-large ellipses">
        <a :href="info.user.link" target="_blank">{{ info.user.name }}</a>
      </h2>
      <h3 class="card__info-small ellipses">
        <a :href="info.user.link" target="_blank">
          {{ info.name }}
        </a>
      </h3>
      <a :href="info.user.link" target="_blank">
        <img :src="info.user.pictures.sizes[0].link" alt="User thumbnail" class="card__info-user-thumb" />
      </a>
    </div>
    <div class="card__actions">
      <button-add videoId="info.resource_key"></button-add>
    </div>
  </article>
</template>

<script>
  import ButtonAdd from './ButtonAdd'

  export default {
    name: 'video-card',
    props: ['info'],
    components: {
      'button-add': ButtonAdd
    }
  }
</script>

<style lang="scss" scoped>
  @import './src/scss/1-settings/variables';
  // Modular scale is an awesome way to maintain vertical rhythm
  // Variables defined in `variables.scss` file
  @import '~modularscale-sass/stylesheets/modular-scale';

  // Compondent-specific vars
  $userThumbWidth: 30px;  // Width of the users thumbnail in the card

  // Defining an animation for some visual interest
  // A simple "rolling" back and forth
  @keyframes keepRollingRollingRolling {
    0%, 100% { transform: rotate(0); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }

  .card {
    &:hover {
      .card__info-user-thumb {
         -webkit-animation: keepRollingRollingRolling 1s ease 0s infinite normal ;
         animation: keepRollingRollingRolling 1s ease 0s infinite normal ;
         transform-origin: center bottom;
      }
    }
  }

  .card__bg {
    background-color: $grey-light;
    background-position: center;
    background-size: cover;
    height: ms(13);
  }

  .card__info {
    background-color: $grey-light;
    padding: ms(-13) 0;
    position: relative;
    text-align: center;

    &-user-thumb {
      border-radius: 50%;
      position: absolute;
      // Position the thumb in the middle
      // (width divided by 2, offset by 50% width)
      left: calc(50% - (#{$userThumbWidth} / 2));
      top: -15px;
      width: $userThumbWidth;
    }

    &-large {
      font-size: ms(1);
      font-weight: $fw-bold;
      margin: ms(-2) 0 0;
    }

    &-small {
      font-size: ms(0);
      font-weight: $fw-light;
      margin: 0 0 ms(-2);
    }
  }
</style>
