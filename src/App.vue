<template>
  <TheHeading></TheHeading>
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeading from './components/TheHeading.vue'

export default {
  name: 'App',
  components: {
    TheHeading,
    HelloWorld
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
</style>
