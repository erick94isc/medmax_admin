<template>

    <div class="full-width-container">
        <first-container :isPrimary="true" url="url('/images/background2.jpg')">
         <section class="logo-container">
            <img src="/images/logo.png" alt="">
            <h1 class="slogan">El mejor administrador de tus citas medicas.</h1>
          </section>
        </first-container>
        <div class="row no-gutters">
            <div class="col-sm-4">    
                  
                <div class="position-register">
                 <about-card :title="'MODULO PACIENTE'" :img="'/images/app.jpg'" :text='txtPaciente'>
             
                  
                   </about-card>
                </div>
            </div>
            <div class="col-sm-4">
                <about-card :title="'MODULO ADMINISTRADOR'" :img="'/images/admin.jpeg'" :text='txtAdmin'></about-card>
            </div>
             <div class="col-sm-4">
                <about-card :title="'MODULO DOCTOR'"  :img="'/images/doctor.jpg'" :text='txtDoctor'></about-card>
            </div>
        </div>
         <footer/>
    </div>
   
</template>

<script>

  import Arrow from '~/components/landingPage/arrow'
  import FirstContainer from '~/components/landingPage/first-container'
  import HeaderCard from '~/components/landingPage/header-card'
  import AboutCard from '~/components/landingPage/about-card'
  import Footer from '~/components/landingPage/footer'
  export default {
    layout: 'default',
    components: {
      AboutCard,
      HeaderCard,
      FirstContainer,
      Arrow,
      Footer
    },
     data(){
         return{
             txtPaciente: 'El modulo paciente, se maneja  a traves de una aplicacion movil, por la cual se podran consultar los doctores disponibles, asi como agendar citas  en la fecha y hora deseada.',
             txtAdmin: 'El modulo administador permitira registrar a los doctores, trabajadores de la clinica,asi como pacientes y citas. Teniendo el control de todo estos. A traves de esta pagina ingresando con sus datos correspondientes.',
             txtDoctor: 'El modulo de doctor, permitira agendar citas a los pacientes consultados a traves de esta pagina web ingresando sus datos correspondientes.'
          }         
     }
  }
</script>

<style lang="sass" scoped>
    @import '~assets/sass/custom'
    @import url('https://fonts.googleapis.com/css?family=Lato|Montserrat');  


    .nav
        color: $white !important

    .logo-container
      text-align: center
      color: $blue
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 10px
      img
        width: 40%
        margin: 0 auto
        display: block
        padding: 15px 0 10px
      

    .full-width-container
        & > section
            padding: 0 30px
            position: relative
            @media (min-width: 768px)
                padding: 0 15px
  
    .welcome-section
        min-height: 240px
        color: $white
        background-color: $blue
        font-size: 1em
        position: relative
        @media (min-width: 575px)
            font-size: 1.2em
        .content
            position: relative
            z-index: 1
            .logo-container
                text-align: center
                color: $blue
                margin-bottom: 10px
                img
                    width: 40%
                    margin: 0 auto
                    display: block
                    padding: 15px 0 10px
                    @media (min-width: 575px)
                        width: 20%
                .slogan
                    font-size: 0.8em
                    font-weight: 100
                    color: $blue !important
                    @media (min-width: 575px)
                        font-size: 1em
</style>

<style lang="sass">
    @import '~assets/sass/custom'

    @media (min-width: 577px)
     .container-card
         top: 0px !important
     .position-form
        margin-top: 0px!important
     .position-register
         margin-top: 0px !important
         height: auto !important
         .header-title
             height: 60px!important
     .card-go-app
         .container-image
             height: 450px !important

     @media (min-width: 1200px)
         .card-go-app
             .container-image
                 background-position: initial !important

    .welcome-section
        .request-demo
            .title
                color: $white !important
        .arrow
            position: absolute !important
            bottom: 0
            z-index: 0
            left: 10%
        .banner
            @media (min-width: 768px)
                width: 60%
                margin: auto
            @media (min-width: 1024px)
                width: 50%
            .title
                @media (min-width: 991px)
                    font-size: 1.6em
                    line-height: 1.5em
                text-align: center
                color: lighten($blue, 35%)
                font-size: 1em
                line-height: 1.7em
                margin-bottom: 0
                strong
                    color: $white
                    font-size: 1.25em

    .position-prhase
        position: absolute
        top: 325px
        color: $white
        left: 16px
        font-family: Arial, Helvetica, sans-serifs;
        font-size: 14px

    .position-button
        position: absolute
        bottom: 50px
        left: 25px
        color: $white
        font-family: Arial, Helvetica, sans-serifs;
        .btn
            font-size: 1.2em
            color: white

        .btn-primary
            color: $white
            background-color: purple

    .position-button-blog
        position: absolute
        bottom: 50px
        left: 25px
        color: $white
        font-family: Arial, Helvetica, sans-serifs;
        a
            color: $white
        .btn
            font-size: 1.2em
            color: white

        .btn-primary
            color: $white
            background-color: $blue


    .position-prhase-blog
        position: absolute
        top: 50px
        color: #133c57
        left: 30px
        font-family: Arial, Helvetica, sans-serifs;
        letter-spacing: 5px
        text-align: left
        font-size: 2.5em

    .position-register
        margin-bottom: 10px
        height: 430px
        width: auto
        position: relative

    .position-form
        position: relative
        color: $white
        font-family: Verdana, Geneva, sans-serif
        top: 50%
        transform: translate(-50%, -50%)
        left: 50%
        width: 80vw

    .container-image
        height: 300px
        width: auto

        img
            width: 100%
            height: 100%
            background-size: 100% 100%
            background-repeat: no-repeat
            object-fit: cover
            z-index: -1
            position: relative


</style>

