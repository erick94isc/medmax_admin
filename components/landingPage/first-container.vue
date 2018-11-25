<template>
    <div :class="{'principal-container': isPrimary, 'notPrimary': !isPrimary}" :style="{'height': height}">
        <div class='container-image'
             :style="{'height': height, 'background-image': url,'background-position': position}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'first-container',
    props: {
      isPrimary: {
        type: Boolean,
        default: true
      },
      height: {
        type: String,
        default: '100vh'
      },
      url: {
        type: String,
        default: '/images/landingPage/annotations_sm.jpg'
      },
      position: {
        type: String,
        default: '50%'
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~assets/sass/custom';

    .principal-container {
        //background-color: rgba(18, 151, 236, 0.52);
        z-index: 1000;
        height: 100vh;
    }

    .container-image {
        height: 100vh;
        // width: auto;
        position: relative;
        background-repeat: no-repeat;
        z-index: 0;
        background-image: url('/static/images/landing.jpg');
        background-size: cover;
        background-position: center;
    }

    .notPrimary {
        background-color: hsla(210, 8%, 12%, 0.41);
    }


</style>