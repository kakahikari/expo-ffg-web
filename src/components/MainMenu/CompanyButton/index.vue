<template lang="pug">
.CompanyButton(
  :style="{\
    top: `${realTop}px`,\
    left: `${realLeft}px`,\
    width: `${realSize}px`,\
    height: `${realSize}px`,\
  }"
  @click="handleClick"
)
  .bg
  .company-logo(
    :style="{\
      'background-image': `url(${require('./images/' + id + '.png')}`,\
      width: `${realSize}px`,\
      height: `${realSize}px`,\
    }"
  )
</template>
<script>
import { computed, inject } from 'vue'

export default {
  props: {
    id: String,
    size: {
      type: String,
      default: () => '',
    },
    x: {
      type: Number,
      default: () => 0,
    },
    y: {
      type: Number,
      default: () => 0,
    },
  },
  setup (props) {
    const appWidth = computed(() => process.env.VUE_APP_WIDTH)
    const appHeight = computed(() => process.env.VUE_APP_HEIGHT)
    const realSize = computed(() => {
      switch (props.size) {
        case 'l':
          return 768 / appWidth.value * window.innerWidth
        case 'm':
          return 370 / appWidth.value * window.innerWidth
        case 's':
        default:
          return 270 / appWidth.value * window.innerWidth
      }
    })
    const realTop = computed(() => {
      return props.y / appHeight.value * window.innerHeight
    })
    const realLeft = computed(() => {
      return props.x / appWidth.value * window.innerWidth
    })

    const updateCompanyId = inject('updateCompanyId')
    const handleClick = () => {
      updateCompanyId(props.id)
    }

    return {
      realSize,
      realTop,
      realLeft,
      // fn
      handleClick,
    }
  },
}
</script>
<style lang="scss" scoped>
.CompanyButton {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
}

.company-logo {
  z-index: 4;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.bg {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #adf0ff 78.65%, rgba(255, 255, 255, 0) 100%);
  opacity: .7;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(50% 50% at 50% 50%, #fff 83.85%, rgba(255, 255, 255, 0) 100%);
    animation-name: breathing;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes breathing {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
}
</style>
