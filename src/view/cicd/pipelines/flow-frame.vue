<template>
  <div class="task-manager" :style="{ 'transform: ': 'translateY(' + transformIndex[props.y]?.transformIndex + 'px)' }"
    v-if="isShow">

    <div class="task-item" ref="taskItem">
      <div class="task-item1">
        <div class="header" style="cursor: pointer" v-if="transformIndex[props.y]?.ishowHeader">
          <el-tag effect="dark"  round @click="editTask">
            {{ taskName }}
          </el-tag>
        </div>


        <div class="line-container">
          <div class="solid-line"></div>
          <div class="circle" :style="{ backgroundColor: hover ? 'lightcoral' : 'white' }" @mouseenter="hover = true"
            @mouseleave="hover = false" @click="handleCircleClick">
            !
          </div>
          <div class="solid-line"></div>
        </div>


        <div class="rectangle-container">
          <div class="rectangle">
            <div class="dashed-line left-dashed"></div>
            <span class="text2">admin</span>
            <div class="dashed-line right-dashed"></div>
          </div>

          <div v-if="transformIndex[y]?.isShowwAdd" class="rectangle-bottom">
            <div class="dashed-segment left-segment"></div>
            <div class="button-container">
              <button @click="createTask">+ 新建并行任务</button>
            </div>
            <div class="dashed-segment right-segment"></div>
          </div>
        </div>
      </div>
      <div class="task-item2" v-if="transformIndex[props.y]?.ishowHeader"><button class="flow-item-add" @click="openAddTaskDialogFlow">+</button></div>
    </div>

  </div>
</template>
  
<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { ElMessage, ElScrollbar, ElTag } from 'element-plus'

const taskItem = ref(null);
const data = ref(0)
const emits = defineEmits(['handleCircleClick', 'createTask', 'openAddTaskDialogFlow','editTask'])
const props = defineProps({
  
  isShow: {
    type: Boolean,
    required: false,
    default: false
  },
  x: {
    type: Number,
    required: false,
    default: -1
  },
  y: {
    type: Number,
    required: false,
    default: -1
  },
  isShowwAdd: {
    type: Boolean,
    required: false,
    default: true
  },
  transformIndex: {
    type: Object,
    required: false,
    default: 0
  },
  taskName: {
    type: String,
    required: false,
    default: '#test'
  },

})
const hover = ref(false)

const handleCircleClick = () => {
  emits("handleCircleClick")
}
const openAddTaskDialogFlow = () => {
  emits("openAddTaskDialogFlow", props.x, props.y)
}
const createTask = () => {
  emits("createTask")
}

const editTask = () => {
  emits("editTask")
}

watch(
  () => props.transformIndex[props.y]?.transformIndex,
  (newVal, oldVal) => {
    if (taskItem.value) {
      // if (taskItem.value.style.transform == 0) {
      //   taskItem.value.style.position = 'absolute'; // 必须设置为绝对定位
      //   taskItem.value.style.transform = 'translateY(0px)'; // 向上移动 50 像素
      //   taskItem.value.style.zIndex = '-1'; // 设置 z-index 到较高值以覆盖其他元素
      // } else {
      //   taskItem.value.style.position = 'absolute'; // 必须设置为绝对定位
      //   taskItem.value.style.transform = 'translateY(0px)'; // 向上移动 50 像素
      //   taskItem.value.style.zIndex = '-1'; // 设置 z-index 到较高值以覆盖其他元素
      // }

    }
  }
)


</script>
  
<style scoped>
@import './style/flow-index.scss';
</style>
  