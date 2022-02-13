<template lang="pug">
.MainMenu
  template(v-for="item of companyList")
    CompanyButton(
      :size="item.size"
      :x="item.x"
      :y="item.y"
    )
</template>
<script>
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

    return {
      companyList,
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
