<template lang="pug">
.Detail00
  .content(
    :style="{\
      top: `${contentTop}px`,\
      left: `${contentLeft}px`,\
      width: `${contentWidth}px`,\
    }"
  )
    .content__video
      img.content__video__img(
        :src="require('./images/videopic.jpg')"
      )
      .content__video__mask
        .content__video__mask__button.--ch(
          v-if="videoList['ch']"
          :style="{\
            width: `${playButtonWidth}px`,\
            height: `${playButtonHeight}px`,\
            'margin-bottom': videoList['en'] ? `${playButtonMargin}px` : 0,\
          }"
          @click="handlePlayClick('ch')"
        )
        .content__video__mask__button.--en(
          v-if="videoList['en']"
          :style="{\
            width: `${playButtonWidth}px`,\
            height: `${playButtonHeight}px`,\
          }"
          @click="handlePlayClick('en')"
        )
    .content__image-set(
      :style="{\
          'margin-top': `${imageSetMargin}px`,\
        }"
    )
      .image.--p1(
        :style="{\
          height: `${imageSetHight}px`,\
        }"
      )
      .image.--p2(
        :style="{\
          height: `${imageSetHight}px`,\
        }"
      )
      .image.--p3(
        :style="{\
          height: `${imageSetHight}px`,\
        }"
      )
      .image.--p4(
        :style="{\
          height: `${imageSetHight}px`,\
        }"
      )
  .back-button(
    :style="{\
      top: `${backButtonTop}px`,\
      left: `${backButtonLeft}px`,\
      width: `${backButtonWidth}px`,\
      height: `${backButtonHeight}px`,\
    }"
    @click="heandleBackClick"
  )
VideoMask(
  :isShow="isPlay"
  :src="videoSrc"
  @closeClick="handlePlayClick"
)
</template>
<script>
import { ref, computed, inject } from 'vue'
import VideoMask from '@/components/VideoMask'
import { COMPANAY_LIST } from '@/configs'

export default {
  props: {
    id: String,
  },

  components: {
    VideoMask,
  },

  setup (props) {
    const appWidth = computed(() => process.env.VUE_APP_WIDTH)
    const appHeight = computed(() => process.env.VUE_APP_HEIGHT)

    const contentTop = computed(() => 518 / appHeight.value * window.innerHeight)
    const contentLeft = computed(() => 1829 / appWidth.value * window.innerWidth)
    const contentWidth = computed(() => 1835 / appWidth.value * window.innerWidth)

    const playButtonWidth = computed(() => 500 / appWidth.value * window.innerWidth)
    const playButtonHeight = computed(() => 156 / appHeight.value * window.innerHeight)
    const playButtonMargin = computed(() => 48 / appHeight.value * window.innerHeight)

    const isPlay = ref(false)
    const videoSrc = ref(null)
    const videoList = computed(() => COMPANAY_LIST.find(item => item.id === props.id).videoList)
    const handlePlayClick = (lang) => {
      if (isPlay.value) {
        isPlay.value = false
        return
      }
      videoSrc.value = videoList.value[lang]
      isPlay.value = true
    }

    const imageSetMargin = computed(() => 117 / appHeight.value * window.innerHeight)
    const imageSetHight = computed(() => 284 / appHeight.value * window.innerHeight)

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
      contentTop,
      contentLeft,
      contentWidth,
      playButtonWidth,
      playButtonHeight,
      playButtonMargin,
      isPlay,
      videoSrc,
      videoList,
      imageSetMargin,
      imageSetHight,
      backButtonLeft,
      backButtonTop,
      backButtonWidth,
      backButtonHeight,
      // fn
      handlePlayClick,
      heandleBackClick,
    }
  },
}
</script>
<style lang="scss" scoped>
.Detail00 {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../../assets/bg1.jpg');
}

.content {
  position: absolute;
  display: flex;
  flex-direction: column;
}

.content__video {
  position: relative;
  display: block;
  width: 100%;
}

.content__video__img {
  width: 100%;
}

.content__video__mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content__video__mask__button {
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;

  &.--ch {
    background-origin: center;
    background-image: url('./images/playch.svg');
  }

  &.--en {
    background-origin: center;
    background-image: url('./images/playen.svg');
  }
}

.content__image-set {
  display: flex;
  justify-content: space-between;

  .image {
    width: 22%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    &.--p1 {
      background-image: url('./images/p1.jpg');
    }

    &.--p2 {
      background-image: url('./images/p2.jpg');
    }

    &.--p3 {
      background-image: url('./images/p3.jpg');
    }

    &.--p4 {
      background-image: url('./images/p4.jpg');
    }
  }
}

.back-button {
  cursor: pointer;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('./images/back.png');
}
</style>
