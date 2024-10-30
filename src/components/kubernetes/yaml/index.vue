<template>
  <div style="overflow: hidden;width: 100%;">
    <el-form ref="YamlBlock">
      <el-form-item>
        <MonacoEditor
            v-model:value="yamlData"
            theme="vs"
            :options="optionsData"
            language="yaml"
            width="100%"
            :height="600"
        />
      </el-form-item>
    </el-form>
    <div v-if="!readOnlyType" class="dialog-footer" align="center">
      <el-button size="small" @click="closeDialog">取 消</el-button>
      <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YamlBlock',
  emits: {
    close: () => {
      return true
    },
    enter: (value) => {
      if (value.length === 1) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>
<script setup>
import MonacoEditor from 'monaco-editor-vue3'
import yaml from 'js-yaml'
import { ref } from 'vue'
const emit = defineEmits(['close', 'enter'])
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  readOnly: {
    default: function() {
      return false
    },
    type: Boolean
  },
})

const yamlData = ref('')
const optionsData = ref(null)
const readOnlyType = ref(false)
const Editinit = async() => {
  if (JSON.stringify(props.data) !== '{}') {
    if (props.data.metadata) {
      if (props.data.metadata.managedFields) {
        delete props.data.metadata.managedFields
      }
    }
    yamlData.value = yaml.dump(props.data)
  }

  readOnlyType.value = props.readOnly
  optionsData.value = {
    value: yamlData.value, // 编辑器初始显示文字
    // fontSize: 20,
    language: 'yaml', // 此处使用的yaml，其他语言支持自行查阅demo
    theme: 'vs-dark', // 官方自带三种主题vs, hc-black, or vs-dark
    selectOnLineNumbers: true, // 显示行号
    roundedSelection: false,
    readOnly: readOnlyType.value, // 只读
    cursorStyle: 'line', // 光标样式
    automaticLayout: true, // 自动布局
    glyphMargin: true, // 字形边缘
    useTabStops: false,
    autoIndent: true, // 自动布局
    quickSuggestionsDelay: 100, // 代码提示延时
  }
}

Editinit()

// 关闭
const closeDialog = () => {
  emit('close')
}

// 提交
const enterDialog = async() => {
  emit('enter', yaml.load(yamlData.value))
}
</script>
<style scoped>

</style>
