<template>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="80px" size="medium" @submit.prevent="submitForm">
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="存储地址:" label-width="170px" prop="s3Address" class="required label-right-align">
          <el-input v-model="formData.s3Address" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="存储Region:" label-width="170px" prop="s3Region" class="required label-right-align">
          <el-input v-model="formData.s3Region" type="text" placeholder="请输入对象存储地址" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="对象存储桶(Bucket):" label-width="170px" prop="s3Bucket" class="required label-right-align">
          <el-input v-model="formData.s3Bucket" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="存储供应商:" label-width="170px" prop="provider" class="required label-right-align">
          <el-input v-model="formData.provider" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="对象存储用户名(Key):" label-width="170px" prop="s3Key" class="required label-right-align">
          <el-input v-model="formData.s3Key" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="Velero镜像地址:" label-width="170px" prop="veleroImage" class="required label-right-align">
          <el-input v-model="formData.veleroImage" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="对象存储密码(Secret):" label-width="170px" prop="s3Secret" class="required label-right-align">
          <el-input v-model="formData.s3Secret" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="插件镜像地址:" label-width="170px" prop="pluginImage" class="required label-right-align">
          <el-input v-model="formData.pluginImage" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="存储路径:" label-width="170px" prop="path" class="label-right-align">
          <el-input v-model="formData.path" type="text" placeholder="可选，指定bucket的下级路径" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="grid-cell">
        <div class="static-content-item">
          <div>注意事项</div>
        </div>
        <p style="margin-top: 10px">不同的Kubernetes版本会对应不同的Velero版本，请在
          <a href="https://github.com/vmware-tanzu/velero?tab=readme-ov-file#changelog" target="_blank">Velero版本详情</a>
          选择对应的Velero版本。
        </p>
        <p style="margin-top: 10px">如果当前K8s版本大于1.18，可以无需更改Velero镜像。</p>
        <p style="margin-top: 10px">如需重新安装Velero，需要先删除该集群的Velero命名空间，之后在执行安装。</p>
        <p style="margin-top: 10px">如需卸载Velero，直接删除该集群的Velero命名空间即可。</p>
      </el-col>
    </el-row>
    <!--    <el-row type="flex" justify="end">-->
    <!--      <el-col :span="6">-->
    <!--        <el-button @click="handlePreviousStep">上一步</el-button>-->
    <!--        <el-button type="primary" @click="submitForm">提交</el-button>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </el-form>
</template>

<script setup>
import { reactive, ref, defineExpose,inject } from 'vue'

// 定义表单数据和验证规则
const formData = reactive({
  s3Address: "",
  s3Region: "minio",
  s3Bucket: "k8s-backup",
  provider: "aws",
  s3Key: "admin",
  veleroImage: "registry.cn-beijing.aliyuncs.com/dotbalo/velero:latest",
  s3Secret: "admin",
  pluginImage: "registry.cn-beijing.aliyuncs.com/dotbalo/velero-plugin-for-aws:latest",
  path: "",
})


const rules = reactive({
  s3Address: [{ required: true, message: '字段值不可为空' }],
  s3Region: [{ required: true, message: '字段值不可为空' }],
  s3Bucket: [{ required: true, message: '字段值不可为空' }],
  provider: [{ required: true, message: '字段值不可为空' }],
  s3Key: [{ required: true, message: '字段值不可为空' }],
  veleroImage: [{ required: true, message: '字段值不可为空' }],
  s3Secret: [{ required: true, message: '字段值不可为空' }],
  pluginImage: [{ required: true, message: '字段值不可为空' }],
})

// 定义表单引用
const vForm = ref(null)

// 提交表单函数，返回 Promise
const submitForm = () => {
  return new Promise((resolve) => {
    if (vForm.value) {
      vForm.value.validate((valid) => {
        resolve(valid)

      })
    } else {
      resolve(false)
    }
  })
}

// 重置表单函数
const resetForm = () => {
  if (vForm.value) {
    vForm.value.resetFields()
  }
}
// 获取表单数据函数
const getFormData = () => {
  return formData
}
// 通过 defineExpose 方法暴露方法供父组件调用
defineExpose({ submitForm, resetForm,getFormData })

</script>

<style lang="scss">
.el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
  .el-radio {
    line-height: 36px !important;
  }

  .el-rate {
    margin-top: 8px;
  }
}

.el-form-item--small {
  .el-radio {
    line-height: 32px !important;
  }

  .el-rate {
    margin-top: 6px;
  }
}

.el-form-item--mini {
  .el-radio {
    line-height: 28px !important;
  }

  .el-rate {
    margin-top: 4px;
  }
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: "";
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}
</style>

<style lang="scss">
div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
    }
  }
}

div.tab-container {}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {}
.grid-cell {
  padding: 0 10px; /* 为每个列增加内边距 */
  width: 50px;
}
.static-content-item {
  min-height: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: white;
  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}
.static-content-item p {
  margin: 0 0 10px 0; /* 下方间距设置为10px，可以根据需要调整 */
}
</style>
