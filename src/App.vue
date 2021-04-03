<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld></HelloWorld>
  <Charts></Charts>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Charts from './components/Charts.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Charts
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
