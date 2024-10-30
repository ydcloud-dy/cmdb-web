
import { listResourceApi } from '@/api/kubernetes/apis'

export async function checkApi(cluster_name, api_group, version, resource) {
  let result = false
  const res = await listResourceApi(cluster_name, api_group, version)
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

