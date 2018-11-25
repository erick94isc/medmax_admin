<template>
    <header-card   :title='title' color="#80bfff" fontS="20px" height="60px">
        <div class="about-container-blue">
            <div class="container-text">
               {{text}}
            </div>
        </div>
        <div class="about-container">
            <img :src='img'>
        </div>
    </header-card>
</template>

<script>
  import HeaderCard from '~/components/landingPage/header-card'

  export default {
    name: 'about-card',
    components: {
      HeaderCard
    },
    props:{
        title:{
         type: String,
         default: 'Modulo x'
        },
        img:{
            type: String,
            default: '/images/logo.png'
        },

        text: {
            type: String,
            default: ''
        }
    }
  }
</script>

<style scoped lang="sass">
    @import '~assets/sass/custom'
    .about-container
        height: 400px
        width: auto
        img
            width: 100%
            height: 100%
            background-size: 100% 100%
            background-repeat: no-repeat
            object-fit: cover
            position: relative

    .about-container-blue
        background-color: rgba(18, 151, 236, 0.52)
        z-index: 1
        height: 360px
        width: 100%
        position: absolute
        top: 56%
        left: 50%
        transform: translate(-50%, -50%)

    .container-text
        height: 450px
        position: relative
        width: 75%
        display: inline-block
        text-align: center
        padding-top: 20px
        padding-bottom: 20px
        font-size: .75em !important
        text-align: justify
        p
            color: $white
            font-size: .37em
            text-align: justify


    @media (min-width: 320px)
        .container-text
            p
                font-size: .32em

    @media (min-width: 577px)
        .container-text
            p
                font-size: .27em
        .about-container
            height: 320px
        .about-container-blue
            height: 270px !important
        .container-text
            height: 270px

    @media (min-width: 992px)
        .about-container
            height: 320px
        .about-container-blue
            height: 270px
        .container-text
            height: 270px
            p
                font-size: .34em
</style>