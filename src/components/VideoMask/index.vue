<template lang="pug">
.VideoMask(v-if="isShow")
  .mask
  .mask-block(@click="handleCloseClick")
  .close-button(
    :style="{\
      width: `${videoWidth}px`,\
    }"
  )
  iframe.video(
    ref="video"
    :style="{\
      width: `${videoWidth}px`,\
      height: `${videoHeight}px`,\
    }"
    :src="`https://www.youtube.com/embed/${src}?enablejsapi=1&autoplay=1&loop=1&rel=0&controls=0&hd=1&playlist=${src}`"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  )
  .pause-button(
    :style="{\
      width: `${videoWidth}px`,\
    }"
    :class="{\
      '--play': !videoIsPlay,\
    }"
    @click="handlePauseClick"
  )
</template>
<script>
import { ref, computed } from 'vue'
export default {
  props: {
    isShow: Boolean,
    src: String,
  },

  emits: ['closeClick'],

  setup (props, { emit }) {
    const appWidth = computed(() => process.env.VUE_APP_WIDTH)
    const appHeight = computed(() => process.env.VUE_APP_HEIGHT)

    const video = ref(null)
    const videoIsPlay = ref(true)

    const videoWidth = computed(() => 2880 / appWidth.value * window.innerWidth)
    const videoHeight = computed(() => 1620 / appHeight.value * window.innerHeight)

    const handleCloseClick = () => {
      emit('closeClick')
    }

    const handlePauseClick = () => {
      if (videoIsPlay.value) video.value.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
      else video.value.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
      videoIsPlay.value = !videoIsPlay.value
    }

    return {
      videoIsPlay,
      video,
      videoWidth,
      videoHeight,
      // fn
      handleCloseClick,
      handlePauseClick,
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
  z-index: 9999;
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

.close-button,
.pause-button {
  cursor: pointer;
  position: relative;
  z-index: 10;
  background-image: url('./images/XXX.svg');
  background-position: right center;
  background-repeat: no-repeat;
  background-size: contain;
}

.close-button {
  margin-bottom: 18px;
  width: 30px;
  height: 30px;
  opacity: .7;
}

.pause-button {
  z-index: 12;
  margin-top: 18px;
  width: 50px;
  height: 50px;
  background-image: url('./images/pause.png');
  background-position: center;

  &.--play {
    background-image: url('./images/play.png');
  }
}
</style>
