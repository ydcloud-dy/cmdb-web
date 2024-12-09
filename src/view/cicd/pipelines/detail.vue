<template>
  <div style="width: 100%; padding: 20px;">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item @click="goToHome" style="cursor: pointer;">首页</el-breadcrumb-item>
      <el-breadcrumb-item @click="goBack" style="cursor: pointer;">流水线</el-breadcrumb-item>
      <el-breadcrumb-item>构建详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 标题 -->
    <h2 style="margin: 20px 0;">构建详情</h2>

    <!-- 标签页 -->
    <el-tabs
        v-model="activeTab"
        type="border-card"
        tab-bar-style="border-bottom: 2px solid #409EFF;"
        class="custom-tabs"
    >
      <el-tab-pane label="基本信息" name="basic-info">
        <h3 style="margin-bottom: 20px;">基本信息</h3>
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column prop="label" label="字段" width="150"></el-table-column>
          <el-table-column prop="value" label="值"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="流程编排" name="flow-design">
        流程编排内容...
      </el-tab-pane>
      <el-tab-pane label="消息通知" name="message-notify">
        <div style="padding: 20px;">
          <!-- 消息通知标题和描述 -->
          <h3>消息通知</h3>
          <p style="color: #888;">开启通知提醒开关，并配置通知事件和通知方式</p>

          <!-- 通知开关 -->
          <el-form>
            <el-form-item label="通知提醒：" style="margin-bottom: 20px;">
              <el-switch v-model="notificationEnabled" />
            </el-form-item>
          </el-form>

          <!-- 如果开关开启，显示详细配置 -->
          <div v-if="notificationEnabled">
            <!-- 通知事件 -->
            <el-form-item label="通知事件：" style="margin-bottom: 20px;">
              <el-checkbox-group v-model="selectedEvents">
                <el-checkbox label="构建开始" />
                <el-checkbox label="构建成功" />
                <el-checkbox label="构建失败" />
                <el-checkbox label="构建中止" />
              </el-checkbox-group>
            </el-form-item>

            <!-- 通知方式 -->
            <el-form-item label="通知方式：" style="margin-bottom: 20px;">
              <!-- Webhook描述 -->
<!--              <div style="display:flex; margin-bottom: 10px; color: #888;">-->
<!--                Webhook通知 推送一条POST请求，详细样例见文档-->
<!--              </div>-->
              <div>
              <p>Webhook通知 推送一条POST请求，详细样例见文档</p>

              <!-- 选择框和输入框在一行 -->
              <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <el-select v-model="notificationMethod" placeholder="选择通知方式" style="flex: 2;">
                  <el-option label="钉钉通知" value="钉钉通知" />
                  <el-option label="飞书通知" value="飞书通知" />
                </el-select>
                <el-input v-model="webhookUrl" placeholder="请输入Webhook URL" style="flex: 3;" />
              </div>

              <!-- 动态提示信息 -->
              <div style="margin-top: 10px; font-size: 12px; color: #409EFF;">
                <span v-html="dynamicHelpText"></span>
              </div>
              </div>
            </el-form-item>
            <!-- 提交按钮 -->
            <el-button type="primary" @click="updateNotification">更新</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="缓存目录" name="cache-dir">
        <div style="padding: 20px;">
          <!-- 缓存目录标题和描述 -->
          <h3>缓存目录</h3>
          <p style="color: #888;">持续交付默认提供以下缓存目录，用于提高构建效率</p>

          <!-- 缓存配置开关 -->
          <el-form>
            <el-form-item label="缓存配置" style="margin-bottom: 20px;">
              <el-switch v-model="cacheEnabled" />
            </el-form-item>
          </el-form>

          <!-- 缓存选项 -->
          <div v-if="cacheEnabled">
            <el-form-item>
              <el-radio-group v-model="cacheOption">
                <el-radio label="workspace">工作空间 ${WORKSPACE}/cache</el-radio>
                <el-radio label="custom">自定义目录</el-radio>
              </el-radio-group>
            </el-form-item>

            <!-- 自定义目录输入框 -->
            <el-form-item v-if="cacheOption === 'custom'" style="margin-top: 10px;">
              <el-input
                  v-model="customCachePath"
                  placeholder="以变量方式定义，例如：${WORKSPACE}/gomod"
              />
            </el-form-item>

            <!-- 保存和取消按钮 -->
            <el-form-item style="margin-top: 20px;">
              <el-button type="primary" @click="saveCacheConfig">保存</el-button>
              <el-button @click="cancelCacheConfig">取消</el-button>
            </el-form-item>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="构建历史" name="build-history">
        构建历史内容...
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import { ref, reactive,computed } from "vue";
import {onMounted} from "vue";
import {describeApplications} from "@/api/cicd/applications";
import {DescribePipelines} from "@/api/cicd/pipelines";
import dayjs from "dayjs"; // 引入 dayjs

const router = useRouter()
const route = useRoute()
const id = route.query.id

const activeTab = ref("basic-info");
const tableData = reactive([

]);
onMounted(async () => {
  console.log("Pipeline ID:", id);
  try {
    const res = await DescribePipelines(id);

    if (res.code === 0 && res.data) {
      const data = res.data;
      const formattedCreatedAt = dayjs(data.CreatedAt).format("YYYY-MM-DD HH:mm:ss");

      tableData.push(
          { label: "应用标识", value: data.app_name },
          { label: "仓库地址", value: data.git_url },
          { label: "环境", value: data.env_name },
          { label: "创建时间", value: formattedCreatedAt },
          { label: "默认分支", value: data.git_branch },
          { label: "凭证", value: data.registry_user }
      );
    } else {
      console.error("API 返回错误: ", res.msg);
    }
  } catch (error) {
    console.error("请求错误: ", error);
  }
})
const notificationEnabled = ref(false);
const selectedEvents = ref(["构建开始", "构建成功"]);
// 通知方式和 Webhook URL
const notificationMethod = ref("钉钉通知");
const webhookUrl = ref("");
// 动态更新帮助文本
const dynamicHelpText = computed(() => {
  if (notificationMethod.value === "钉钉通知") {
    return '添加钉钉机器人方式， 可参考 <a href="https://open.dingtalk.com" target="_blank">钉钉开放平台</a>';
  } else if (notificationMethod.value === "飞书通知") {
    return '添加飞书机器人方式， 可参考 <a href="https://open.feishu.cn" target="_blank">飞书开发者指南</a>';
  }
  return "请选择通知方式并填写Webhook URL";
});
// 更新通知配置
const updateNotification = () => {
  console.log("通知配置已更新：", {
    notificationEnabled: notificationEnabled.value,
    selectedEvents: selectedEvents.value,
    notificationMethod: notificationMethod.value,
    webhookUrl: webhookUrl.value,
  });
};

// 缓存配置开关状态
const cacheEnabled = ref(false);

// 缓存选项（默认选择 workspace）
const cacheOption = ref("workspace");

// 自定义目录输入框内容
const customCachePath = ref("");

// 保存缓存配置
const saveCacheConfig = () => {
  console.log("缓存配置已保存:", {
    cacheEnabled: cacheEnabled.value,
    cacheOption: cacheOption.value,
    customCachePath: customCachePath.value,
  });
};

// 取消缓存配置
const cancelCacheConfig = () => {
  console.log("缓存配置已取消");
  cacheEnabled.value = false;
  cacheOption.value = "workspace";
  customCachePath.value = "";
};
const goToHome = () => {
  router.push("/");
};

// 点击流水线返回上一个页面
const goBack = () => {
  router.back(); // 或者使用 router.go(-1);
};
</script>

<style scoped>
/* 设置选项卡样式 */
.custom-tabs >>> .el-tabs__item.is-active {
  color: #409EFF;
  font-weight: bold;
}

.custom-tabs >>> .el-tabs__active-bar {
  height: 3px;
  background: #409EFF;
}
</style>
