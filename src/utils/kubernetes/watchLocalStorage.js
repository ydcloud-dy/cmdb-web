
export const dispatchClusterIDEventStrage = (cluster_id) => {
  // 创建一个StorageEvent事件
  var newStorageEvent = document.createEvent('StorageEvent')
  const storage = {
    setItem: function(cluster_id) {
      localStorage.setItem('cluster_id', cluster_id)
      // 初始化创建的事件
      newStorageEvent.initStorageEvent('setItemCluster', false, false, 'cluster_id', null, cluster_id, null, null)
      // 派发对象
      window.dispatchEvent(newStorageEvent)
    }
  }
  return storage.setItem(cluster_id)
}

export const dispatchNamespaceEventStrage = (namespace) => {
  // 创建一个StorageEvent事件
  var newStorageEvent = document.createEvent('StorageEvent')
  const storage = {
    setItem: function(namespace) {
      localStorage.setItem('namespace', namespace)
      // 初始化创建的事件
      newStorageEvent.initStorageEvent('setItemNamespace', false, false, 'namespace', null, namespace, null, null)
      // 派发对象
      window.dispatchEvent(newStorageEvent)
    }
  }
  return storage.setItem(namespace)
}
