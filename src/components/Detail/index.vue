<template lang="pug">
.Detail
  div appWidth= {{appWidth}}
  div appHeight= {{appHeight}}
  .back-button(
    :style="{\
      left: `${backButtonLeft}px`,\
      top: `${backButtonTop}px`,\
      width: `${backButtonWidth}px`,\
      height: `${backButtonHeight}px`,\
    }"
    @click="heandleBackClick"
  )
</template>
<script>
import { computed, inject } from 'vue'
export default {
  setup () {
    const appWidth = computed(() => process.env.VUE_APP_WIDTH)
    const appHeight = computed(() => process.env.VUE_APP_HEIGHT)
    const backButtonTop = computed(() => 1810 / appHeight.value * window.innerHeight)
    const backButtonLeft = computed(() => 0 / appWidth.value * window.innerWidth)
    const backButtonWidth = computed(() => 537 / appWidth.value * window.innerWidth)
    const backButtonHeight = computed(() => 350 / appHeight.value * window.innerHeight)

    const updateCompanyId = inject('updateCompanyId')
    const heandleBackClick = () => {
      updateCompanyId(null)
    }

    return {
      appWidth,
      appHeight,
      backButtonLeft,
      backButtonTop,
      backButtonWidth,
      backButtonHeight,
      // fn
      heandleBackClick,
    }
  },
}
</script>
<style lang="scss" scoped>
.Detail {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../../assets/bg2.jpg');
}

.back-button {
  cursor: pointer;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('./images/back.png');
  border: red 1px solid;
}
</style>
