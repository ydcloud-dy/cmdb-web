<template>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="80px" size="medium" @submit.prevent>
    <el-row :gutter="20">
      <!-- 第一列：名称、备份策略、保留时长、备注信息 -->
      <el-col :span="6" :offset="3">
        <el-form-item label="名称" prop="name" class="required">
          <el-input v-model="formData.name" type="text" placeholder="请输入备份任务名称" clearable></el-input>
        </el-form-item>

        <el-form-item label="备份策略" prop="schedule">
          <el-input v-model="formData.schedule" type="text" clearable></el-input>
        </el-form-item>

        <el-form-item label="保留时长" prop="ttl">
          <el-input v-model="formData.ttl" type="text" clearable></el-input>
        </el-form-item>

        <el-form-item label="备注信息" prop="annotations">
          <el-input v-model="formData.annotations" type="text" placeholder="添加备注信息" clearable></el-input>
        </el-form-item>
      </el-col>

      <!-- 第二列：命名空间选择、资源选择 -->
      <el-col :span="8">
        <el-form-item label="命名空间" prop="includedNamespaces">
          <el-radio-group v-model="formData.includedNamespaces">
            <el-radio v-for="(item, index) in includedNamespacesOptions" :key="index" :label="item.value" :disabled="item.disabled">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="资源选择" prop="includedResources">
          <el-radio-group v-model="formData.includedResources">
            <el-radio v-for="(item, index) in includedResourcesOptions" :key="index" :label="item.value" :disabled="item.disabled">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>

      <!-- 第三列：命名空间下拉菜单、资源类型输入框 -->
      <el-col :span="6">
        <el-form-item label="命名空间" v-if="formData.includedNamespaces === 2" prop="namespaces">
          <el-select v-model="formData.namespaces" class="full-width-input" clearable multiple>
            <el-option v-for="(item, index) in namespacesOptions" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>

        </el-form-item>

        <el-form-item label="资源类型" v-if="formData.includedResources === 2" prop="resources">
          <el-input v-model="formData.resources" type="textarea" placeholder="请输入资源类型" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <div class="button-container">
      <el-button type="primary" @click="createTasks">
        {{ isUpdate ? '更新' : '新增' }}
      </el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: 'CreateVeleroTask',
}
</script>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { getClusterUserNamespace } from '@/api/kubernetes/namespaces'

// 表单验证规则
const rules = reactive({
  name: [{
    required: true,
    message: '字段值不可为空',
  }],
})

const includedNamespacesOptions = [
  { "label": "备份所有命名空间", "value": 1 },
  { "label": "备份指定命名空间", "value": 2 }
]

const includedResourcesOptions = [
  { "label": "备份所有资源类型", "value": 1 },
  { "label": "备份指定资源类型", "value": 2 }
]

const vForm = ref(null)

const submitForm = () => {
  if (vForm.value) {
    vForm.value.validate(valid => {
      if (!valid) return
      // TODO: 提交表单
    })
  }
}

const resetForm = () => {
  if (vForm.value) {
    vForm.value.resetFields()
  }
}

// 定义传入的 props
const props = defineProps({
  form: Object,  // 确保这里的 form 是从父组件传过来的
  readonly: Boolean,
  isUpdate: Boolean,
});

const emit = defineEmits(['close', 'enter']);

// 创建一个表单数据对象
const formData = reactive({
  name: props.form?.metadata?.name || "",
  includedNamespaces: props.form?.spec?.template?.includedNamespaces?.includes("*") ? 1 : 2,
  namespaces: props.form?.spec?.template?.includedNamespaces?.includes("*") ? [] : props.form?.spec?.template?.includedNamespaces || [],
  schedule: props.form?.spec?.schedule || "1 0 * * *",
  includedResources: props.form?.spec?.template?.includedResources?.includes("*") ? 1 : 2,
  ttl: props.form?.spec?.template?.ttl || "720h0m0s",
  annotations: props.form?.metadata?.annotations || "",
  resources: props.form?.spec?.template?.includedResources?.includes("*") ? [] : props.form?.spec?.template?.includedResources || [],
});


const createTasks = () => {
  // 根据 formData 的值来处理逻辑
  if (formData.includedNamespaces === 1) {
    formData.namespaces = ["*"];
  }

  if (formData.includedResources === 1) {
    formData.resources = ["*"];
  } else if (typeof formData.resources === 'string') {
    formData.resources = formData.resources.split('\n')
        .map(item => item.trim())
        .filter(item => item.length > 0);
  }

  // 验证表单
  vForm.value.validate((valid) => {
    if (valid) {
      // 将处理后的 formData 传递回父组件
      emit('enter', {
        metadata: {
          name: formData.name,
          annotations: formData.annotations,
        },
        spec: {
          schedule: formData.schedule,
          template: {
            includedNamespaces: formData.namespaces,
            includedResources: formData.resources,
            ttl: formData.ttl,
          }
        }
      });
    } else {
      console.log('表单验证失败');
    }
  });
};

const namespacesOptions = ref([])

let clusterId = ref(null)

const loadNamespaces = async () => {
  clusterId.value = parseInt(localStorage.getItem('cluster_id'));
  if (clusterId.value !== null) {
    const response = await getClusterUserNamespace({ id: clusterId.value });
    if (response.code === 0) {
      namespacesOptions.value = response.data.namespaces.map(ns => ({
        label: ns,
        value: ns
      }));
    }
  }
}

onMounted(() => {
  window.addEventListener('setItemCluster', loadNamespaces);
  loadNamespaces();
});
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
    line-height: 28px;
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

<style lang="scss" scoped>
div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  td.table-cell {
    display: table-cell;
    height: 36px;
    border: 1px solid #e1e2e3;
  }
}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;
}

.static-content-item :deep(.el-divider--horizontal) {
  margin: 0;
}
.button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
