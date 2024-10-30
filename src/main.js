import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/loading/style/css'
import 'element-plus/es/components/notification/style/css'
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style/element_visiable.scss'

import { createApp } from 'vue'
import './core/register'
// 引入封装的router
import router from '@/router/index'
import '@/permission'
import run from '@/core/register.js'
import auth from '@/directive/auth'
import { store } from '@/pinia'
import App from './App.vue'
//消除警告
import 'default-passive-events'

const app = createApp(App)
app.config.productionTip = false

app
    .use(run)
    .use(store)
    .use(auth)
    .use(router)
    .mount('#app')
export default app
