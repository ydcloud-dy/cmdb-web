<template>
  <div>
    <h3>容器镜像</h3>
    <el-button v-if="!enableEdit" style="margin-left: 10px;" size="small" type="primary" icon="edit" @click="enableEdit = true">
      编辑信息
    </el-button>
    <div>
      <el-form ref="form" label-position="top" :model="Detaildata">
        <el-row :gutter="20">
          <el-col v-for="(item, index) in Detaildata.spec.template.spec.containers" :key="index" :span="12">
            <el-form-item prop="spec.replicas" :label="'容器名称 '+item.name + ':'">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ item.name }}  镜像： {{ item.image }} </span>
              <el-input v-else v-model="item.image" placeholder="请输入" />
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
