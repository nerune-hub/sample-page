<template>
  <TheHeading></TheHeading>
  <TheSidebar></TheSidebar>
</template>

<script>
import TheHeading from './components/TheHeading.vue'
import TheSidebar from './components/TheSidebar.vue'

export default {
  name: 'App',
  components: {
    TheHeading,
    TheSidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* CSS変数で色定義 */
:root {
  --white: white;
  --grey: grey;
}
</style>
