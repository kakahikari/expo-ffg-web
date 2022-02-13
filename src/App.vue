<template lang="pug">
MainMenu
</template>
<script>
import MainMenu from '@/components/MainMenu'
export default {
  name: 'App',
  components: {
    MainMenu,
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
