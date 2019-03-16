<template>
  <div id="app">
    <Login/>
    <Home/>
  </div>
</template>

<script>
import Login from './views/Login.vue'
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    Login,
    Home
  }
}
</script>

<style>
</style>
