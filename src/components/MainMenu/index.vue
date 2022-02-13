<template lang="pug">
.MainMenu
  template(v-for="item of companyList")
    CompanyButton(
      :size="item.size"
      :x="item.x"
      :y="item.y"
      :isBreathing="isBreathing"
    )
</template>
<script>
import { ref } from 'vue'
import CompanyButton from './CompanyButton'

export default {
  components: {
    CompanyButton,
  },

  setup () {
    const companyList = [
      { size: 's', x: 10, y: 10 },
      { size: 'm', x: 200, y: 200 },
      { size: 'l', x: 300, y: 300 },
    ]
    const isBreathing = ref(false)
    const breathingControl = () => {
      setTimeout(() => {
        isBreathing.value = !isBreathing.value
        breathingControl()
        console.log(isBreathing.value)
      }, 2000)
    }
    breathingControl()

    return {
      companyList,
      isBreathing,
    }
  },
}
</script>
<style lang="scss" scoped>
.MainMenu {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url('../../assets/indexbg.jpg');
  border: red 1px solid;
}
</style>
