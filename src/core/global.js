import config from './config'
import { h } from 'vue'

// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons-vue'
import svgIcon from '@/components/svgIcon/svgIcon.vue'
// 导入转换图标名称的函数

const createIconComponent = (name) => ({
  name: 'SvgIcon',
  render() {
    return h(svgIcon, {
      name: name,
    })
  },
})

const registerIcons = async(app) => {
  const iconModules = import.meta.glob('@/assets/icons/**/*.svg') // 系统目录 svg 图标
  const pluginIconModules = import.meta.glob('@/plugin/**/assets/icons/**/*.svg') // 插件目录 svg 图标
  const mergedIconModules = Object.assign({}, iconModules, pluginIconModules); // 合并所有 svg 图标
  for (const path in mergedIconModules) {
    let pluginName = ""
    if (path.startsWith("/src/plugin/")) {
      pluginName = `${path.split('/')[3]}-`
    }
    const iconName = path.split('/').pop().replace(/\.svg$/, '')
    // 如果iconName带空格则不加入到图标库中并且提示名称不合法
    if (iconName.indexOf(' ') !== -1) {
      console.error(`icon ${iconName}.svg includes whitespace in ${path}`)
      continue
    }
    const key = `${pluginName}${iconName}`
    const iconComponent = createIconComponent(iconName)
    config.logs.push({
      'key': key,
      'label': iconName,
    })
    app.component(key, iconComponent)
  }
}

export const register = (app) => {
  // 统一注册el-icon图标
  for (const iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
  }
  app.component('SvgIcon', svgIcon)
  registerIcons(app)
  app.config.globalProperties.$DYCLOUD_ADMIN = config
}
