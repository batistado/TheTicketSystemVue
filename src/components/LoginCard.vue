<template>
    <el-card>
        <div slot="header" class="table-header">
            <h2>User Login</h2>
          </div>
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
import { http } from '../middleware/http';

export default {
  name: 'login-card',
  data() {
      return {
          username: '',
          password: '',
      }
  },
  computed: {
      requestBody() {
          return {
              username: this.username,
              password: this.password,
          }
      }
  },
  methods: {
      login() {
          http.post('/login', this.requestBody).then(response => {
                if (response.data.success) {
                    window.sessionStorage.setItem("tsIsLoggedIn", "Y");
                    this.$store.commit('signIn', this.username);
                    this.$router.push({ name: 'home' });
                }

                this.$message({
                    message: 'Login successful!',
                    type: 'success',
                });

                this.reset();
            }).catch(e => {
                this.$message({
                    message: 'Invalid username or password',
                    type: 'error',
                });
            });
      },

      reset() {
          this.username = '';
          this.password = '';
      }
  },
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
