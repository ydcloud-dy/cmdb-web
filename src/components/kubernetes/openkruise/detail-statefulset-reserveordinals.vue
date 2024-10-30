<template>
  <div>
    <h3>序号保留（跳过）</h3>
    <warning-bar title="注：选择需要保留的序号，Advanced StatefulSet 会自动跳过创建这些序号的 Pod。如果 Pod 已经存在，则会被删除，" />
    <el-button v-if="!enableEdit" style="margin-left: 10px;" size="small" type="primary" icon="edit" @click="enableEdit = true">
      编辑信息
    </el-button>
    <div>
      <el-form ref="form" label-position="top" :model="Detaildata">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="副本数" prop="spec.replicas">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ Detaildata.spec.replicas }}  个副本</span>
              <el-input v-else v-model.number="Detaildata.spec.replicas" type="number" placeholder="请输入" min="1" oninput="value=value.replace(/[^\d]/g,'')" />
            </el-form-item>
            <el-form-item v-if="enableEdit" label="Pod序号" prop="spec.reserveOrdinals">
              <el-select
                v-model="PodsNumberList"
                multiple
                placeholder="请选择Pod"
                style="width: 100%"
              >
                <el-option
                  v-for="item in PodsNumberData"
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
  name: 'DetailStatefulSetreserveOrdinals',
}
</script>
<script setup>
import { ref } from 'vue'
import WarningBar from '@/components/warningBar/warningBar.vue'
const emit = defineEmits(['update'])
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  }
})

// 数据初始化
const Detaildata = ref({})
const enableEdit = ref(false)
const PodsNumberList = ref([])
const PodsNumberData = ref([])
const DetailDataInit = async() => {
  Detaildata.value = props.data
  Detaildata.value.spec['reserveOrdinals'] = PodsNumberList.value
}

DetailDataInit()

// 更新
const handleUpdate = (value) => {
  if (PodsNumberList.value.length > 0) {
    value.spec['reserveOrdinals'] = PodsNumberList.value
  }
  emit('update', value)
  enableEdit.value = false
}

// 副本数更改
const NumberChange = () => {
  PodsNumberData.value = []
  for (let num = 0; num <= 10; num++) {
    const item = {
      id: Math.random(),
      name: num,
    }
    PodsNumberData.value.push(item)
  }
}

NumberChange()
</script>
<style scoped>

</style>
