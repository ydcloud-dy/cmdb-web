<template>
  <div
      id="userLayout"
      class="w-full h-full relative bg-image"
  >

    <div class="full-width-flex">

      <div class="right-margin-container">
        <div class="outer-container">

          <div class="inner-container">
            <div class="logo-container">
              <img
                  class="w-24"
                  :src="$DYCLOUD_ADMIN.appLogo"
                  alt
              >
            </div>
            <div class="mb-9">
              <p class="text-center text-4xl font-bold">{{ $DYCLOUD_ADMIN.appName }}</p>
            </div>
            <div class="login-form-container">
              <el-form
                  ref="loginForm"
                  :model="loginFormData"
                  :rules="rules"
                  :validate-on-rule-change="false"
                  @keyup.enter="submitForm"
              >
                <el-form-item
                    prop="username"
                    class="mb-6"
                >
                  <el-input
                      v-model="loginFormData.username"
                      size="large"
                      placeholder="请输入用户名"
                      suffix-icon="user"
                  />
                </el-form-item>
                <el-form-item
                    prop="password"
                    class="mb-6"
                >
                  <el-input
                      v-model="loginFormData.password"
                      show-password
                      size="large"
                      type="password"
                      placeholder="请输入密码"
                  />
                </el-form-item>
                <el-form-item
                    v-if="loginFormData.openCaptcha"
                    prop="captcha"
                    class="mb-6"
                >
                  <div class="flex w-full justify-between">
                    <el-input
                        v-model="loginFormData.captcha"
                        placeholder="请输入验证码"
                        size="large"
                        class="flex-1 mr-5"
                    />
                    <div class="w-1/3 h-11 bg-[#c3d4f2] rounded">
                      <img
                          v-if="picPath"
                          class="w-full h-full"
                          :src="picPath"
                          alt="请输入验证码"
                          @click="loginVerify"
                      >
                    </div>
                  </div>
                </el-form-item>
                <el-form-item class="mb-6">
                  <el-button
                      class="shadow shadow-active h-11 w-full"
                      type="primary"
                      size="large"
                      @click="submitForm"
                  >登 录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { captcha } from '@/api/user'
import { checkDB } from '@/api/initdb'
/*
import BottomInfo from '@/components/bottomInfo/bottomInfo.vue'
*/
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/pinia/modules/user'

defineOptions({
  name: "Login",
})

const router = useRouter()
// 验证函数
const checkUsername = (rule, value, callback) => {
  if (value.length < 5) {
    return callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}
const checkPassword = (rule, value, callback) => {
  if (value.length < 6) {
    return callback(new Error('请输入正确的密码'))
  } else {
    callback()
  }
}

// 获取验证码
const loginVerify = async() => {
  const ele = await captcha()
  rules.captcha.push({
    max: ele.data.captchaLength,
    min: ele.data.captchaLength,
    message: `请输入${ele.data.captchaLength}位验证码`,
    trigger: 'blur',
  })
  picPath.value = ele.data.picPath
  loginFormData.captchaId = ele.data.captchaId
  loginFormData.openCaptcha = ele.data.openCaptcha
}
loginVerify()

// 登录相关操作
const loginForm = ref(null)
const picPath = ref('')
const loginFormData = reactive({
  username: 'admin',
  password: '',
  captcha: '',
  captchaId: '',
  openCaptcha: false,
})
const rules = reactive({
  username: [{ validator: checkUsername, trigger: 'blur' }],
  password: [{ validator: checkPassword, trigger: 'blur' }],
  captcha: [
    {
      message: '验证码格式不正确',
      trigger: 'blur',
    },
  ],
})

const userStore = useUserStore()
const login = async() => {
  return await userStore.LoginIn(loginFormData)
}
const submitForm = () => {
  loginForm.value.validate(async(v) => {
    if (!v) {
      // 未通过前端静态验证
      ElMessage({
        type: 'error',
        message: '请正确填写登录信息',
        showClose: true,
      })
      loginVerify()
      return false
    }

    // 通过验证，请求登陆
    const flag = await login()

    // 登陆失败，刷新验证码
    if (!flag) {
      loginVerify()
      return false
    }

    // 登陆成功
    return true
  })
}

// 跳转初始化
const checkInit = async() => {
  const res = await checkDB()
  if (res.code === 0) {
    if (res.data?.needInit) {
      userStore.NeedInit()
      router.push({ name: 'Init' })
    } else {
      ElMessage({
        type: 'info',
        message: '已配置数据库信息，无法初始化',
      })
    }
  }
}

</script>
<style scoped>
.bg-image {
  background-image: url('@/assets/login.png');
  background-size: cover;
}
.full-width-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.right-margin-container {

  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20%; /* 调整这个值可以改变右侧间隙的大小 */
}

.inner-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 300px; /* 将内部容器限制在合理范围内 */
}

.logo-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.login-form-container {
  width: 100%;
}

.el-form-item {
  --el-form-item-label-font-size: 16px;
}

.el-input__inner {
  border-radius: 20px; /* 边框圆滑 */
  border: 2px solid white; /* 白色边框 */
  color: white; /* 字体颜色为白色 */
  background-color: transparent; /* 背景透明 */
}

.el-button {
  border-radius: 20px; /* 按钮边框圆滑 */
}

.el-input-group__append .el-button {
  border-radius: 0 20px 20px 0; /* 处理验证码输入框右侧按钮圆角 */
}

.el-input-group__prepend .el-input__inner {
  border-radius: 20px 0 0 20px; /* 处理验证码输入框左侧输入框圆角 */
}
.outer-container {
  padding: 30px; /* 四周30像素的间距 */
  background-color: white; /* 背景颜色为白色 */
  border-radius: 20px; /* 圆角效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加一点阴影效果，增加视觉层次 */
}

</style>
