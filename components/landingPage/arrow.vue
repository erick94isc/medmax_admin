<template>
  <div class="arrow">
    <div class="top-arrow"></div>
    <div class="bottom-arrow"></div>
  </div>
</template>

<style lang="sass" scoped>
@import '~assets/sass/custom'

$arrow-width: 50px
$arrow-height: $arrow-width * 2

.arrow
  position: relative
  *
    width: 0
    height: 0
    border-style: solid
  .top-arrow
    border-width: 0 $arrow-width $arrow-height 0
    border-color: transparent lighten($blue, 5%) transparent transparent
    position: relative
    top: -$arrow-width
    &::before
      width: 0
      height: 0
      border-style: solid
      content: ' '
      border-width: 0 $arrow-width $arrow-width $arrow-width
      border-color: transparent transparent lighten($blue, 5%) transparent
      position: absolute
      top: -$arrow-width
      transform: translateX(-25%)
  .bottom-arrow
    border-width: $arrow-height 0 0 $arrow-width
    border-color: transparent transparent transparent lighten($blue, 10%)
    position: absolute
    bottom: 0
</style>
