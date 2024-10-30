<template>
  <div class="dycloud-form-box">
    <el-form >
      <el-form-item label="主机:">
        <el-select v-model="currentHost" @change="currentChange" placeholder="请选择主机">
          <el-option
              v-for="item in hostList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div style="margin-bottom: 20px">
      <el-row :gutter="28">
        <el-col :span="5">
          <router-link :to="'dockersContainer'">
            <el-card shadow="always" class="sort-card">
              <div class="card-title">
                <div style="font-size: 72px;color: #e6a23c;text-align: center">{{ stats.container }}</div>
                <div style="color: #ED6A0C;text-align: center;font-size: 24px;">容器</div>
              </div>
            </el-card>
          </router-link>
        </el-col>
        <el-col :span="5">
          <router-link :to="'dockersImage'">
            <el-card shadow="always" class="sort-card">
              <div class="card-title">
                <div style="font-size: 72px;color: #4D70FF;text-align: center">{{ stats.image }}</div>
                <div style="color: #4D70FF;text-align: center;font-size: 24px;">镜像</div>
              </div>
            </el-card>
          </router-link></el-col>
        <el-col :span="5">
          <router-link :to="'dockersNetwork'">
            <el-card shadow="always" class="sort-card">
              <div class="card-title">
                <div>
                  <div style="font-size: 72px;color: crimson;text-align: center">{{ stats.network }}</div>
                  <div style="color: crimson;text-align: center;font-size: 24px;">网络</div>
                </div>
              </div>
            </el-card>
          </router-link></el-col>
        <el-col :span="5">
          <router-link :to="'dockersVolume'">
            <el-card shadow="always" class="sort-card">
              <div class="card-title">
                <div>
                  <div style="font-size: 72px;color: burlywood;text-align: center">{{ stats.volume }}</div>
                  <div style="color: burlywood;text-align: center;font-size: 24px;">存储卷</div>
                </div>
              </div>
            </el-card>
          </router-link></el-col>
      </el-row>
    </div>
    <div>
      <el-descriptions class="margin-top" title="环境信息" :column="1" border>
        <el-descriptions-item label="版本信息">
          {{ systemInfo.ServerVersion }}
        </el-descriptions-item>
        <el-descriptions-item label="内核版本">
          {{ systemInfo.KernelVersion }}
        </el-descriptions-item>
        <el-descriptions-item label="CPU核心数">
          {{ systemInfo.NCPU }}
        </el-descriptions-item>
        <el-descriptions-item label="数据目录">
          {{ systemInfo.DockerRootDir }}
        </el-descriptions-item>
        <el-descriptions-item label="CPU架构">
          {{ systemInfo.Architecture }}
        </el-descriptions-item>
        <el-descriptions-item label="日志驱动">
          {{ systemInfo.LoggingDriver }}
        </el-descriptions-item>
        <el-descriptions-item label="Cgroup驱动">
          {{ systemInfo.CgroupDriver }}
        </el-descriptions-item>

      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockerDashboard',
}
</script>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { getSystemInfo } from '@/api/docker/system'
import { listVolume } from '@/api/docker/volume'
import { listNetwork } from '@/api/docker/network'
import {
  listContainer,
} from '@/api/docker/container'
import {
  getHostList,
} from '@/api/docker/host'
import { listImage } from '@/api/docker/image'

const stats = ref({
  container: 0,
  image: 0,
  network: 0,
  volume: 0
})

// 获取系统信息
const systemInfo = ref({})
const GetSystemInfo = async() => {
  const res = await getSystemInfo(currentHost.value)
  if (res.code === 0) {
    systemInfo.value = res.data
  }
}

// 获取存储卷列表
const ListVolume = async() => {
  const res = await listVolume(currentHost.value,{
    name: '',
  })
  if (res.code === 0) {
    stats.value.volume = res.data.total
  }
}

// 获取网络列表
const ListNetwork = async() => {
  const res = await listNetwork(currentHost.value,{
    name: '',
  })
  if (res.code === 0) {
    stats.value.network = res.data.total
  }
}

// ListImage 获取镜像列表
const ListImage = async() => {
  const res = await listImage(currentHost.value,{
    name: '',
  })
  if (res.code === 0) {
    stats.value.image = res.data.total
  }
}

// 获取容器列表
const ListContainer = async() => {
  const res = await listContainer(currentHost.value,{
    name: '',
  })
  if (res.code === 0) {
    stats.value.container = res.data.total
  }
}


const hostList = ref([])
const initHostList =async () =>{
  hostList.value = []
  const res = await getHostList({
    pageSize: 10000,
  })
  if (res.code === 0) {
    for(let i=0 ; i < res.data.list.length; i++ ){
      hostList.value.push({
        value: res.data.list[i].name,
        label: res.data.list[i].name,
      })
    }
  }
}

const currentHost = ref('host')
const initCurrentHost = ()=>{
  const host = window.localStorage.getItem("currentHost")
  if (host){
    currentHost.value = host
  }
}

const currentChange = (e)=>{
  currentHost.value = e
  window.localStorage.setItem("currentHost",e)
  initData()
}


const initData = () => {
  GetSystemInfo()
  ListImage()
  ListVolume()
  ListNetwork()
  ListContainer()
}


onMounted(() => {
  initCurrentHost()
  initHostList()
  initData()
})

</script>
<style>
body {
  font-family: Consolas;
}
.card-title{
  font-size: 24px;
}
.sort-card {
  text-align: center;
  width: 200px;
  height: 150px;
}

</style>
