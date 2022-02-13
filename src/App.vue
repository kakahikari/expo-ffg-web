<template lang="pug">
MainMenu(v-if="companyId === null")
Detail(v-else)
</template>
<script>
import { ref, provide } from 'vue'
import MainMenu from '@/components/MainMenu'
import Detail from '@/components/Detail'

export default {
  components: {
    MainMenu,
    Detail,
  },
  setup () {
    const companyId = ref(null)
    const updateCompanyId = (id) => {
      companyId.value = id
    }
    provide('updateCompanyId', updateCompanyId)

    return {
      companyId,
    }
  },
}
</script>
<style lang="scss">
$apple: red;

#app {
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
