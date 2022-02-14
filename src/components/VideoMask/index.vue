<template lang="pug">
.VideoMask(v-if="isShow")
  .mask
  .mask-block(@click="handleCloseClick")
  .close-button(
    :style="{\
      width: `${videoWidth}px`,\
      height: `${closeButtonHeight}px`,\
      'margin-bottom': `${closeButtonMargin}px`,\
    }"
  )
  iframe.video(
    :style="{\
      width: `${videoWidth}px`,\
      height: `${videoHeight}px`,\
    }"
    :src="`https://www.youtube.com/embed/${src}?autoplay=1&loop=1&rel=0&controls=0&hd=1&playlist=${src}`"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  )
</template>
<script>
import { computed } from 'vue'
export default {
  props: {
    isShow: Boolean,
    src: String,
  },

  emits: ['closeClick'],

  setup (pross, { emit }) {
    const appWidth = computed(() => process.env.VUE_APP_WIDTH)
    const appHeight = computed(() => process.env.VUE_APP_HEIGHT)

    const videoWidth = computed(() => 2880 / appWidth.value * window.innerWidth)
    const videoHeight = computed(() => 1620 / appHeight.value * window.innerHeight)
    const closeButtonHeight = computed(() => 100 / appHeight.value * window.innerHeight)
    const closeButtonMargin = computed(() => 36 / appHeight.value * window.innerHeight)

    const handleCloseClick = () => {
      emit('closeClick')
    }

    return {
      videoWidth,
      videoHeight,
      closeButtonHeight,
      closeButtonMargin,
      // fn
      handleCloseClick,
    }
  },
}
</script>
<style lang="scss" scoped>
.VideoMask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background-color: rgba(#000, .7);
}

.mask-block {
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
}

.video {
  position: relative;
  z-index: 10;
}

.close-button {
  position: relative;
  z-index: 10;
  height: 100px;
  background-image: url('./images/XXX.svg');
  background-position: right center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
