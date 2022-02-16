<template lang="pug">
.Detail
  div id= {{id}}
  div videoList= {{videoList}}
  .logo(
    :style="{\
      top: `${logoTop}px`,\
      left: `${logoLeft}px`,\
      width: `${logoWidth}px`,\
      height: `${logoHeight}px`,\
      'background-image': `url(${require('./images/logo_l/' + id + '_logo.png')}`,\
    }"
  )
  .content
    .content__video(
      v-if="videoList"
      :style="{\
        top: `${videoTop}px`,\
        left: `${videoLeft}px`,\
        width: `${videoWidth}px`,\
        height: `${videoHeight}px`,\
        'background-image': `url(${require('./images/' + id + '/videopic.jpg')}`,\
      }"
    )
      .content__video__mask
        template(v-if="videoList['ch']")
          .content__video__mask__button.--ch(
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
        template(v-else)
          //- 只能是只有英文
          .content__video__mask__button2(
            :style="{\
              width: `${playButto2nWidth}px`,\
              height: `${playButto2nWidth}px`,\
            }"
            @click="handlePlayClick('en')"
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

    const logoTop = computed(() => 314 / appHeight.value * window.innerHeight)
    const logoLeft = computed(() => 134 / appWidth.value * window.innerWidth)
    const logoWidth = computed(() => 1024 / appWidth.value * window.innerWidth)
    const logoHeight = computed(() => 1024 / appHeight.value * window.innerHeight)

    const videoTop = computed(() => 1184 / appHeight.value * window.innerHeight)
    const videoLeft = computed(() => 1358 / appWidth.value * window.innerWidth)
    const videoWidth = computed(() => 1133 / appWidth.value * window.innerWidth)
    const videoHeight = computed(() => 630 / appHeight.value * window.innerHeight)

    const playButtonWidth = computed(() => 500 / appWidth.value * window.innerWidth)
    const playButtonHeight = computed(() => 156 / appHeight.value * window.innerHeight)
    const playButtonMargin = computed(() => 48 / appHeight.value * window.innerHeight)

    const playButto2nWidth = computed(() => 242 / appWidth.value * window.innerWidth)

    const backButtonTop = computed(() => 1810 / appHeight.value * window.innerHeight)
    const backButtonLeft = computed(() => 0 / appWidth.value * window.innerWidth)
    const backButtonWidth = computed(() => 537 / appWidth.value * window.innerWidth)
    const backButtonHeight = computed(() => 350 / appHeight.value * window.innerHeight)

    const updateCompanyId = inject('updateCompanyId')
    const heandleBackClick = () => {
      updateCompanyId(null)
    }

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

    return {
      appWidth,
      appHeight,
      logoTop,
      logoLeft,
      logoWidth,
      logoHeight,
      videoTop,
      videoLeft,
      videoWidth,
      videoHeight,
      playButtonWidth,
      playButtonHeight,
      playButtonMargin,
      playButto2nWidth,
      backButtonLeft,
      backButtonTop,
      backButtonWidth,
      backButtonHeight,
      isPlay,
      videoSrc,
      videoList,
      // fn
      handlePlayClick,
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

.logo {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.content__video {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
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

.content__video__mask__button,
.content__video__mask__button2 {
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

.content__video__mask__button2 {
  background-image: url('./images/play.svg');
}

.back-button {
  cursor: pointer;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('./images/back.png');
}
</style>
