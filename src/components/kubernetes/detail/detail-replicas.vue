<template>
  <div>
    <h3>副本数</h3>
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
  name: 'DetailReplicas',
}
</script>
<script setup>
import { ref } from 'vue'
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
const DetailDataInit = async() => {
  Detaildata.value = props.data
}

DetailDataInit()

// 更新
const handleUpdate = (value) => {
  emit('update', value)
  enableEdit.value = false
}
</script>
<style scoped>

</style>
