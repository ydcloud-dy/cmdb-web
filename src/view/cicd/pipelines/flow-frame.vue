<template>
  <div
    class="task-manager"
    :style="{
      'transform: ':
        'translateY(' + transformIndex[props.y]?.transformIndex + 'px)',
    }"
  >
    <div class="task-item" ref="taskItem">
      <div class="task-item1">
        <div class="line-container" ref="lineContainer">
          <div class="solid-line"></div>
          <div
            class="circle"
            :style="{ backgroundColor: hover ? 'lightcoral' : 'white' }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            @click="handleCircleClick(transformIndex)"
          >
            !
          </div>
          <div class="solid-line"></div>
        </div>

        <div class="rectangle-container">
          <div class="rectangle" ref="rectangle">
            <div class="dashed-line left-dashed" ref="leftRectangle"></div>
            <span class="text2">
              {{ transformIndex.name || "未命名" }}
            </span>
            <div class="dashed-line right-dashed" ref="rightRectangle"></div>
          </div>
          <div v-if="isShowwAdd" class="rectangle-bottom">
            <div class="dashed-segment left-segment"></div>
            <div class="button-container">
              <button @click="createTask">+ 新建并行任务</button>
            </div>
            <div class="dashed-segment right-segment"></div>
          </div>
        </div>
      </div>
      <div class="task-item2" v-if="isShowAddTaskDialog">
        <button class="flow-item-add" @click="openAddTaskDialogFlow">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { ElMessage, ElScrollbar, ElTag } from "element-plus";

const taskItem = ref(null);
const leftRectangle = ref(null);
const rightRectangle = ref(null);
const rectangle = ref(null);
const lineContainer = ref(null);
const data = ref(0);
const emits = defineEmits([
  "handleCircleClick",
  "createTask",
  "openAddTaskDialogFlow",
  "editTask",
]);

const props = defineProps({
  isShow: {
    type: Boolean,
    required: false,
    default: false,
  },
  x: {
    type: Number,
    required: false,
    default: -1,
  },
  y: {
    type: Number,
    required: false,
    default: -1,
  },
  isShowwAdd: {
    type: Boolean,
    required: false,
    default: true,
  },
  transformIndex: {
    type: Object,
    required: false,
    default: 0,
  },
  taskName: {
    type: String,
    required: false,
    default: "",
  },
  phaseName: {
    type: String,
    required: false,
    default: "",
  },
  isShowAddTaskDialog: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const hover = ref(false);

const handleCircleClick = (transformIndex) => {
  emits("handleCircleClick", transformIndex);
};
const openAddTaskDialogFlow = () => {
  emits("openAddTaskDialogFlow", props.x, props.y);
};
const createTask = () => {
  emits("createTask");
};

const editTask = () => {
  emits("editTask");
};

watch(
  () => props.transformIndex[props.y]?.transformIndex,
  (newVal, oldVal) => {
    if (rectangle.value) {
      if (props.transformIndex[props.y]?.transformIndex == 0) {
        rectangle.value.style.borderLeft = "1px dashed gray";
        rectangle.value.style.borderRight = "1px dashed gray";
      } else {
        rectangle.value.style.borderLeft = "1px solid gray";
        rectangle.value.style.borderRight = "1px solid gray";
        // lineContainer.value.style.marginLeft = "15px";
        // lineContainer.value.style.width = "230px";
      }
    }
  }
);
onMounted(() => {
  console.log("Received phaseName:", props.phaseName);
  console.log("Received taskName:", props.taskName);
});
</script>

<style scoped>
@import "./style/flow-index.scss";
</style>
