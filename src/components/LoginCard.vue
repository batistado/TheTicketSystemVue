<template>
    <el-card>
        <div class="login-card">
            <el-row>
                <el-input
                placeholder="Enter your username"
                v-model="username"
                clearable>
                </el-input>
            </el-row>
            <el-row>
                <el-input
                placeholder="Enter your password"
                v-model="password"
                show-password>
                </el-input>
            </el-row>
            <div class="login-btn">
                <el-row>
                    <el-button type="primary" round @click="login">Login</el-button>
                </el-row>
            </div>
        </div>
    </el-card>
</template>

<script>
import userData from '@/assets/data/User.json'

export default {
  name: 'login-card',
  data() {
      return {
          username: '',
          password: '',
          userData: userData,
      }
  },
  methods: {
      login() {
          const userIndex = this.userData.findIndex(o => o.id === this.username);

          if (userIndex ===  -1 || this.userData[userIndex].password !== this.password){
              alert('Invalid username or password!');
              this.reset();
              return;
          }

          alert('Log in successful!');
          this.reset();
      },

      reset() {
          this.username = '';
          this.password = '';
      }
  }
}
</script>

<style scoped>
.login-card > * {
    margin-bottom: 5px;
}
.login-btn {
    float: right;
}
</style>
