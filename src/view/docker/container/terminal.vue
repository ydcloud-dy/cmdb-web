<template>
  <div class="dycloud-form-box">
    终端类型: <el-select v-model="termChangeSelect" style="width: 150px" @change="termChange">
      <el-option
        v-for="item in termOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </el-select>
    <div id="terminal" ref="terminal" v-loading="loading" style="height: 100vh;" />
  </div>
</template>

<script>
export default {
  name: 'Terminal',
}
</script>

<script setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { createContainerExec, resizeContainerExec } from '@/api/docker/container'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { AttachAddon } from 'xterm-addon-attach'
import { WebglAddon } from 'xterm-addon-webgl'
import { useUserStore } from '@/pinia/modules/user'

import 'xterm/css/xterm.css'
import { useRoute } from 'vue-router'

const termChangeSelect = ref('sh')
const termOptions = [
  {
    value: 'bash',
    label: '/bin/bash',
  },
  {
    value: 'sh',
    label: '/bin/sh',
  },
]

const route = useRoute()
onMounted(() => {
  termChange(termChangeSelect.value)
})

const term = ref(null)
const terminalSocket = ref(null)
const openned = ref(false)
const id = ref('')
const containerId = ref('')
containerId.value = route.query.containerId
const currentHost = ref('')
currentHost.value = route.query.currentHost
console.log(currentHost.value)
const loading = ref(false)

const fitAddon = ref(null)
const webgl = ref(null)

onUnmounted(() => {
  openned.value = false
  window.removeEventListener('resize', function() {

  }, false)
})

// 打开websocket连接事件
const onOpen = async() => {
  fitAddon.value.fit()
  openned.value = true
  const res = await resizeContainerExec(
      currentHost.value,{
    id: id.value,
    width: term.value.cols,
    height: term.value.rows,
  })
  if (res.code === 0) {
    term.value.focus()
  }
}

const debounce = (fn, wait) => {
  let timeout = null
  return function() {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(fn, wait)
  }
}

// 切换终端类型
const termChange = async(v) => {
  loading.value = true
  if (terminalSocket.value) {
    terminalSocket.value.close()
  }
  if (term.value) {
    term.value.dispose(document.getElementById('terminal'))
  }

  const res = await createContainerExec(currentHost.value,{
    id: containerId.value,
    execType: v
  })
  if (res.code === 0) {
    id.value = res.data.Id
    await initWebSocket(res.data.Id)
  }
}

// 初始化 websocket
const initWebSocket = async(execId) => {
  openned.value = false
  const protocol = ref('ws://')
  if (import.meta.env.VITE_BASE_PATH.indexOf('https://') !== -1) {
    protocol.value = 'wss://'
  }
  const userStore = useUserStore()
  const wsUrl = `${protocol.value}${window.location.host}${import.meta.env.VITE_BASE_API}/docker/${currentHost.value}/container/exec/term/${execId}?x-token=${userStore.token}`

  // terminalSocket.value.send('x-token:'+userStore.token)
  // document.cookie = 'x-token='+userStore.token+';x-user-id='+userStore.userInfo.ID+';path=/'
  terminalSocket.value = new WebSocket(wsUrl)

  terminalSocket.value.onopen = onOpen
  const attachAddon = new AttachAddon(terminalSocket.value)
  fitAddon.value = new FitAddon()
  webgl.value = new WebglAddon()
  term.value = new Terminal()
  attachAddon.activate(term.value)
  fitAddon.value.activate(term.value)
  term.value.open(document.getElementById('terminal'))
  fitAddon.value.fit()
  webgl.value.activate(term.value)
  webgl.value.onContextLoss = function() {
    fitAddon.value.dispose()
  }
  window.addEventListener('resize', debounce(async function(event) {
    fitAddon.value.fit()
    if (openned.value) {
      const res = await resizeContainerExec(currentHost.value,{
        id: id.value,
        width: term.value.cols,
        height: term.value.rows,
      })
      if (res.code === 0) {
        term.value.focus()
      }
    }
  }, 1500), false)
  loading.value = false
}
</script>

