<template>
  <div>
    <el-form ref="form" label-position="top" :model="formData">
      <el-row :gutter="20" style="margin-top: 10px">
        <el-col :span="12">
          <el-form-item label="工作目录" prop="workingDir">
            <form-item-block v-model="formData.workingDir" placeholder="e.g. /myapp" item-type="input" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="标准输入" prop="stdin">
            <form-item-block v-model="formData.stdin" item-type="radio" :radios="stdin_list" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="TTY" prop="tty">
            <el-checkbox v-model="formData.tty" :disabled="formData.stdin === false">TTY</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <table style="width: 100%" class="tab-table">
            <tr>
              <th scope="col" width="90%" align="left">
                <label>命令</label>
              </th>
              <th align="left" />
            </tr>
            <tr v-for="(row,index) in commandList" :key="index">
              <td>
                <form-item-block v-model="row.value" placeholder="e.g. /bin/sh" item-type="textarea" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleCommandDelete(index)">
                  删除
                </el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleCommandAdd">添加</el-button>
              </td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12">
          <table style="width: 100%" class="tab-table">
            <tr>
              <th scope="col" width="90%" align="left">
                <label>参数(Args)</label>
              </th>
              <th align="left" />
            </tr>
            <tr v-for="(row,index) in argsList" :key="index">
              <td>
                <form-item-block v-model="row.value" placeholder="e.g. /bin/sh" item-type="textarea" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleArgsDelete(index)">
                  删除
                </el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleArgsAdd">添加</el-button>
              </td>
            </tr>
          </table>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CommandBlock',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  }
})

// 数据初始化
const stdin_list = ref([
  { label: '否', value: false },
  { label: '是', value: true },
])
const formData = ref({})
const commandList = ref([])
const argsList = ref([])
const stdin = ref({})
const stdinOnce = ref(false)
const FormInitData = () => {
  formData.value = props.form
  if (!formData.value.command) {
    formData.value.command = []
  } else {
    for (const com of formData.value.command) {
      commandList.value.push({ value: com })
    }
  }

  if (!formData.value.args) {
    formData.value.args = []
  } else {
    for (const com of formData.value.args) {
      argsList.value.push({ value: com })
    }
  }

  if (formData.value.stdinOnce !== undefined) {
    stdinOnce.value = true
    stdin.value.stdin = 'Once'
  }

  if (formData.value.stdin !== undefined) {
    stdin.value = formData.value.stdin ? 'Yes' : 'No'
  }
}

FormInitData()

// 添加命令
const handleCommandAdd = () => {
  commandList.value.push({ value: '' })
}

// 删除命令
const handleCommandDelete = (index) => {
  commandList.value.splice(index, 1)
}

// 添加参数
const handleArgsAdd = () => {
  argsList.value.push({ value: '' })
}

// 删除参数
const handleArgsDelete = (index) => {
  argsList.value.splice(index, 1)
}

// 返回数据格式化
const transformation = (parentFrom) => {
  const commandTmp = ref([])
  const argsTmp = ref([])
  for (const cmd of commandList.value) {
    commandTmp.value.push(cmd.value)
  }

  parentFrom.command = commandTmp.value

  for (const arg of argsList.value) {
    argsTmp.value.push(arg.value)
  }
  parentFrom.args = argsTmp.value

  parentFrom.workingDir = formData.value.workingDir

  if (stdin.value) {
    switch (stdin.value) {
      case 'No':
        parentFrom.stdin = false
        break
      case 'Yes':
        parentFrom.stdin = true
        break
      case 'Once':
        parentFrom.stdin = true
        parentFrom.stdinOnce = true
        break
    }
  } else {
    delete parentFrom.stdin
    delete parentFrom.stdinOnce
  }

  if (formData.value.tty !== undefined) {
    parentFrom.tty = formData.value.tty
  } else {
    delete parentFrom.tty
  }
}

// 格式化为对象返回父页面
const transformationformat = async(parentFrom) => {
  transformation(parentFrom)
}

defineExpose({
  transformationformat
})
</script>
<style scoped>

</style>
