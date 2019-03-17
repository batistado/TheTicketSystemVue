<template>
  <div id="app">
    <NavBar/>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.router {
  background-image: url('~@/assets/ticket.jpg');
  background-repeat: no-repeat; 
  background-size: cover; 
  background-position: center; 
  height: 100vh;
}
</style>

