<template>
  <div class="page-container">
    <div class="center-container">
      <el-steps
          class="centered-steps"
          :space="400"
          :active="activeStep"
          finish-status="success"
      >
        <el-step title="对象存储准备" />
        <el-step title="Velero配置" />
      </el-steps>
    </div>
    <div class="center-container">
      <div class="content">
        <template v-if="activeStep === 1">
          <p class="section-title">
            说明
          </p>
          <p style="margin-top: 20px">
            使用Velero备份集群，数据默认存储在对象存储中。 可以使用Minio、Ceph和公有云的对象存储作为Velero的存储后端， 所以需要提前准备对象存储用于Velero。
          </p>
          <p class="section-title">
            安装Minio
          </p>
          <p style="margin-top: 20px;margin-bottom: 20px">
            如果没有可用的对象存储，可以使用如下命令快速安装一个
            <a href="https://min.io/" target="_blank">Minio</a>
          </p>
          <MonacoEditor
              v-model:value="yamlData"
              theme="vs"
              :options="optionsData"
              language="yaml"
              width="100%"
              :height="80"
          />
          <p style="margin-top: 20px">
            创建完成之后，可以通过宿主机的IP:9001端口即可访问Minio的控制台，默认用户名密码：user/password， 如需修改密码，可以修改上述命令的环境变量。
          </p>
          <p style="margin-top: 20px">
            需要记录如下信息：地址、用户名（S3 Key）、密码（S3 Secret）、桶（Bucket）供Velero使用。
          </p>
          <p class="section-title">
            注意事项
          </p>
          <p style="margin-top: 20px">
            生产环境建议部署
            <a href="https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html" target="_blank">高可用的Minio集群</a>
            作为Velero的后端存储。
          </p>
          <div class="button-container">
            <el-button type="primary" @click="handleNextStep">
              下一步
            </el-button>
          </div>
        </template>
        <template v-else>
          <CreateVelero ref="createVeleroRef" />
          <div class="button-container">
            <el-button @click="handlePreviousStep">上一步</el-button>
            <el-button type="primary" @click="handleSubmitForm">提交</el-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  VeleroCreate
} from '@/api/kubernetes/velero.js'
import { ref } from "vue";
import MonacoEditor from 'monaco-editor-vue3';
import CreateVelero from './createVelero.vue'
import {ElMessage} from "element-plus";
import {StorageClassCreate} from "@/api/kubernetes/storageclasses";

const readOnlyType = ref(true);
const yamlData = ref('mkdir -p /data/minio\n' +
    'docker run -d --name minio-server --env MINIO_ROOT_USER="user" --env MINIO_ROOT_PASSWORD="password" \\ \n' +
    '--env MINIO_DEFAULT_BUCKETS="k8s-backup" --publish 9000:9000 --publish 9001:9001 -v \\ \n ' +
    '/data/minio:/bitnami/minio/data registry.cn-beijing.aliyuncs.com/dotbalo/minio:latest');
const optionsData = ref(null);
optionsData.value = {
  value: yamlData.value,
  language: 'yaml',
  theme: 'vs-dark',
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: readOnlyType.value,
  cursorStyle: 'line',
  automaticLayout: true,
  glyphMargin: true,
  useTabStops: false,
  autoIndent: true,
  quickSuggestionsDelay: 100,
};
const activeStep = ref(1);
const clusterId = ref()
const showForm = ref(false);
const handleNextStep = () => {
  // showForm.value = true;
  activeStep.value = 2
};
const handlePreviousStep = () => {
  // showForm.value = false;
  activeStep.value = 1
};
const createVeleroRef = ref(null);
const searchInfo = ref({ 'keywords': '' })

const handleSubmitForm = async () => {
  if (createVeleroRef.value) {
    const isValid = await createVeleroRef.value.submitForm();
    if (isValid) {
      let res
      // 表单校验通过，执行提交逻辑
      console.log("表单提交成功");
      const  formData = createVeleroRef.value.getFormData()
      formData.cluster_id = clusterId.value
      console.log(formData)
      console.log(searchInfo.value.cluster_id)
      console.log("================================")
      res = await VeleroCreate(formData)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '创建Velero成功'
        })
      }else {
        ElMessage({
          type: 'error',
          message: res.msg
        })
      }
    } else {
      // 表单校验未通过，显示错误提示
      console.error("表单校验失败");
      // createVeleroRef.value.$refs.vForm.scrollToError();  // 滚动到第一个错误项
    }
  }
};

window.addEventListener('setItemCluster', (e) => {
  clusterId.value = parseInt(localStorage.getItem('cluster_id'))
})

</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.center-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.centered-steps {
  max-width: 800px; /* 可根据需要调整 */
  width: 100%;
  margin-top: 50px;
}

.content {
  max-width: 1200px; /* 可根据需要调整 */
  width: 100%;
  margin-top: 20px;
  padding: 0 20px; /* 增加一些内边距 */
}

.section-title {
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 20px;
  color: white;
}

pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1em;
  }

  .button-container {
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .section-title {
    font-size: 1.1em;
  }
}

@media (min-width: 961px) {
  .section-title {
    font-size: 1.2em;
  }
}
</style>
