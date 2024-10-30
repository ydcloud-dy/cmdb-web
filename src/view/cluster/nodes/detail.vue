<template>
  <div v-if="detailData">
    <div class="pull-left">
      <h4>基本信息</h4>
    </div>
    <table class="table-default-viewer">
      <tbody>
      <tr>
        <td style="width: 50%">
          <span>名称</span>
          <span class="margin-right"> : </span>
          <span> {{ detailData.metadata.name }} </span>
        </td>
        <td style="width: 50%">
          <span>存活时间</span>
          <span class="margin-right"> : </span>
          <span> {{ AgeFormat(detailData.metadata.creationTimestamp) }} </span>
        </td>
      </tr>
      <tr>
        <td style="width: 50%">
          <span>UID</span>
          <span class="margin-right"> : </span>
          <span>  {{ detailData.metadata.uid }}</span>
        </td>
      </tr>
      <tr>
        <td>
            <span>
              <span>容器组</span> CIDR
            </span>
          <span class="margin-right"> : </span>
          <span> {{ detailData.spec.podCIDR }}</span>
        </td>
        <td>
          <span>调度状态：</span>
          <span v-if="detailData.spec.unschedulable">不可调度</span>
          <span v-else>可调度</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>IP 地址</span>
          <span class="margin-right"> : </span>
          <span v-for="(val) in detailData.status.addresses " :key="val.index">
              <span>  {{ val.type }} : {{ val.address }}  </span> <br>
            </span>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <span>标签</span>
          <span class="margin-right"> : </span>
          <span v-for="(k, v, index) in detailData.metadata.labels" :key="index">
              <span class="label-custom" type="info"> {{ k }}: {{ v }}</span>
            </span>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <span>注解</span>
          <span> :</span>
          <span v-for="(k, v, index) in detailData.metadata.annotations" :key="index">
              <span class="margin-right label-custom" type="info">  {{ k }}: {{ v }}</span>
            </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>系统镜像</span>
          <span class="margin-right"> : </span>
          <span>  {{ detailData.status.nodeInfo.osImage }}</span>
        </td>
        <td>
          <span>内核版本</span>
          <span class="margin-right"> : </span>
          <span>  {{ detailData.status.nodeInfo.kernelVersion }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Kubelet 版本</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.kubeletVersion }}</span>
        </td>
        <td>
          <span>Kube-Proxy 版本</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.kubeProxyVersion }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>机器 ID</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.machineID }}</span>
        </td>
        <td>
          <span>系统 UUID</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.systemUUID }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>启动 ID</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.bootID }}</span>
        </td>
        <td>
          <span>容器运行时版本</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.containerRuntimeVersion }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>操作系统</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.operatingSystem }}</span>
        </td>
        <td>
          <span>架构</span>
          <span class="margin-right"> : </span>
          <span>{{ detailData.status.nodeInfo.architecture }}</span>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <span>污点 （Taints）</span>
          <span class="margin-right"> : </span>
          <el-tag v-for="(train, index) in detailData.spec.taints" :key="index" style="background: #999999; color: white">{{ train.key }}: {{ train.value }} Effect: {{ train.effect }}</el-tag>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pull-left">
      <h4>状态</h4>
    </div>
    <p />
    <div>
      <el-table
          :data="detailData.status.conditions"
          stripe
          style="width: 100%"
      >
        <el-table-column label="类型" prop="type" type="scope">
          <template #default="scope">
            <span>{{ scope.row.type }} </span>
          </template>
        </el-table-column>
        <el-table-column label="状态" prop="status" type="scope">
          <template #default="scope">
            <span>{{ scope.row.status }} </span>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" prop="status" type="scope">
          <template #default="scope">
            <span>{{ formatTimeToStr(scope.row.lastTransitionTime) }} </span>
          </template>
        </el-table-column>
        <el-table-column label="内容" prop="reason" type="scope">
          <template #default="scope">
            <span v-if="scope.row.reason">{{ scope.row.reason }} </span>
            <span v-else>-</span>
          </template>
        </el-table-column>
        <el-table-column label="消息" prop="message" type="scope">
          <template #default="scope">
            <span v-if="scope.row.message">{{ scope.row.message }}</span>
            <span v-else>-</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pull-left">
      <h4>容器组</h4>
    </div>
    <p />
    <div class="container">
      <el-tabs style="width:100%;">
        <PodsTableBlock :data="detailData" />
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBlock'
}
</script>
<script setup>
import { AgeFormat } from '@/utils/age'
import { formatTimeToStr } from '@/utils/date'
import PodsTableBlock from '@/components/kubernetes/pods/table.vue'

import { ref } from 'vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 数据初始化
const detailData = ref({})
const GetDetailData = () => {
  console.log("================================")
  detailData.value = props.form
  console.log(detailData.value)

}
GetDetailData()
</script>
<style scoped>
.label-custom {
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
  padding: 0 8px;
  cursor: pointer;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  -ms-border-radius: 12px;
  -o-border-radius: 12px;
  border: 1px solid #bcbdbf;
}
</style>
