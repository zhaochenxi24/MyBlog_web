<template>
  <el-form ref="form"
           :model="form"
           :rules="rules"
           label-width="80px"
           class="register-container">
    <h3 class="register-log">logo</h3>
    <el-form-item label="昵称:"
                  prop="name">
      <el-input v-model="
                  form.name"
                clearable>
      </el-input>
    </el-form-item>
    <el-form-item label="性别:"
                  prop="sex">
      <el-radio-group v-model="form.sex">
        <el-radio label="1">男</el-radio>
        <el-radio label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱:"
                  prop="email">
      <el-input v-model="form.email"
                clearable></el-input>
    </el-form-item>
    <el-form-item label="手机号:"
                  prop="phoneNum">
      <el-input v-model="form.phoneNum"
                maxlength="11"
                show-word-limit
                clearable></el-input>
    </el-form-item>
    <el-form-item label="密码:"
                  prop="userPwd">
      <el-input v-model="form.userPwd"
                show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码"
                  prop="confirmeUserPwd">
      <el-input v-model="form.confirmeUserPwd"
                show-password></el-input>
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
        confirmeUserPwd: '',
        birthdate: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请输入活动名称', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        phoneNum: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        userPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmeUserPwd: [
          { required: true, message: '请再次输入密码', trigger: 'blur' }
        ]
      },
      responseResult: []
    }
  },
  methods: {
    onSubmit () {
      this.$axios
        .post('/user/register', {
          userName: this.form.name,
          userPwd: this.form.userPwd,
          confirmeUserPwd: this.form.confirmeUserPwd,
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
          } else if (successResponse.data.errCode === 407) {
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
