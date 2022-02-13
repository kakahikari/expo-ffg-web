<template lang="pug">
.CompanyButton(
  :style="{\
    top: `${y}px`,\
    left: `${x}px`,\
    width: `${realSize}px`,\
    height: `${realSize}px`,\
  }"
)
  .bg(
    :class="{\
      'breathing': isBreathing,\
    }"
  )
  .company-logo {{y}} / {{realSize}}
    div {{isBreathing}}
</template>
<script>
import { computed } from 'vue'

export default {
  props: {
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
    isBreathing: {
      type: Boolean,
      default: () => false,
    },
  },
  setup (props) {
    const appWitdh = computed(() => process.env.VUE_APP_WIDTH)
    const realSize = computed(() => {
      switch (props.size) {
        case 'l':
          return 768 / appWitdh.value * window.innerWidth
        case 'm':
          return 370 / appWitdh.value * window.innerWidth
        case 's':
        default:
          return 270 / appWitdh.value * window.innerWidth
      }
    })
    return {
      realSize,
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
  z-index: 3;
}

.bg {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  // background: radial-gradient(50% 50% at 50% 50%, #adf0ff 78.65%, rgba(172, 240, 255, 0) 100%);
  mix-blend-mode: color-dodge;
  opacity: .7;
  // transition: all .6s ease-in-out;
  // animation-name: breathing;
  // animation-duration: 3s;
  // animation-iteration-count: infinite;
  // animation-direction: alternate;

  &.breathing {
    background: radial-gradient(50% 50% at 50% 50%, #ddf9ff 83.85%, rgba(172, 240, 255, 0) 100%);
    mix-blend-mode: color-dodge;
    opacity: .9;
  }

  // @keyframes breathing {
  //   from {
  //     background: radial-gradient(50% 50% at 50% 50%, #adf0ff 78.65%, rgba(172, 240, 255, 0) 100%);
  //     // mix-blend-mode: color-dodge;
  //     // opacity: .7;
  //   }

  //   to {
  //     background: radial-gradient(50% 50% at 50% 50%, #ddf9ff 83.85%, rgba(172, 240, 255, 0) 100%);
  //     // mix-blend-mode: color-dodge;
  //     // opacity: .9;
  //   }
  // }
}
</style>
