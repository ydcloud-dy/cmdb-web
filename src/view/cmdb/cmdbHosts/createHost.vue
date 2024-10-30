<template>
  <el-form :model="formData" ref="FormBlock" :rules="rules" label-position="left" label-width="150px"
           size="medium" @submit.prevent class="form-container">
    <div class="static-content-item">
      <div>{{ title }}</div>
    </div>
    <div class="static-content-item">
      <el-divider direction="horizontal" style="margin-bottom: 10px"></el-divider>
    </div>

    <el-form-item label="项目组:" prop="project" class="required label-right-align">
      <el-select v-model="formData.project" class="short-input" clearable>
        <el-option v-for="(item, index) in projectOptions" :key="index" :label="item.label"
                   :value="item.value" :disabled="item.disabled"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="主机名称:" prop="name" class="required label-right-align">
      <el-input v-model="formData.name" type="text" placeholder="请输入主机名称" clearable class="short-input"></el-input>
    </el-form-item>

<!--    <el-row>-->
<!--      <el-col :span="24" class="grid-cell">-->
        <div class="input-container">
          <el-form-item label="连接地址:" prop="username" class="input-item">
            <el-input v-model="formData.username" type="text" placeholder="用户名" clearable>
              <template #prepend>用户名</template>
            </el-input>
          </el-form-item>
<!--          <el-form-item label="" prop="password" class="input-item">-->
<!--            <el-input v-model="formData.password" type="text" placeholder="密码" clearable>-->
<!--              <template #prepend>密码</template>-->
<!--            </el-input>-->
<!--          </el-form-item>-->
          <el-form-item label="" prop="serverHost" class="input-item">
            <el-input v-model="formData.serverHost" type="text" placeholder="主机名" clearable>
              <template #prepend>地址</template>
            </el-input>
          </el-form-item>

          <el-form-item label="" prop="port" class="input-item">
            <el-input v-model="formData.port" type="text" placeholder="端口" clearable>
              <template #prepend>端口</template>
            </el-input>
          </el-form-item>
        </div>
<!--      </el-col>-->
<!--    </el-row>-->

<!--    <el-form-item label="独立密钥:" prop="file" class="label-right-align">-->
<!--      <el-upload-->
<!--          ref="privateKey"-->
<!--          class="upload-demo"-->
<!--          :limit="1"-->
<!--          :auto-upload="false"-->
<!--          :before-upload="beforeUpload"-->
<!--          :file-list="fileList"-->
<!--          :on-change="handleChange"-->
<!--          :on-remove="handleRemove"-->
<!--          v-if="!isUploaded"-->
<!--      >-->
<!--        <template #trigger>-->
<!--          <el-button type="primary" v-if="!isUploading">上传密钥</el-button>-->
<!--          <el-button type="primary" loading v-else>正在上传</el-button>-->
<!--        </template>-->
<!--      </el-upload>-->

<!--      <div v-if="isUploaded">-->
<!--        <p>-->
<!--          {{ fileList[0]?.name }}-->
<!--          <el-button size="mini" @click="handleRemoveFile(fileList[0])" :icon="Delete"></el-button>-->
<!--        </p>-->
<!--      </div>-->
<!--    </el-form-item>-->

    <el-form-item label="备注信息" prop="note" class="label-right-align">
      <el-input type="textarea" v-model="formData.note" placeholder="请输入主机备注信息" rows="3" class="short-input"></el-input>
    </el-form-item>

    <div class="static-content-item">
      <el-divider direction="horizontal"></el-divider>
    </div>
    <div class="grid-content bg-purple-light">
      <div style="float: right;margin-top: 10px">
        <el-button size="small" @click="closeDialog">取 消</el-button>
        <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
      </div>
    </div>
  </el-form>
</template>
<script>
export default {
  name: 'CreateHost',
}
</script>
<script setup>
import { ref, reactive,watchEffect } from 'vue'
import { Delete} from '@element-plus/icons-vue'
import {ElMessage} from "element-plus";
// import {UploadPrivateKey} from "@/api/assetManagement/cmdbHosts";

const emit = defineEmits(['close', 'enter'])

const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },

  dataInfo: {
    default: function() {
      return {}
    },
    type: Object
  },
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  cluster: {
    default: function() {
      return 0
    },
    type: Number
  },
  type: {
    default: function() {
      return 0
    },
    type: String
  },
  title: {
    default: function() {
      return 0
    },
    type: String
  },
  readOnly: {
    default: function() {
      return false
    },
    type: Boolean
  },
  operation: {
    default: function() {
      return 0
    },
    type: String
  }
})


// 验证规则
const rules = {
  project: [{ required: true, message: '字段值不可为空' }],
  name: [{ required: true, message: '字段值不可为空' }],
  serverHost: [{ required: true, message: '字段值不可为空' }],
  username: [{ required: true, message: '字段值不可为空' }],
  port: [{ required: true, message: '字段值不可为空' }],
  password: [{ required: true, message: '字段值不可为空' }]

};

// 项目组选项
// 使用 map 方法从原始数据中生成 select 选项
const projectOptions = ref(props.data.map(item => ({
  label: item.name, // 使用 name 作为 label
  value: item.ID // 使用 ID 作为 value
})));
console.log(props.data)
console.log(props.form)
console.log(projectOptions.value)
console.log(props.dataInfo)
console.log("================================================================================================")
const privateKey = ref(null); // 参考上传组件
const fileList = ref([]); // 存储选择的文件列表
const isUploaded = ref(false); // 控制是否显示上传按钮的状态
const isUploading = ref(false); // 控制上传状态
// 表单数据
const formData = ref({
});
// 在文件上传前进行验证
const beforeUpload = (file) => {
  const isValidFileType = ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type);
  if (!isValidFileType) {
    alert('Invalid file type. Only PDF, JPG, and PNG are allowed.');
  }
  return isValidFileType;
};

// 处理文件变化
const handleChange = async (file, newFileList) => {
  // 更新文件列表
  fileList.value = [file]; // 使用新选中的文件覆盖旧的文件
  // 立即上传新选择的文件
  await submitUpload();
};
const FormInitData = () => {
  console.log("form=====",formData.value)
  // formData.value = props.data[0]
  console.log("赋值后==",formData.value)
  console.log(props.dataInfo);
  if (props.dataInfo != null) {
    formData.value.name = props.dataInfo.name
    formData.value.id = props.dataInfo.ID
    formData.value.project = props.dataInfo.project
    formData.value.projectId = props.dataInfo.project
    formData.value.serverHost = props.dataInfo.serverHost
    formData.value.port = props.dataInfo.port
    formData.value.username = props.dataInfo.username
    formData.value.note = props.dataInfo.note
    formData.value.password = props.dataInfo.password
  }

}

FormInitData()
// 提交上传到服务器
const submitUpload = async () => {
  const formData = new FormData();

  if (fileList.value.length > 0) {
    const file = fileList.value[0].raw;

    // 检查文件扩展名
    const validExtensions = ['.pem', '.key'];
    const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);

    if (!validExtensions.includes(`.${fileExtension}`)) {
      ElMessage({
        type: 'error',
        message: '请上传有效的私钥文件'
      });
      fileList.value = []
      return;
    }

    formData.append('file', file);
    isUploading.value = true;

    try {
      const response = await uploadFileToServer(formData);
      console.log('Upload successful:', response);
      isUploaded.value = true;
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      isUploading.value = false;
    }
  } else {
    ElMessage({
      type: 'error',
      message: '请上传有效的私钥文件'
    });
  }
};

// 模拟 API 调用
const uploadFileToServer = async (data) => {
  try {
    // 使用 FormData 的 forEach 或 for...of 来查看上传的文件
    for (const [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

    // 替换为您的上传 API
    const res = await UploadPrivateKey(data); // 这里您需要确保该方法是异步的
    console.log(res);

    // 根据返回的响应执行进一步的处理
    if (res.code === 0) {
      formData.value.privateKey = res.data.data
      ElMessage({
        type: 'success',
        message: '上传成功'
      });
    }
  } catch (error) {
    console.error('Error during file upload:', error);
  }
}
// 处理文件移除
const handleRemove = (file, fileList) => {
  fileList.value = fileList;
  formData.value.privateKey = ""
};

// 处理文件删除
const handleRemoveFile = (file) => {
  fileList.value = [];
  isUploaded.value = false; // 重置上传状态
};

const FormBlock = ref(null)
const closeDialog = () => {
  FormBlock.value.resetFields()
  emit('close')
}
const enterDialog = async() => {
  const valid = await FormBlock.value.validate();
  if (valid) {
    emit('enter', formData.value);
  } else {
    console.error("表单验证失败");
  }
}
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

<style lang="scss" scoped>
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
.form-container {
  max-width: 600px; /* 设置表单的最大宽度 */
  width: 100%; /* 确保表单占满可用的宽度 */
  min-height: 490px; /* 设置表单的最小高度 */
  padding: 20px; /* 可选：增加一些内边距来提升视觉效果 */
  box-sizing: border-box; /* 确保内边距不会影响宽度计算 */
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

.custom-label {}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
  .delete-icon {
    padding: 0; /* 去掉按钮的内边距 */
    border: none; /* 去掉边框 */
    background: none; /* 去掉背景 */
    color: inherit; /* 继承文本颜色 */
    cursor: pointer; /* 光标变为指针 */
  }
  .short-input {
    max-width: 400px; /* 设置输入框的最大宽度 */
    width: 100%; /* 确保输入框占满可用空间 */
  }

  .grid-cell {
    max-width: 400px; /* 设置列的最大宽度 */
  }

  .input-container {
    display: flex; /* 使用 flexbox 布局 */
    gap: 0; /* 设置间隙为0 */
  }

  .input-item {
    flex: 1; /* 每个输入框均分宽度 */
    margin: 0; /* 移除外边距，以消除间隙 */
  }

  .input-item .el-form-item__label {
    display: none; /* 隐藏标签以确保输入框在同一行 */
  }

  .el-input {
    width: 100%; /* 确保输入框宽度填满 */
  }
}
</style>
