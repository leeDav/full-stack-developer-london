<template>
  <article class="card">
    <div class="card__bg"></div>
    <div class="card__info">
      <span class="card__info-large">Jane Doe</span>
      <span class="card__info-small ellipses">Lorem ipsum dolor salat. On the wings of an eagle</span>
      <img src="https://i.vimeocdn.com/portrait/9507848_30x30?r=pad" class="card__info-user-thumb" />
    </div>
    <div class="card__actions">
      <button-add videoId="1234"></button-add>
    </div>
  </article>
</template>

<script>
  import ButtonAdd from './ButtonAdd'

  export default {
    name: 'video-card',
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
  // Width of the users thumbnail in the card
  $userThumbWidth: 30px;

  // Defining an animation for some visual interest
  // A simple "rolling" back and forth
  @keyframes keepRollingRollingRolling {
    0%, 100% { transform: rotate(0); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }

  .card {
    &:hover {
      cursor: pointer;

      .card__info-user-thumb {
         -webkit-animation: keepRollingRollingRolling 1s ease 0s infinite normal ;
         animation: keepRollingRollingRolling 1s ease 0s infinite normal ;
         transform-origin: center bottom;
      }
    }
  }

  .card__bg {
    background-color: $grey-light;
    background-image: url('https://i.vimeocdn.com/video/492928158_295x166.jpg?r=pad');
    background-position: center;
    background-size: cover;
    height: ms(13);
  }

  .card__info {
    background-color: $grey-light;
    padding: ms(-13) ms(0);
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

    > span {
      display: block;
    }

    &-large {
      font-size: ms(1);
      font-weight: $fw-bold;
      margin-top: .75em;
    }

    &-small {
      font-size: ms(0);
      font-weight: $fw-light;
    }
  }
</style>
