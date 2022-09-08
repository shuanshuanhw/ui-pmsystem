<template>
  <div class="back">

    <div class="login">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
        <el-image style="width: 100px;" :src="url" />
        <!-- <h2 style="color: #1a1a1a;"></h2> -->
        <h4 class="title">顺德图书馆 项目绩效管理系统</h4>
        <el-form-item prop="username">
          <el-input class="search el-icon-search" v-model="loginForm.username" type="text" auto-complete="off"
            placeholder="账号">
            <template #prefix>
              <el-icon class="el-icon--left">
                <User />
              </el-icon>
            </template>

          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码"
            @keyup.enter.native="handleLogin">
            <template #prefix>
              <el-icon class="el-icon--left">
                <Hide />
              </el-icon>
            </template>

          </el-input>
        </el-form-item>
        <!-- <el-form-item prop="code" v-if="captchaEnabled">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" class="login-code-img"/>
        </div>
      </el-form-item> -->
        <!-- <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox> -->
        <el-form-item style="width:100%;">
          <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
          <div style="float: right;" v-if="register">
            <router-link class="link-type" :to="'/register'">立即注册</router-link>
          </div>
        </el-form-item>
      </el-form>
      <!--  底部  -->
      <div class="el-login-footer">
        <span>Copyright © 2018-2022 ruoyi.vip All Rights Reserved.</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { getCodeImg } from "../../src/api/login";
import Cookies from "js-cookie";
// import { encrypt, decrypt } from '../../src/utils/jsencrypt'
import SvgIcon from '@/components/SvgIcon/index'// svg component
import { login } from '@/api/login'
import { ElMessage } from 'element-plus'
import { getUser } from '@/api/index.js'
// import index from '@/'
export default {
  components: {
    SvgIcon
  },
  name: "Login",
  data() {
    return {
      url: "/u41.png",
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        // code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
  },
  methods: {
    handleLogin() {
      // console.log('用户名',this.loginForm.username)
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true;
          await login(this.loginForm).then(async resp => {
            console.log('resp', resp)
            if (resp.data.flag) {
              Cookies.set('token', resp.data.data)
              console.log('登陆页存入的token', resp.data.data)
              await getUser(resp.data.data).then(resp => {
                console.log('取用户资料', resp)
                if (resp.data.flag) {

                  Cookies.set('department', resp.data.data.department)
                  Cookies.set('trueName', resp.data.data.truename)
                  console.log('此时的truename', resp.data.data.truename)
                  this.$router.push('/index').catch((e) => {
                    console.log(e)
                  });
                } else {
                  ElMessage.error(resp.data.message)
                  this.loading = false;
                }
              }).catch(() => {
                this.loading = false;
              });

            }
            else {
              // 如果帐号或密码错误
              ElMessage.error(resp.data.message)
              this.loading = false;
            }
          }).catch();
        }
      }).catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// body{
//     background-image: url("/login-background.jpg");
//     background-size: cover;
// }
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  //  min-width: 320px;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-image: url("/login-background.jpg");
  background-size: cover;

}

.login {
  // border:#d01e1e solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  // background-image: url("/login-background.jpg");
  // background-size: cover;
}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  //   margin-top:100px;
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;

  .el-input {
    height: 38px;

    input {
      height: 38px;
    }
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;

  img {
    cursor: pointer;
    vertical-align: middle;
  }
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  //   color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}

.login-code-img {
  height: 38px;
}
</style>
