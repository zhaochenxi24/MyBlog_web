<template>
  <el-form ref="form"
           :model="form"
           label-width="80px"
           class="register-container">
    <h3 class="register-log">logo</h3>
    <el-form-item label="昵称:"
                  required>
      <el-input v-model="form.name"
                clearable></el-input>
    </el-form-item>
    <el-form-item label="性别:">
      <el-radio-group v-model="form.sex">
        <el-radio label="1">男</el-radio>
        <el-radio label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱:"
                  required>
      <el-input v-model="form.email"
                clearable></el-input>
    </el-form-item>
    <el-form-item label="手机号:"
                  required>
      <el-input v-model="form.phoneNum"
                maxlength="11"
                show-word-limit
                clearable></el-input>
    </el-form-item>
    <el-form-item label="密码:"
                  required>
      <el-input v-model="form.userPwd"
                show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码"
                  required>
      <el-input v-model="form.confirmUserPwd"
                show-password
                @blur="confirmePwd"></el-input>
    </el-form-item>
    <el-form-item label="生日:">
      <el-col :span="11">
        <el-date-picker type="date"
                        placeholder="选择日期"
                        v-model="form.birthdate"
                        style="width: 110%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="地区(省):">
      <v-distpicker :province="form.address"
                    @province="a"
                    only-province></v-distpicker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="onSubmit()">立刻注册</el-button>
      <el-button><a href="http://localhost/user/login">返回登录</a></el-button>
    </el-form-item>
  </el-form>

</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        sex: '',
        email: '',
        phoneNum: '',
        userPwd: '',
        confirmUserPwd: '',
        birthdate: '',
        address: ''
      },
      responseResult: []
    }
  },
  methods: {
    confirmePwd () {
      if (this.form.userPwd !== this.form.confirmUserPwd) {
        this.$message({
          showClose: true,
          message: '两次密码输入不一致',
          type: 'error'
        })
      }
    },
    onSubmit () {
      if (this.form.userPwd !== this.form.confirmUserPwd) {
        this.$message({
          showClose: true,
          message: '两次密码输入不一致',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/user/register', {
          userName: this.form.name,
          userPwd: this.form.userPwd,

          userSex: this.form.sex,
          userEmail: this.form.email,
          userPhonenumber: this.form.phoneNum,
          userAddress: this.form.address,
          userBirth: this.form.birthdate
        })
        .then(successResponse => {
          if (successResponse.data.errCode === 200) {
            this.$router.replace({ path: '/user/login' })
          } else if (successResponse.data.errCode === 401) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'error'
            })
          } else if (successResponse.data.errCode === 405) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'error'
            })
          } else if (successResponse.data.errCode === 406) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'error'
            })
          } else if (successResponse.data.errCode === 402) {
            this.$message({
              showClose: true,
              message: successResponse.data.errMessage,
              type: 'error'
            })
          }
          // } else if (this.form.confirmUserPwd !== this.form.userPwd) {
          //   this.$message({
          //     showClose: true,
          //     message: '两次密码输入不一致',
          //     type: 'erroe'
          //   })
          // }
        })
        .catch(failResponse => {
        })
    },
    a (date) {
      console.log(date)
      this.form.address = date.value
    }
  }
}
</script>
<style>
body a {
  text-decoration: none;
  color: darkblue;
}
.el-input {
  width: 85%;
}
.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.register-log {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
