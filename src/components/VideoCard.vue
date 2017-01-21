<template>
  <article class="card">
    <div class="card__bg" v-bind:style="{ 'background-image': 'url(' + getImageBySize(info.pictures.sizes, 568, 170) + ')' }"></div>
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
        <img :src="getImageBySize(info.user.pictures.sizes, 30, 30)" alt="User thumbnail" class="card__info-user-thumb" />
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
    },
    methods: {
      /*  Function to get a large enough image to display whilst being the
       *  smallest in file size and resolution. The image objects
       *  MUST contain "width", "height", and "link" properties
       *
       *  @param {images} array   - Array of objects containing images
       *  @param {minWidth} int   - Minimum width of the image to find
       *  @param {minHeight} int  - Minimum height of the image to find
       *  @returns {String}       - The URL to the image
      */
      getImageBySize: (images, minWidth, minHeight) => {
        for (let i = 0; i < images.length; i++) {
          if ((images[i].width >= minWidth) && (images[i].height >= minHeight)) {
            return images[i].link
          }
          // If we're at the end of the array and _still_ haven't
          // found a decent sized image, return the last one
          if (i === (images.length - 1)) {
            return images[i].link
          }
        }
      }
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
    margin-bottom: ms(3);

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
    padding: ms(-13) ms(0);
    position: relative;
    text-align: center;

    &-user-thumb {
      // Position the thumb in the middle
      // (width divided by 2, offset by 50% width)
      border-radius: 50%;
      left: calc(50% - (#{$userThumbWidth} / 2));
      position: absolute;
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
