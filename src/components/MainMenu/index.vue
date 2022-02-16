<template lang="pug">
.MainMenu
  template(v-for="item of COMPANAY_LIST")
    CompanyButton(
      :id="item.id"
      :size="item.size"
      :x="item.x"
      :y="item.y"
    )
</template>
<script>
import CompanyButton from './CompanyButton'
import { COMPANAY_LIST } from '@/configs'

export default {
  components: {
    CompanyButton,
  },

  setup () {
    return {
      COMPANAY_LIST,
    }
  },
}
</script>
<style lang="scss" scoped>
.MainMenu {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../../assets/indexbg.jpg');
}
</style>
