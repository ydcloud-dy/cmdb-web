<template>
  <div>
    <h3>指定Pod缩容</h3>
    <warning-bar title="注：指定Pod缩容, 提交副本数必须小于当前副本数才能生效，否则只会删除指定Pod ！" />
    <el-button v-if="!enableEdit" style="margin-left: 10px;" size="small" type="primary" icon="edit" @click="enableEdit = true">
      编辑信息
    </el-button>
    <div>
      <el-form ref="form" label-position="top" :model="Detaildata">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="当前副本数" prop="spec.replicas">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ Detaildata.spec.replicas }}  个副本</span>
              <el-input v-else v-model.number="Detaildata.spec.replicas" type="number" placeholder="请输入" min="1" oninput="value=value.replace(/[^\d]/g,'')" />
            </el-form-item>
            <el-form-item v-if="enableEdit" label="Pod名称" prop="spec.scaleStrategy.podsToDelete">
              <el-select
                v-model="PodsListData"
                multiple
                placeholder="请选择Pod"
                style="width: 100%"
              >
                <el-option
                  v-for="item in PodsData"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div v-if="enableEdit" style="float:right">
          <el-button @click="handleUpdate(Detaildata)">提交</el-button>
          <el-button @click="enableEdit = false">取消</el-button>
        </div>
        <br>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCloneSetScaleSrategy',
}
</script>
<script setup>
import { ref } from 'vue'
import {GetPodsList} from '@/api/kubernetes/pods'
import WarningBar from '@/components/warningBar/warningBar.vue'
const emit = defineEmits(['update'])
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  selectors: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 数据初始化
const Detaildata = ref({})
const enableEdit = ref(false)
const DetailSelectors = ref('')
const DetailDataInit = async() => {
  Detaildata.value = props.data
  DetailSelectors.value = props.selectors
}

DetailDataInit()

// Pod列表获取
const PodsData = ref([])
const PodsListData = ref([])
const PodLists = async() => {
  const res = await GetPodsList(Detaildata.value.cluster_id, '', '', Detaildata.value.metadata.namespace, '', DetailSelectors.value, '')
  if (res.code === 0 && res.data.items) {
    for (const pod of res.data.items) {
      const item = {
        id: Math.random(),
        name: pod.metadata.name,
      }
      PodsData.value.push(item)
    }
  }
}

PodLists()

// 更新
const handleUpdate = (value) => {
  if (PodsListData.value.length) {
    value.spec.scaleStrategy.podsToDelete = PodsListData.value
    emit('update', value)
    enableEdit.value = false
  }
}
</script>
<style scoped>

</style>
