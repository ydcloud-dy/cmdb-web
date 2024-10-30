
import { listResourceApi } from '@/api/kubernetes/api'

export async function checkApi(cluster_name, api_group, version, resource) {
  let result = false
  // searchInfo.value.cluster_id, 'networking.k8s.io', 'v1', 'Ingress'
  const res = await listResourceApi({cluster_name:cluster_name,api_group: api_group,version: version})
  console.log(res,"握草")
  if (res.data.items) {
    if (res.data.items.code) {
      ElMessage({
        type: 'error',
        message: res.data.items.message,
      })
      return
    }
  }

  if (res.code === 0) {
    res.data.items.resources.forEach(function(item) {
      if (item.kind === resource) {
        result = true
      }
    })
  }
  return result
}

