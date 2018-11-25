<template>
    <div class="container-card"   >
        <div class="header-title" :style="{'background-color': color,'color':insideColor, 'height': height}">
          <span class="title" :style="{'font-size': fontS}">{{title}}</span>
        </div>
        <div class="center-content">
          <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'header-card',
    props: {
      color: {
        type: String,
        default: '$blue'
      },
      title: {
        type: String,
        default: 'ACERCA DE'
      },
      insideColor: {
        type: String,
        default: '$white'
      },
      height: {
        type: String,
        default: '50px'
      },
      fontS: {
        type: String,
        default: '17px'
      }

    }
  }
</script>

<style scoped  lang="scss">
    @import '~assets/sass/custom';
    .container-card{
     background-color: $white;
     text-align: center;
     font-size: 2em;
     color: $white;
     position: relative;
        .center-content{

        }
     //height: 450px;
        .header-title{
            background-color: $blue;
            .title{
                font-family: Arial, Helvetica, sans-serifs;
                font-size: 17px;
            }
        }
    }

</style>