<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        tooltip-effect="dark"
        row-key="ID"
        @sort-change="sortChange"
        @selection-change="handleSelectionChange"
        highlight-current-row

    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="ID" prop="ID" width="80" sortable="custom" />
      <!-- 应用名列，添加 el-link 以实现跳转 -->
      <el-table-column align="left" label="应用名" prop="appName" sortable="custom">
        <template #default="scope">
          <el-link @click.prevent="goToDetail(scope.row.ID)" style="cursor: pointer;">{{ scope.row.appName }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="left" label="应用标识" prop="appCode" />
      <el-table-column align="left"  label="语言" prop="language" />
      <el-table-column align="left" label="默认分支" prop="branch" />

      <!-- 可点击的仓库地址列 -->
      <el-table-column align="left" label="仓库地址" prop="gitRepo" show-overflow-tooltip>
        <template #default="scope">
          <el-link :href="scope.row.gitRepo" target="_blank">{{ scope.row.gitRepo }}</el-link>
        </template>
      </el-table-column>


      <el-table-column align="left" label="创建时间" prop="CreatedAt" :formatter="formatDate" />

      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-popover v-model="scope.row.visible" placement="top">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
              <el-button size="small" type="primary" link @click="scope.row.visible = false">取消</el-button>
              <el-button type="primary" size="small" @click="handleDelete(scope.row)">确定</el-button>
            </div>
            <template #reference>
              <el-button type="primary" link icon="delete" size="small" @click="scope.row.visible = true">删除</el-button>
            </template>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑弹窗 -->
    <el-dialog title="修改应用" v-model="editDialogVisible" width="700px">
      <template v-if="dialogStep === 1">

        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="120px">
        <h3>基本信息</h3>
        <el-form-item label="代码仓库" prop="gitRepo">
          <el-input v-model="editForm.gitRepo" placeholder="请输入代码仓库地址" />
        </el-form-item>
        <el-form-item label="主干分支" prop="branch">
          <el-input v-model="editForm.branch" placeholder="请输入主干分支" />
        </el-form-item>
        <el-form-item label="应用名称" prop="appName">
          <el-input v-model="editForm.appName" placeholder="请输入应用名称" />
        </el-form-item>
        <el-form-item label="应用标识" prop="appCode">
          <el-input v-model="editForm.appCode" placeholder="请输入应用标识" />
        </el-form-item>
        <el-form-item label="应用描述" prop="appDesc">
          <el-input
              v-model="editForm.appDesc"
              type="textarea"
              maxlength="100"
              show-word-limit
              placeholder="请输入应用描述"
          />
        </el-form-item>

        <h3>研发信息</h3>
        <el-form-item label="负责人" prop="owner">
          <el-select
              v-model="editForm.owner"
              multiple
              placeholder="请选择负责人"
              value-key="ID"
              :clearable="true"
          >
            <el-option
                v-for="user in editFormUsers"
                :key="user.ID"
                :label="`${user.userName} / ${user.nickName}`"
                :value="user.ID"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="开发" prop="developers">
          <el-select
              v-model="editForm.developers"
              multiple
              placeholder="请选择开发人员"
              value-key="ID"
              :clearable="true"
          >
            <el-option
                v-for="user in editFormUsers"
                :key="user.ID"
                :label="`${user.userName} / ${user.nickName}`"
                :value="user.ID"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="程序设计语言" prop="language">
          <el-select v-model="editForm.language" placeholder="请选择程序设计语言">
            <el-option label="Java" value="java" />
            <el-option label="Golang" value="golang" />
            <el-option label="Python" value="python" />
          </el-select>
        </el-form-item>
<!--        <el-form-item label="是否核心应用" prop="isCore">-->
<!--          <el-radio-group v-model="editForm.isCore">-->
<!--            <el-radio :label="false">否</el-radio>-->
<!--            <el-radio :label="true">是</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="nextStep">下一步</el-button>
      </div>
      </template>
      <template v-else-if="dialogStep === 2">
        <el-form
            ref="formRef"
            :model="environments"
            :rules="formRules"
            label-width="80px"
        >
          <div>
            <el-row
                v-for="(item, index) in environments"
                :key="index"
                :gutter="20"
                align="middle"
            >
              <el-col :span="6">
                <el-form-item
                    label="环境"
                    :prop="'[' + index + '].env'"
                >
                  <el-select
                      v-model="item.env"
                      placeholder="请选择环境"
                      clearable
                  >
                    <el-option
                        v-for="env in environmentOptions"
                        :key="env.value"
                        :label="env.label"
                        :value="env.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item
                    label="集群"
                    :prop="'[' + index + '].cluster'"
                >
                  <el-select
                      v-model="item.cluster"
                      placeholder="请选择容器集群"
                      clearable
                  >
                    <el-option
                        v-for="cluster in clusterOptions"
                        :key="cluster.value"
                        :label="cluster.label"
                        :value="cluster.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item
                    label="空间"
                    :prop="'[' + index + '].namespace'"
                >
                  <el-input
                      v-model="item.namespace"
                      placeholder="请输入命名空间"
                      clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-button
                    type="text"
                    icon="el-icon-delete"
                    circle
                    @click="removeEnvironment(index)"
                />
              </el-col>
            </el-row>
            <el-button
                type="dashed"
                icon="el-icon-plus"
                @click="addEnvironment"
                style="width: 100%; border: 2px dashed #dcdfe6; margin-top: 20px; background: none; color: #606266;"
            >
              添加环境
            </el-button>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogStep = 1">上一步</el-button>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </div>
        </el-form>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { toSQLLine } from '@/utils/stringFun'
import { useRouter } from 'vue-router' // 使用 Vue Router 进行页面跳转
import { ElMessage} from "element-plus";
import { describeApplications,updateApplications} from "@/api/cicd/applications";
import {getUserList} from "@/api/user";
import {onMounted} from "vue";
import {getEnvList} from "@/api/configurationCenter/environment";
import {getClustersList} from "@/api/kubernetes/cluster/k8sCluster";
import {getTable} from "@/api/autoCode";

const router = useRouter() // 初始化 router

const emit = defineEmits(['update', 'delete', 'search', 'region', 'test'])
defineProps({
  tableData: {
    default: function() {
      return []
    },
    type: Array
  },
})
const dialogStep = ref(1); // 初始值为 1 表示第一步

// 控制弹窗是否显示
const editDialogVisible = ref(false)

// 编辑表单的数据
const editForm = ref({
  ID: '',
  gitRepo: '',
  branch: '',
  appName: '',
  appCode: '',
  appDesc: '',
  language: '',
  owner: [],
  developers:[],
})
// 表单校验规则
const editFormRules = {
  gitRepo: [{ required: true, message: '代码仓库不能为空', trigger: 'blur' }],
  branch: [{ required: true, message: '主干分支不能为空', trigger: 'blur' }],
  appCode: [{ required: true, message: '应用标识不能为空', trigger: 'blur' }],
  appName: [{ required: true, message: '应用名称不能为空', trigger: 'blur' }],
  owner: [{ required: true, message: '负责人不能为空', trigger: 'change' }],
  developers: [{ required: true, message: '开发人员不能为空', trigger: 'change' }],
  language: [{ required: true, message: '程序设计语言不能为空', trigger: 'change' }],
}
// 日期格式化函数
const formatDate = (row, column, cellValue) => {
  return cellValue ? dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss') : ''
}

// 搜索排序
const searchInfo = ref({})
const sortChange = ({ prop, order }) => {
  if (prop) {
    if (prop === 'ID') {
      prop = 'id'
    }
    searchInfo.value.orderKey = toSQLLine(prop)
    searchInfo.value.desc = order === 'descending'
  }
  emit('search', searchInfo.value)
}


const formRef = ref(null);

const formRules = {
  env: [{ required: true, message: '请选择环境', trigger: 'change' }],
  cluster: [{ required: true, message: '请选择集群', trigger: 'change' }],
  namespace: [{ required: true, message: '请输入命名空间', trigger: 'blur' }],
};
const nextStep = async () => {
  if (dialogStep.value === 1) {
    // 验证第一步表单的有效性
    const isValid = await editFormRef.value.validate();
    if (isValid) {
      // 加载环境和集群数据
      await fetchEnvList();
      await fetchClusterList();
      dialogStep.value = 2; // 切换到第二步
    }
  }
};

const editFormRef = ref(null); // 用于绑定表单的 ref

const addEnvironment = () => {
  environments.value.push({
    env: '',
    cluster: '',
    namespace: '',
  });
};

const removeEnvironment = (index) => {
  if (environments.value.length > 1) {
    environments.value.splice(index, 1);
  } else {
    ElMessage.warning("至少需要一个环境配置！");
  }
};

const environments = ref([
  {
    env: '', // 环境，例如 "开发环境"
    cluster: '', // 集群，例如 "test"
    namespace: '', // 空间，例如 "default"
  },
]);
const clusters = ref([]); // 存储集群列表

const environmentOptions = ref([]); // 存储从接口获取的环境选项
const clusterOptions = ref([]); // 存储从接口获取的集群选项
const fetchEnvList = async () => {
  const response = await getEnvList({ page: 1, pageSize: 1000 });
  if (response.code === 0) {
    environmentOptions.value = response.data.list.map(env => ({
      value: env.key, // 使用 key 作为实际值
      label: env.name, // 使用 name 作为显示值
    }));
  } else {
    ElMessage.error('获取环境列表失败！');
  }
};

const fetchClusterList = async () => {
  const response = await getClustersList({ page: 1, pageSize: 1000 });
  if (response.code === 0) {
    clusterOptions.value = response.data.list.map(cluster => ({
      value: cluster.id, // 使用 id 作为实际值
      label: cluster.name, // 使用 name 作为显示值
    }));
  } else {
    ElMessage.error('获取集群列表失败！');
  }
};
const submitForm = async () => {
  try {
    // 校验表单
    const isValid = await formRef.value.validate();
    if (!isValid) {
      ElMessage.error('请检查表单信息是否完整！');
      return;
    }

    // 构造提交的 JSON 数据
    const formattedData = {
      envs: environments.value.map((env) => {
        // 查找匹配的集群信息
        const cluster = clusterOptions.value.find(c => c.value === env.cluster); // 确保 `env.cluster` 是 `clusterId`

        // 查找匹配的环境信息
        const environment = environmentOptions.value.find(e => e.value === env.env);

        return {
          ID: env.ID || null, // 如果是新增环境，ID 应为 null
          clusterName: cluster ? cluster.label : '', // 使用选中的集群名称
          clusterId: cluster ? cluster.value : null, // 使用选中的集群 ID
          envCode: env.env, // 环境代码
          envName: environment ? environment.label : '', // 使用选中的环境名称
          namespace: env.namespace, // 命名空间
        };
      }),
      app: {
        ID: editForm.value.ID,
        gitRepo: editForm.value.gitRepo,
        branch: editForm.value.branch,
        appName: editForm.value.appName,
        appCode: editForm.value.appCode,
        appDesc: editForm.value.appDesc,
        develop: editForm.value.developers.map(devId => {
          const dev = editFormUsers.value.find(user => user.ID === devId);
          return {
            ID: dev.ID,
            label: dev.nickName,
            value: dev.userName,
            key: dev.nickName,
            option: {
              avatar: dev.avatar || '',
              nickname: dev.nickName,
              username: dev.userName,
            },
            originLabel: dev.nickName,
          };
        }),
        owner: editForm.value.owner.map(ownerId => {
          const owner = editFormUsers.value.find(user => user.ID === ownerId);
          return {
            ID: owner.ID,
            label: owner.nickName,
            value: owner.userName,
            key: owner.nickName,
            option: {
              avatar: owner.avatar || '',
              nickname: owner.nickName,
              username: owner.userName,
            },
            originLabel: owner.nickName,
          };
        }),
        language: editForm.value.language,
      },
    };

    console.log('提交数据:', formattedData);

    // 调用接口提交数据
    const res = await updateApplications(formattedData);
    if (res.code === 0) {
      ElMessage.success('应用更新成功！');
      editDialogVisible.value = false; // 关闭对话框
      dialogStep.value = 1;
      emit('update', '');
    } else {
      ElMessage.error(res.msg || '更新应用失败！');
    }
  } catch (error) {
    console.error('提交表单时出错:', error);
    ElMessage.error('提交失败，请稍后重试！');
  }
};


// 更新
const handleUpdate = async (row) => {
  try {
    const response = await describeApplications(row.ID);
    if (response.code === 0) {
      const data = response.data;
      console.log(data)
      // 合并用户数据
      const newUsers = [
        ...data.owner.map(owner => ({
          ID: owner.ID,
          userName: owner.userName || owner.value,
          nickName: owner.nickName || owner.label,
        })),
        ...data.develop.map(developer => ({
          ID: developer.ID,
          userName: developer.userName || developer.value,
          nickName: developer.nickName || developer.label,
        })),
      ];

      const combinedUsers = [...editFormUsers.value, ...newUsers];

      // 去重处理（根据 userName 去重）
      editFormUsers.value = Array.from(
          new Map(combinedUsers.map(user => [user.userName, user])).values()
      );

      console.log('去重后的用户列表:', editFormUsers.value);
      // 将 envs 数据映射到 environments 中
      environments.value = data.envs.map(env => ({
        ID: env.ID,
        env: env.envCode, // 使用 envCode 作为环境值
        cluster: env.clusterName, // 使用 clusterName 作为集群值
        namespace: env.namespace, // 使用 namespace
      }));
      // 填充表单
      editForm.value = {
        ID: data.ID,
        gitRepo: data.gitRepo || '',
        branch: data.branch || '',
        appName: data.appName || '',
        appCode: data.appCode || '',
        appDesc: data.appDesc || '',
        language: data.language || '',
        owner: data.owner
            .map(owner => editFormUsers.value.find(user => user.userName === owner.value)?.ID)
            .filter(id => id), // 确保只返回有效的 ID
        developers: data.develop
            .map(developer => editFormUsers.value.find(user => user.userName === developer.value)?.ID)
            .filter(id => id), // 确保只返回有效的 ID
      };

      console.log('Data Owner:', data.owner);
      console.log('Data Developers:', data.develop);
      console.log('Owner 值:', editForm.value.owner);
      console.log('Developers 值:', editForm.value.developers);

      editDialogVisible.value = true;
    } else {
      ElMessage.error(response.msg || '获取应用详情失败！');
    }
  } catch (error) {
    console.error('获取应用详情失败：', error);
    ElMessage.error('请求失败，请稍后重试！');
  }
};
const editFormUsers = ref([]); // 用户数据

const fetchUserList = async () => {
  try {
    const response = await getUserList({ page: 1, pageSize: 100 });
    if (response.code === 0) {
      const userList = response.data.list.map(user => ({
        ID: user.ID,
        userName: user.userName,
        nickName: user.nickName,
      }));

      // 使用 Map 去重
      const allUsers = [
        ...editFormUsers.value,
        ...userList,
      ];
      editFormUsers.value = Array.from(
          new Map(allUsers.map(user => [user.ID, user])).values()
      );

      console.log("Updated Users:", editFormUsers.value); // 确认去重后的用户列表
    } else {
      ElMessage.error(response.msg || "获取用户列表失败！");
    }
  } catch (error) {
    console.error("获取用户列表失败：", error);
    ElMessage.error("请求失败，请稍后重试！");
  }
};



// 在组件加载时调用
onMounted(async () => {
  await  fetchUserList();
  await fetchEnvList();
  await fetchClusterList();
  console.log('Loaded Users:', editFormUsers.value); // 确认用户数据是否正确

});

// 同步Region
const handleUpdateRegion = (value) => {
  emit('region', value)
}
const handleTest = (value) => {
  emit('test', value)
}
// 行点击事件处理
const handleRowClick = (row) => {
  // 使用 Vue Router 跳转到详情页，并将行的 ID 作为参数传递
  router.push({ name: 'applicationDetail', params: { id: row.ID } })
}
// 跳转到详情页
const goToDetail = (id) => {
  router.push({ name: 'applicationDetail', query: { id: id } })
}
// 删除
const handleDelete = (value) => {
  emit('delete', value)
}

// 批量操作
const handleSelectionChange = (value) => {
  emit('select', value)
}

</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.add-environment-section {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.add-environment-section .el-button {
  width: 90%;
  border: 2px dashed #dcdfe6;

  color: red;
}

</style>
