<template>
  <el-form :model="formData" ref="FormBlock" :rules="rules" label-position="left" label-width="150px"
           size="medium" @submit.prevent class="form-container">

    <el-form-item label="模板下载:" prop="template" class="required label-right-align">
      <el-button @click="downloadTemplate" type="primary">下载模板</el-button>
    </el-form-item>
    <el-form-item label="项目组:" prop="project" class="required label-right-align" >
      <el-select v-model="formData.project" class="short-input" clearable @change="handleProjectChange">
        <el-option v-for="(item, index) in projectOptions" :key="index" :label="item.label"
                   :value="item.value" :disabled="item.disabled"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="导入数据:" prop="fileupload" class="required label-right-align">
      <el-upload
          action="string"
          v-model:file-list="fileList"
          class="upload-demo"
          multiple
          accept=".xlsx,.xls"
          :http-request="importFunc"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
          :on-change="handleChange"
          :auto-upload="false"
      >
        <el-button type="primary">点击上传</el-button>
        <template #tip>
          <div class="el-upload__tip">
            仅支持xlsx,xls格式
          </div>
        </template>
      </el-upload>

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
  name: 'bulkImport',
}
</script>
<script setup>
import { ref } from 'vue'
import {ElMessage,ElMessageBox} from "element-plus";
// import {findAssetHosts, ImportHosts} from "@/api/assetManagement/cmdbHosts";

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
const project = ref(0)
const handleProjectChange= (value) => {
  console.log('Selected project:', value);
  formData.value.project = value
  // 你可以在这里添加你的逻辑，比如根据选择的项目加载相应的数据等
}
// 导入前检查文件
const beforeUpload = (file) => {
  const extension = file.name.split(".")[1] === "xls";
  const extension2 = file.name.split(".")[1] === "xlsx";
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!extension && !extension2) {
    this.$message({
      message: "上传模板只能是 xls、xlsx格式!",
      type: "error",
    });
  }
  if (!isLt2M) {
    console.log("上传模板大小不能超过 2MB!");
    this.$message({
      message: "上传模板大小不能超过 2MB!",
      type: "error",
    });
  }
  return extension || extension2 || isLt2M;
}

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview = (uploadFile) => {
  console.log(uploadFile);
};
// const handleExceed = (files, uploadFiles) => {
//   ElMessage.warning(
//       `The limit is 1, you selected ${files.length} files this time, add up to ${
//           files.length + uploadFiles.length
//       } totally`
//   );
// };
const handleChange = (file, fileList) => {
  if (fileList.length > 1) {
    fileList.splice(0, 1);
  }
  fileList.value = fileList;
};
const handleExceed = (files) => {
  if (fileList.value.length >= 1) {
    fileList.value = [];
  }
  fileList.value.push(files[0]);
};

const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
      `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
      () => true,
      () => false
  );
};

// 下载模板文件
const downloadTemplate = () => {
  const link = document.createElement('a');
  link.href = '/template.xlsx'; // 使用相对路径指向 public 目录中的模板文件
  link.download = 'template.xlsx'; // 指定下载的文件名
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  ElMessage({
    type: 'success',
    message: '模板下载成功',
  });
};

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
const fileList = ref([]); // 存储选择的文件列表

// 表单数据
const formData = ref({
});


const FormInitData = () => {
  console.log("form=====",formData.value)
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
const FormBlock = ref(null)
const closeDialog = () => {
  FormBlock.value.resetFields()
  emit('close')
}
const enterDialog = async() => {
  console.log(formData.value)
  console.log("卧槽啊啊啊啊啊")
  fileList.value.project = formData.value.project
  const valid = await FormBlock.value.validate();
  if (valid) {
    if (fileList.value.length === 0) {
      ElMessage({
        message: '请先上传文件',
        type: 'warning',
      });
    } else {
      console.log(fileList.value)
      console.log("woriniama")
      // 实现确认对话框的逻辑
      emit('enter', fileList.value);
    }

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
  min-height: 300px; /* 设置表单的最小高度 */
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
.upload-demo .el-upload-list__item-name {
  max-width: 300px; /* 调整文件名的宽度 */
}
.upload-demo .el-upload-list__item-status-label {
  flex: none; /* 使状态标签不占用文件名的宽度 */
}
</style>
