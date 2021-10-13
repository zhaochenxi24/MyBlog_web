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
                  prop="confirmUserPwd">
      <el-input v-model="form.confirmUserPwd"
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
      <el-button><a href="../#/user/login">返回登录</a></el-button>
    </el-form-item>
  </el-form>

</template>
<script>
export default {
  name: 'Register',
  data () {
    /* 二次输入密码 */
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.userPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    /* 是否邮箱 */
    var isEmail = (rule, value, callback) => {
      // eslint-disable-next-line no-useless-escape
      const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
      if (value === '' || value === undefined || value == null) {
        callback()
      } else {
        if (!reg.test(value)) {
          callback(new Error('请输入正确的邮箱地址'))
        } else {
          callback()
        }
      }
    }
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
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '请输入3到15位用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: isEmail, trigger: 'blur' }
        ],
        phoneNum: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确长度的手机号', trigger: 'blur' }
        ],
        userPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmUserPwd: [
          { validator: validatePass2, trigger: 'blur' }
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
          confirmUserPwd: this.form.confirmUserPwd,
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
<style scoped>
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
