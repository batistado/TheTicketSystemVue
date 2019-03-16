<template>
    <div class="login">
        <div class="login-card">
            <LoginCard/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import LoginCard from '@/components/LoginCard.vue'

export default {
  name: 'login',
  components: {
    LoginCard
  }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
.login-card {
  margin: auto;
  width: 30%;
  padding: 10px;
}
</style>
