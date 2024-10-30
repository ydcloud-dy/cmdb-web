<template>
  <div>
    <el-row :gutter="20" class="row-box">
      <el-col :span="24">
        <el-card class="el-card">
          <detail-basic :form="detailData" />
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-tabs style="margin-top: 20px" tab-position="top" type="border-card">
          <el-tab-pane lazy label="规则">
            <div>
              <div>
                <el-alert v-if="detailData.length === 0" type="info">
                  <div slot="title">
                    <i class="el-icon-info" />
                    <span>此处显示与 {0} 同名的 Ingress: {1}，但是您并未定义此 Ingress。</span>
                  </div>
                </el-alert>
                <div>
                  <el-table v-if="detailData.spec.rules.length > 0" :data="detailData.spec.rules">
                    <el-table-column label="域名" prop="host" />
                    <el-table-column
                      label="路径"
                      prop="http"
                      type="scope"
                    >
                      <template #default="scope">
                        <div v-for="(item, index) in scope.row.http.paths" :key="index">
                          <span>{{ item.path }}</span>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="服务名"
                      prop="http"
                      type="scope"
                    >
                      <template #default="scope">
                        <div v-if="detailData.apiVersion === 'networking.k8s.io/v1'">
                          <div v-for="(item, index) in scope.row.http.paths" :key="index">
                            <span>{{ item.backend.service.name }}</span>
                          </div>
                        </div>
                        <div v-else>
                          <div v-for="(item, index) in scope.row.http.paths" :key="index">
                            <span>{{ item.backend.serviceName }}</span>
                          </div>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="端口"
                      prop="http"
                      type="scope"
                    >
                      <template #default="scope">
                        <div v-if="detailData.apiVersion === 'networking.k8s.io/v1'">
                          <div v-for="(item, index) in scope.row.http.paths" :key="index">
                            <span>{{ item.backend.service.port.number }}</span>
                          </div>
                        </div>
                        <div v-else>
                          <div v-for="(item, index) in scope.row.http.paths" :key="index">
                            <span>{{ item.backend.servicePort }}</span>
                          </div>
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                  <br><br>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DetailBlock',
}
</script>
<script setup>
import DetailBasic from '@/components/kubernetes/detail/detail-basic.vue'
// import DetailPods from '@/components/kubernetes/detail/detail-pods.vue'
// import DetailPorts from '@/components/kubernetes/detail/detail-ports.vue'
import { ref } from 'vue'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 标签选择器
const Selectors = ref('')
const SelectormatchLabel = async() => {
  if (detailData.value.spec.selector) {
    for (const key in detailData.value.spec.selector) {
      if (Object.prototype.hasOwnProperty.call(detailData.value.spec.selector, key)) {
        Selectors.value += key + '=' + detailData.value.spec.selector[key] + ','
      }
    }
    Selectors.value = Selectors.value.length !== 0 ? Selectors.value.substring(0, Selectors.value.length - 1) : ''
  }
}
// 数据初始化
const activeName = ref('')
const detailData = ref({})
const detailInitData = () => {
  activeName.value = 'pods'
  detailData.value = props.data
  SelectormatchLabel()
}

detailInitData()

</script>
<style scoped>

</style>
