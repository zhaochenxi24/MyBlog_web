<template>

  <body id="login-page">
    <el-form class="login-container"
             label-position="left"
             label-width="0px">
      <h3 class="login_title">logo</h3>
      <el-form-item>
        <el-input type="text"
                  v-model="loginForm.userAccount"
                  auto-complete="off"
                  placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password"
                  v-model="loginForm.userPwd"
                  auto-complete="off"
                  placeholder="密码"></el-input>
      </el-form-item>
      <div class="down-btn">
        <el-checkbox v-model="loginForm.rememberMe"
                     label="记住我"></el-checkbox>
        <a href=""
           class="right-btn">忘记密码？</a>
      </div>
      <el-form-item style="width: 100%">
        <el-button type="primary"
                   style="width: 100%;  border: none ;margin-top:20px;"
                   @click="userLogin()">登录</el-button>
      </el-form-item>
      <div class="register">
        还没有账号？<a href="http://localhost/user/register">点击注册</a>
      </div>
    </el-form>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        userAccount: '',
        userPwd: ''
        // rememberMe: ''
      },
      responseResult: []
    }
  },
  methods: {
    userLogin () {
      this.$axios
        .post('/user/login', {
          userAccount: this.loginForm.userAccount,
          userPwd: this.loginForm.userPwd
          // rememberMe: this.loginForm.rememberMe
        })
        .then(successResponse => {
          if (successResponse.data.errCode === 200) {
            this.$router.replace({ path: '/user/home' })
          } else if (successResponse.data.errCode === 401) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'warning'
            })
          } else if (successResponse.data.errCode === 402) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'warning'
            })
          } else if (successResponse.data.errCode === 403) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'error'
            })
          } else if (successResponse.data.errCode === 400) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'error'
            })
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped>
#login-page {
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
a {
  text-decoration: none;
}
a:hover {
  color: rgb(235, 14, 169);
  font: bolder;
}
.down-btn .right-btn {
  float: right;
}
.register {
  left: 25%;
  position: relative;
}
</style>
