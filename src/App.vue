<template lang="pug">
//- span companyId: {{companyId}}
MainMenu
</template>
<script>
import { ref, provide } from 'vue'
import MainMenu from '@/components/MainMenu'

export default {
  components: {
    MainMenu,
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
  color: #2c3e50;
  // background-color: ;
}
</style>
