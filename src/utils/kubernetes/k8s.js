export function getK8sObject(kind, namespace, version) {
  switch (kind) {
    case 'namespaces':
      return namespaceObj
    case 'services':
      return serviceObj(namespace)
    case 'servicesinit':
      return serviceIniObj(namespace)
    case 'pods':
      return podObj(namespace)
    case 'deployments':
      return deploymentObj(namespace)
    case 'deploymentsinit':
      return deploymentIniObj()
    case 'daemonsets':
      return daemonsetObj(namespace)
    case 'daemonsetsinit':
      return daemonsetIniObj(namespace)
    case 'statefulsetsinit':
      return statefulsetIniObj(namespace)
    case 'statefulsets':
      return statefulsetObj(namespace)
    case 'jobs':
      return jobObj(namespace)
    case 'jobsinit':
      return jobIniObj(namespace)
    case 'cronjobs':
      return cronjobObj(namespace)
    case 'cronjobsinit':
      return cronjobIniObj(namespace)
    case 'endpoints':
      return endPointObj(namespace)
    case 'ingresses':
      return ingressObj(namespace, version)
    case 'ingressesinit':
      return ingressIniObj(namespace, version)
    case 'networkpolicies':
      return npObj(namespace)
    case 'configmaps':
      return configMapObj(namespace)
    case 'configmapsinit':
      return configMapIniObj(namespace)
    case 'secrets':
      return secretObj(namespace)
    case 'secretsinit':
      return secretIniObj(namespace)
    case 'resourcequotas':
      return resourceQuotaObj(namespace)
    case 'limitranges':
      return limitRangesObj(namespace)
    case 'horizontalpodautoscalers':
      return hpaObj(namespace)
    case 'poddisruptionbudgets':
      return pdbObj(namespace)
    case 'persistentvolumeclaims':
      return pvcObj(namespace)
    case 'persistentvolumes':
      return pvObj
    case 'storageclasses':
      return scObj
    case 'serviceaccounts':
      return saObj(namespace)
    case 'roles':
      return roleObj(namespace)
    case 'rolebindings':
      return roleBindingObj(namespace)
    case 'clusterroles':
      return clusterRoleObj
    case 'clusterrolebindings':
      return clusterRoleBindingObj
    case 'podsecuritypolicies':
      return pspObj
    case 'cloneset':
      return CloneSetObj(namespace)
    case 'advancedstatefulset':
      return AdvancedStatefulSetObj(namespace)
    case 'advanceddaemonset':
      return AdvancedDaemonSetsObj(namespace)
    case 'broadcastjob':
      return broadcastjobObj(namespace)
    case 'advancedcronjob':
      return advancedcronjobObj(namespace)
    case 'sidecarsets':
      return sidecarsetObj()
    case 'rollouts':
      return rolloutsObj(namespace)
    case 'mysql':
      return mysqlObj(namespace)
    case 'redis':
      return redisObj(namespace)
    case 'kafka':
      return kafkaObj(namespace)
    case 'mongodb':
      return mongodbObj(namespace)
    case 'postgresql':
      return postgresqlObj(namespace)
    case 'backupMysql':
      return backupMysqlObj(version, namespace)
    case 'oamApplication':
      return oamApplication(namespace)
    default:
      return {}
  }
}

const namespaceObj = {
  apiVersion: 'v1',
  kind: 'Namespace',
  metadata: {
    name: 'test1',
    annotations: {},
    labels: {},
  },
}

const podObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'Pod',
    metadata: {
      name: 'debug',
      namespace: namespace,
    },
    spec: {
      containers: [
        {
          name: 'debug',
          image: 'nicolaka/netshoot',
          command: [
            '/bin/sh'
          ],
          args: [
            '-c',
            'sleep 100000'
          ],
          resources: {
            limits: {
              cpu: '100m',
              memory: '128Mi'
            },
            requests: {
              cpu: '50m',
              memory: '64Mi'
            }
          }
        },
      ],
    },
  }
}

const deploymentObj = (namespace) => {
  return {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
      name: 'nginx-deployment',
      namespace: namespace,
      labels: {
        app: 'nginx',
      },
    },
    spec: {
      replicas: 1,
      selector: {
        matchLabels: {
          app: 'nginx',
        },
      },
      template: {
        metadata: {
          labels: {
            app: 'nginx',
          },
        },
        spec: {
          containers: [
            {
              name: 'nginx',
              image: 'nginx:1.14.2',
              ports: [
                {
                  containerPort: 80,
                },
              ],
            },
          ],
        },
      },
    },
  }
}

const deploymentIniObj = () => {
  return {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
      name: '',
      namespace: '',
      labels: {},
    },
    spec: {
      progressDeadlineSeconds: 600,
      revisionHistoryLimit: 10,
      minReadySeconds: 60,
      replicas: 1,
      selector: {
        matchLabels: {},
      },
      strategy: {
        type: 'RollingUpdate',
        rollingUpdate: {
          maxSurge: '25%',
          maxUnavailable: '25%',
        },
      },
      template: {
        metadata: {
          labels: {},
        },
        spec: {
          containers: [
            {
              name: 'container-0',
              image: 'nginx:latest',
              imagePullPolicy: 'Always',
              stdin: false,
              tty: true,
            }
          ],
          initContainers: [],
          affinity: {},
          restartPolicy: 'Always',
          terminationGracePeriodSeconds: 30,
          dnsPolicy: 'ClusterFirst',
          tolerations: [],
          hostIPC: null,
          hostNetwork: null,
          hostPID: null,
          shareProcessNamespace: null,
          subdomain: '',
          hostname: '',
          hostAliases: [],
          securityContext: {
            seLinuxOptions: {}
          },
          dnsConfig: {
            nameservers: [],
            searches: [],
            options: [],
          },
        },
      },
    },
  }
}

const daemonsetIniObj = () => {
  return {
    apiVersion: 'apps/v1',
    kind: 'DaemonSet',
    metadata: {
      name: '',
      namespace: '',
      labels: {},
    },
    spec: {
      progressDeadlineSeconds: 600,
      revisionHistoryLimit: 10,
      replicas: 1,
      selector: {
        matchLabels: {},
      },
      strategy: {
        type: 'RollingUpdate',
        rollingUpdate: {
          maxSurge: '25%',
          maxUnavailable: '25%'
        },
      },
      template: {
        metadata: {
          labels: {},
        },
        spec: {
          containers: [
            {
              name: 'container-0',
              image: 'nginx:latest',
              imagePullPolicy: 'Always',
              stdin: false,
              tty: true,
            }
          ],
          initContainers: [],
          affinity: {},
          restartPolicy: 'Always',
          terminationGracePeriodSeconds: 30,
          dnsPolicy: 'ClusterFirst',
          tolerations: [],
          hostIPC: null,
          hostNetwork: null,
          hostPID: null,
          shareProcessNamespace: null,
          subdomain: '',
          hostname: '',
          hostAliases: [],
          securityContext: {
            seLinuxOptions: {}
          },
          dnsConfig: {
            nameservers: [],
            searches: [],
            options: [],
          },
        },
      },
    },
  }
}

const statefulsetIniObj = () => {
  return {
    apiVersion: 'apps/v1',
    kind: 'StatefulSet',
    metadata: {
      name: '',
      namespace: '',
      labels: {},
    },
    spec: {
      progressDeadlineSeconds: 600,
      revisionHistoryLimit: 10,
      replicas: 1,
      selector: {
        matchLabels: {},
      },
      strategy: {
        type: 'RollingUpdate',
        rollingUpdate: {
          maxSurge: '25%',
          maxUnavailable: '25%'
        },
      },
      template: {
        metadata: {
          labels: {},
        },
        spec: {
          containers: [
            {
              name: 'container-0',
              image: 'nginx:latest',
              imagePullPolicy: 'Always',
              stdin: false,
              tty: true,
            }
          ],
          initContainers: [],
          affinity: {},
          restartPolicy: 'Always',
          terminationGracePeriodSeconds: 30,
          dnsPolicy: 'ClusterFirst',
          tolerations: [],
          hostIPC: null,
          hostNetwork: null,
          hostPID: null,
          shareProcessNamespace: null,
          subdomain: '',
          hostname: '',
          hostAliases: [],
          securityContext: {
            seLinuxOptions: {}
          },
          dnsConfig: {
            nameservers: [],
            searches: [],
            options: [],
          },
        },
      },
    },
  }
}
const cronjobObj = (namespace) => {
  return {
    apiVersion: 'batch/v1',
    kind: 'CronJob',
    metadata: {
      name: 'hello',
      namespace: namespace,
    },
    spec: {
      schedule: '*/1 * * * *',
      jobTemplate: {
        spec: {
          template: {
            spec: {
              containers: [
                {
                  name: 'hello',
                  image: 'busybox',
                  imagePullPolicy: 'IfNotPresent',
                  command: [
                    '/bin/sh',
                    '-c',
                    'date; echo Hello from the Kubernetes cluster',
                  ],
                },
              ],
              restartPolicy: 'OnFailure',
            },
          },
        },
      },
    },
  }
}

const cronjobIniObj = (namespace) => {
  return {
    apiVersion: 'batch/v1',
    kind: 'CronJob',
    metadata: {
      name: '',
      namespace: '',
    },
    spec: {
      schedule: '*/1 * * * *',
      jobTemplate: {
        spec: {
          template: {
            spec: {
              containers: [],
              restartPolicy: 'OnFailure',
            },
          },
        },
      },
    },
  }
}
const statefulsetObj = (namespace) => {
  return {
    apiVersion: 'apps/v1',
    kind: 'StatefulSet',
    metadata: {
      name: 'web',
      namespace: namespace,
    },
    spec: {
      selector: {
        matchLabels: {
          app: 'web',
        },
      },
      serviceName: 'web',
      replicas: 1,
      template: {
        metadata: {
          labels: {
            app: 'web',
          },
        },
        spec: {
          terminationGracePeriodSeconds: 10,
          containers: [
            {
              name: 'web',
              image: 'nginx',
              ports: [
                {
                  containerPort: 80,
                  name: 'web',
                },
              ],
            },
          ],
        },
      },
    },
  }
}

const daemonsetObj = (namespace) => {
  return {
    apiVersion: 'apps/v1',
    kind: 'DaemonSet',
    metadata: {
      name: 'fluentd-elasticsearch',
      namespace: namespace,
      labels: {
        'k8s-app': 'fluentd-logging',
      },
    },
    spec: {
      selector: {
        matchLabels: {
          name: 'fluentd-elasticsearch',
        },
      },
      template: {
        metadata: {
          labels: {
            name: 'fluentd-elasticsearch',
          },
        },
        spec: {
          tolerations: [
            {
              key: 'node-role.kubernetes.io/master',
              effect: 'NoSchedule',
            },
          ],
          containers: [
            {
              name: 'fluentd-elasticsearch',
              image: 'quay.io/fluentd_elasticsearch/fluentd:v2.5.2',
              resources: {
                limits: {
                  memory: '200Mi',
                },
                requests: {
                  cpu: '100m',
                  memory: '200Mi',
                },
              },
              volumeMounts: [
                {
                  name: 'varlog',
                  mountPath: '/var/log',
                },
                {
                  name: 'varlibdockercontainers',
                  mountPath: '/var/lib/docker/containers',
                  readOnly: true,
                },
              ],
            },
          ],
          terminationGracePeriodSeconds: 30,
          volumes: [
            {
              name: 'varlog',
              hostPath: {
                path: '/var/log',
              },
            },
            {
              name: 'varlibdockercontainers',
              hostPath: {
                path: '/var/lib/docker/containers',
              },
            },
          ],
        },
      },
    },
  }
}

const jobIniObj = () => {
  return {
    apiVersion: 'batch/v1',
    kind: 'Job',
    metadata: {
      name: '',
      namespace: '',
      labels: {},
    },
    spec: {
      template: {
        metadata: {
          labels: {},
        },
        spec: {
          containers: [],
          restartPolicy: 'Never',
        },
      },
      backoffLimit: 4,
    },
  }
}

const jobObj = (namespace) => {
  return {
    apiVersion: 'batch/v1',
    kind: 'Job',
    metadata: {
      name: 'pi',
      namespace: namespace,
    },
    spec: {
      template: {
        spec: {
          containers: [
            {
              name: 'pi',
              image: 'perl',
              command: ['perl', '-Mbignum=bpi', '-wle', 'print bpi(2000)'],
            },
          ],
          restartPolicy: 'Never',
        },
      },
      backoffLimit: 4,
    },
  }
}
const serviceIniObj = () => {
  return {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
      name: '',
      namespace: '',
      labels: {},
      annotations: {},
    },
    spec: {
      type: 'ClusterIP'
    },
  }
}

const serviceObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
      name: 'my-service',
      namespace: namespace,
    },
    spec: {
      selector: {
        app: 'MyApp',
      },
      ports: [
        {
          protocol: 'TCP',
          port: 80,
          targetPort: 9376,
        },
      ],
    },
  }
}

const endPointObj = (namespace) => {
  return {
    kind: 'Endpoints',
    apiVersion: 'v1',
    metadata: {
      name: 'elasticsearch-1',
      namespace: namespace,
      annotations: {},
      labels: {},
    },
    subsets: [
      {
        addresses: [
          {
            ip: '192.168.11.13',
          },
        ],
        ports: [
          {
            port: 9200,
          },
        ],
      },
    ],
  }
}

const ingressIniObj = (namespace, version) => {
  let backend = {}
  if (version === 'networking.k8s.io/v1') {
    backend = {
      service: {
        name: null,
        port: {
          'number': null
        }
      }
    }
  } else {
    backend = {
      serviceName: null,
      servicePort: null
    }
  }
  return {
    apiVersion: version,
    kind: 'Ingress',
    metadata: {
      name: '',
      namespace: namespace,
      annotations: {
        'kubernetes.io/ingress.class': 'nginx',
      },
    },
    spec: {
      tls: [],
      rules: [
        {
          host: null,
          http: {
            paths: [
              {
                path: '/',
                pathType: 'Prefix',
                backend: backend
              },
            ],
          },
        },
      ],
    },
  }
}

const ingressObj = (namespace, version) => {
  let backend = {}
  if (version === 'networking.k8s.io/v1') {
    backend = {
      'service': {
        'name': 'nginx',
        'port': {
          'number': 80
        }
      }
    }
  } else {
    backend = {
      serviceName: 'nginx',
      servicePort: 80
    }
  }

  return {
    apiVersion: version,
    kind: 'Ingress',
    metadata: {
      name: 'nginx',
      namespace: namespace,
      annotations: {
        'kubernetes.io/ingress.class': 'nginx',
      },
    },
    spec: {
      rules: [
        {
          host: 'www.example.com',
          http: {
            paths: [
              {
                path: '/',
                pathType: 'Prefix',
                backend: backend
              },
            ],
          },
        },
      ],
    },
  }
}

const npObj = (namespace) => {
  return {
    apiVersion: 'networking.k8s.io/v1',
    kind: 'NetworkPolicy',
    metadata: {
      name: 'test-network-policy',
      namespace: namespace,
    },
    spec: {
      podSelector: {
        matchLabels: {
          role: 'db',
        },
      },
      policyTypes: ['Ingress', 'Egress'],
      ingress: [
        {
          from: [
            {
              ipBlock: {
                cidr: '172.17.0.0/16',
                except: ['172.17.1.0/24'],
              },
            },
            {
              namespaceSelector: {
                matchLabels: {
                  project: 'myproject',
                },
              },
            },
            {
              podSelector: {
                matchLabels: {
                  role: 'frontend',
                },
              },
            },
          ],
          ports: [
            {
              protocol: 'TCP',
              port: 6379,
            },
          ],
        },
      ],
      egress: [
        {
          to: [
            {
              ipBlock: {
                cidr: '10.0.0.0/24',
              },
            },
          ],
          ports: [
            {
              protocol: 'TCP',
              port: 5978,
            },
          ],
        },
      ],
    },
  }
}

const configMapIniObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'ConfigMap',
    metadata: {
      name: '',
      namespace: namespace,
    },
    data: {},
    binaryData: {}
  }
}
const configMapObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'ConfigMap',
    metadata: {
      name: 'demo1',
      namespace: namespace,
    },
    data: {
      test: 'this is test data',
    },
  }
}

const secretIniObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'Secret',
    metadata: {
      name: '',
      namespace: namespace,
      labels: {},
      annotations: {},
    },
    type: 'Opaque',
    data: {},
  }
}

const secretObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'Secret',
    metadata: {
      name: 'secret-test',
      namespace: namespace,
    },
    type: 'kubernetes.io/basic-auth',
    stringData: {
      username: 'admin',
      password: '123456',
    },
  }
}

const resourceQuotaObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'ResourceQuota',
    metadata: {
      name: 'pods-high',
      namespace: namespace,
    },
    spec: {
      hard: {
        cpu: '1000',
        memory: '200Gi',
        pods: '10',
      },
      scopeSelector: {
        matchExpressions: [
          {
            operator: 'In',
            scopeName: 'PriorityClass',
            values: ['high'],
          },
        ],
      },
    },
  }
}

const limitRangesObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'LimitRange',
    metadata: {
      name: 'cpu-min-max-demo-lr',
      namespace: namespace,
    },
    spec: {
      limits: [
        {
          max: {
            cpu: '800m',
          },
          min: {
            cpu: '200m',
          },
          type: 'Container',
        },
      ],
    },
  }
}

const hpaObj = (namespace) => {
  return {
    apiVersion: 'autoscaling/v2',
    kind: 'HorizontalPodAutoscaler',
    metadata: {
      name: 'php-apache',
      namespace: namespace,
    },
    spec: {
      scaleTargetRef: {
        apiVersion: 'apps/v1',
        kind: 'Deployment',
        name: 'php-apache',
      },
      minReplicas: 1,
      maxReplicas: 10,
      metrics: [
        {
          type: 'Resource',
          resource: {
            name: 'cpu',
            target: {
              type: 'Utilization',
              averageUtilization: 50,
            },
          },
        },
      ],
    },
  }
}

const pdbObj = (namespace) => {
  return {
    apiVersion: 'policy/v1beta1',
    kind: 'PodDisruptionBudget',
    metadata: {
      name: 'zk-pdb',
      namespace: namespace,
    },
    spec: {
      minAvailable: 2,
      selector: {
        matchLabels: {
          app: 'zookeeper',
        },
      },
    },
  }
}

const pvcObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'PersistentVolumeClaim',
    metadata: {
      name: 'myclaim',
      namespace: namespace,
    },
    spec: {
      accessModes: ['ReadWriteOnce'],
      volumeMode: 'Filesystem',
      resources: {
        requests: {
          storage: '8Gi',
        },
      },
      storageClassName: 'slow',
      selector: {
        matchLabels: {
          release: 'stable',
        },
        matchExpressions: [
          {
            key: 'environment',
            operator: 'In',
            values: ['dev'],
          },
        ],
      },
    },
  }
}

const pvObj = {
  apiVersion: 'v1',
  kind: 'PersistentVolume',
  metadata: {
    name: 'pv0003',
  },
  spec: {
    capacity: {
      storage: '5Gi',
    },
    volumeMode: 'Filesystem',
    accessModes: ['ReadWriteOnce'],
    persistentVolumeReclaimPolicy: 'Recycle',
    storageClassName: 'slow',
    mountOptions: ['hard', 'nfsvers=4.1'],
    nfs: {
      path: '/tmp',
      server: '172.17.0.2',
    },
  },
}

const scObj = {
  apiVersion: 'storage.k8s.io/v1',
  kind: 'StorageClass',
  metadata: {
    name: 'standard',
  },
  provisioner: 'kubernetes.io/aws-ebs',
  parameters: {
    type: 'gp2',
  },
  reclaimPolicy: 'Retain',
  allowVolumeExpansion: true,
  mountOptions: ['debug'],
  volumeBindingMode: 'Immediate',
}

const saObj = (namespace) => {
  return {
    apiVersion: 'v1',
    kind: 'ServiceAccount',
    metadata: {
      name: 'build-robot',
      namespace: namespace,
    },
    secrets: [
      {
        name: 'build-robot-token-bvbk5',
      },
    ],
  }
}

const roleObj = (namespace) => {
  return {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'Role',
    metadata: {
      namespace: namespace,
      name: 'pod-reader',
    },
    rules: [
      {
        apiGroups: [''],
        resources: ['pods'],
        verbs: ['get', 'watch', 'list'],
      },
    ],
  }
}

const roleBindingObj = (namespace) => {
  return {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleBinding',
    metadata: {
      name: 'read-pods',
      namespace: namespace,
    },
    subjects: [
      {
        kind: 'User',
        name: 'jane',
        apiGroup: 'rbac.authorization.k8s.io',
      },
    ],
    roleRef: {
      kind: 'Role',
      name: 'pod-reader',
      apiGroup: 'rbac.authorization.k8s.io',
    },
  }
}

const clusterRoleObj = {
  kind: 'ClusterRole',
  apiVersion: 'rbac.authorization.k8s.io/v1',
  metadata: {
    name: 'read-all-clusterrole',
  },
  rules: [
    {
      nonResourceURLs: ['/metrics'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: [''],
      resources: [
        'bindings',
        'componentstatuses',
        'configmaps',
        'endpoints',
        'events',
        'limitranges',
        'namespaces',
        'namespaces/finalize',
        'namespaces/status',
        'nodes',
        'nodes/proxy',
        'nodes/status',
        'persistentvolumeclaims',
        'persistentvolumeclaims/status',
        'persistentvolumes',
        'persistentvolumes/status',
        'pods',
        'pods/attach',
        'pods/binding',
        'pods/eviction',
        'pods/exec',
        'pods/log',
        'pods/proxy',
        'pods/status',
        'podtemplates',
        'replicationcontrollers',
        'replicationcontrollers/scale',
        'replicationcontrollers/status',
        'resourcequotas',
        'resourcequotas/status',
        'serviceaccounts',
        'services',
        'services/proxy',
        'services/status',
      ],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['apps'],
      resources: [
        'controllerrevisions',
        'daemonsets',
        'daemonsets/status',
        'deployments',
        'deployments/scale',
        'deployments/status',
        'replicasets',
        'replicasets/scale',
        'replicasets/status',
        'statefulsets',
        'statefulsets/scale',
        'statefulsets/status',
      ],
      verbs: ['list', 'get', 'watch'],
    },
    {
      apiGroups: ['batch'],
      resources: ['jobs', 'jobs/status'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['autoscaling'],
      resources: [
        'horizontalpodautoscalers',
        'horizontalpodautoscalers/status',
      ],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['storage.k8s.io'],
      resources: [
        'csidrivers',
        'csinodes',
        'storageclasses',
        'volumeattachments',
        'volumeattachments/status',
      ],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['networking.k8s.io'],
      resources: ['networkpolicies'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['scheduling.k8s.io'],
      resources: ['priorityclasses'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['node.k8s.io'],
      resources: ['runtimeclasses'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['extensions'],
      resources: ['ingresses', 'ingresses/status'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['events.k8s.io'],
      resources: ['events'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['apiextensions.k8s.io'],
      resources: [
        'customresourcedefinitions',
        'customresourcedefinitions/status',
      ],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['apiregistration.k8s.io'],
      resources: ['apiservices', 'apiservices/status'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['discovery.k8s.io'],
      resources: ['endpointslices'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['metrics.k8s.io'],
      resources: ['pods', 'nodes'],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['policy'],
      resources: [
        'poddisruptionbudgets',
        'poddisruptionbudgets/status',
        'podsecuritypolicies',
      ],
      verbs: ['get', 'list', 'watch'],
    },
    {
      apiGroups: ['rbac.authorization.k8s.io'],
      resources: [
        'clusterrolebindings',
        'clusterroles',
        'rolebindings',
        'roles',
      ],
      verbs: ['get', 'list', 'watch'],
    },
  ],
}

const clusterRoleBindingObj = {
  apiVersion: 'rbac.authorization.k8s.io/v1',
  kind: 'ClusterRoleBinding',
  metadata: {
    name: 'developer-read-all',
  },
  subjects: [
    {
      kind: 'ServiceAccount',
      name: 'developer',
      namespace: 'default',
    },
  ],
  roleRef: {
    kind: 'ClusterRole',
    name: 'read-all-clusterrole',
    apiGroup: 'rbac.authorization.k8s.io',
  },
}

const pspObj = {
  apiVersion: 'policy/v1beta1',
  kind: 'PodSecurityPolicy',
  metadata: {
    name: 'example',
  },
  spec: {
    privileged: false,
    seLinux: {
      rule: 'RunAsAny',
    },
    supplementalGroups: {
      rule: 'RunAsAny',
    },
    runAsUser: {
      rule: 'RunAsAny',
    },
    fsGroup: {
      rule: 'RunAsAny',
    },
    volumes: ['*'],
  },
}

const CloneSetObj = (namespace) => {
  return { 'apiVersion': 'apps.kruise.io/v1alpha1',
    'kind': 'CloneSet',
    'metadata': {
      'annotations': {
        'kruise.io/auto-generate-persistent-pod-state': 'true',
        'kruise.io/preferred-persistent-topology': 'kubernetes.io/hostname',
      },
      'labels': {
        'app': 'sample'
      },
      'name': 'sample',
      'namespace': namespace,
    },
    'spec': {
      'replicas': 1,
      'revisionHistoryLimit': 10,
      'scaleStrategy': {},
      'selector': {
        'matchLabels': {
          'app': 'sample'
        }
      },
      'template': {
        'metadata': {
          'labels': {
            'app': 'sample'
          }
        },
        'spec': {
          'containers': [
            {
              'image': 'nginx:1.7.9',
              'imagePullPolicy': 'Always',
              'name': 'nginx',
              'resources': {
                'limits': {
                  'cpu': '200m',
                  'memory': '300Mi'
                },
                'requests': {
                  'cpu': '100m',
                  'memory': '200Mi'
                }
              }
            }
          ],
          'dnsPolicy': 'ClusterFirst',
          'restartPolicy': 'Always',
          'schedulerName': 'default-scheduler',
          'securityContext': {},
          'terminationGracePeriodSeconds': 30
        }
      },
      'updateStrategy': {
        'inPlaceUpdateStrategy': {
          'gracePeriodSeconds': 10
        },
        'maxSurge': 0,
        'maxUnavailable': '20%',
        'partition': 0,
        'type': 'InPlaceIfPossible'
      }
    }
  }
}

const AdvancedStatefulSetObj = (namespace) => {
  return {
    'apiVersion': 'apps.kruise.io/v1beta1',
    'kind': 'StatefulSet',
    'metadata': {
      'name': 'sample2',
      'namespace': namespace,
    },
    'spec': {
      'podManagementPolicy': 'Parallel',
      'replicas': 1,
      'revisionHistoryLimit': 10,
      'selector': {
        'matchLabels': {
          'app': 'samples2'
        }
      },
      'serviceName': 'fake-service',
      'template': {
        'metadata': {
          'labels': {
            'app': 'samples2'
          }
        },
        'spec': {
          'containers': [
            {
              'image': 'nginx:alpine',
              'imagePullPolicy': 'Always',
              'name': 'main',
            }
          ],
          'dnsPolicy': 'ClusterFirst',
          'readinessGates': [
            {
              'conditionType': 'InPlaceUpdateReady'
            }
          ],
          'restartPolicy': 'Always',
          'schedulerName': 'default-scheduler',
          'securityContext': {},
          'terminationGracePeriodSeconds': 30
        }
      },
      'updateStrategy': {
        'rollingUpdate': {
          'maxUnavailable': '20%',
          'minReadySeconds': 0,
          'partition': 0,
          'podUpdatePolicy': 'InPlaceIfPossible'
        },
        'type': 'RollingUpdate'
      }
    },
  }
}

const AdvancedDaemonSetsObj = (namespace) => {
  return {
    'apiVersion': 'apps.kruise.io/v1alpha1',
    'kind': 'DaemonSet',
    'metadata': {
      'labels': {
        'app': 'sample3'
      },
      'name': 'sample3',
      'namespace': namespace,
    },
    'spec': {
      'revisionHistoryLimit': 10,
      'selector': {
        'matchLabels': {
          'app': 'sample3'
        }
      },
      'template': {
        'metadata': {
          'labels': {
            'app': 'sample3'
          }
        },
        'spec': {
          'containers': [
            {
              'image': 'nginx:alpine',
              'name': 'nginx'
            }
          ]
        }
      },
      'updateStrategy': {
        'rollingUpdate': {
          'maxSurge': 0,
          'maxUnavailable': 1,
          'rollingUpdateType': 'InPlaceIfPossible'
        },
        'type': 'RollingUpdate'
      }
    }
  }
}

const broadcastjobObj = (namespace) => {
  return {
    'apiVersion': 'apps.kruise.io/v1alpha1',
    'kind': 'BroadcastJob',
    'metadata': {
      'name': 'broadcastjob-nginx',
      'namespace': namespace
    },
    'spec': {
      'template': {
        'spec': {
          'containers': [
            {
              'name': 'nginx',
              'image': 'nginx',
              'command': [
                '/bin/sh'
              ],
              'args': [
                '-c',
                'ls'
              ]
            }
          ],
          'restartPolicy': 'Never'
        }
      },
      'completionPolicy': {
        'type': 'Always'
      }
    }
  }
}

const advancedcronjobObj = (namespace) => {
  return {
    'apiVersion': 'apps.kruise.io/v1alpha1',
    'kind': 'AdvancedCronJob',
    'metadata': {
      'name': 'acj-test',
      'namespace': namespace
    },
    'spec': {
      'schedule': '*/1 * * * *',
      'template': {
        'broadcastJobTemplate': {
          'spec': {
            'template': {
              'spec': {
                'containers': [
                  {
                    'name': 'nginx',
                    'image': 'nginx',
                    'command': [
                      '/bin/sh'
                    ],
                    'args': [
                      '-c',
                      'ls'
                    ]
                  }
                ],
                'restartPolicy': 'Never'
              }
            },
            'completionPolicy': {
              'type': 'Always'
            }
          }
        }
      }
    }
  }
}

const rolloutsObj = (namespace) => {
  return {
    'apiVersion': 'rollouts.kruise.io/v1beta1',
    'kind': 'Rollout',
    'metadata': {
      'name': 'rollouts-demo',
      'namespace': namespace
    },
    'spec': {
      'workloadRef': {
        'apiVersion': 'apps/v1',
        'kind': 'Deployment',
        'name': 'workload-demo',
      },
      'strategy': {
        'canary': {
          'enableExtraWorkloadForCanary': false,
          'steps': [
            {
              'replicas': 1
            },
            {
              'replicas': '50%'
            },
            {
              'replicas': '100%'
            }
          ]
        }
      }
    }
  }
}

const sidecarsetObj = () => {
  return {
    'apiVersion': 'apps.kruise.io/v1alpha1',
    'kind': 'SidecarSet',
    'metadata': {
      'name': 'test-sidecarset'
    },
    'spec': {
      'selector': {
        'matchLabels': {
          'app': 'nginx'
        }
      },
      'updateStrategy': {
        'type': 'RollingUpdate',
        'maxUnavailable': 1
      },
      'containers': [
        {
          'name': 'sidecar1',
          'image': 'nginx',
          'command': [
            'sleep',
            '999d'
          ],
          'volumeMounts': [
            {
              'name': 'log-volume',
              'mountPath': '/var/log'
            }
          ]
        }
      ],
      'volumes': [
        {
          'name': 'log-volume',
          'emptyDir': {}
        }
      ]
    }
  }
}

const mysqlObj = (namespace) => {
  return {
    'apiVersion': 'apps.kubeblocks.io/v1alpha1',
    'kind': 'Cluster',
    'metadata': {
      'name': 'mysql-cluster',
      'namespace': namespace,
    },
    'spec': {
      'affinity': {
        'podAntiAffinity': 'Preferred',
        'tenancy': 'SharedNode'
      },
      'clusterDefinitionRef': '',
      'clusterVersionRef': '',
      'componentSpecs': [
        {
          'componentDefRef': 'mysql',
          'monitor': false,
          'name': 'mysql',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '1',
              'memory': '1Gi'
            }
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        }
      ],
      'monitor': {},
      'resources': {
        'cpu': '0',
        'memory': '0'
      },
      'storage': {
        'size': '0'
      },
      'terminationPolicy': 'Delete'
    }
  }
}

const redisObj = (namespace) => {
  return {
    'apiVersion': 'apps.kubeblocks.io/v1alpha1',
    'kind': 'Cluster',
    'metadata': {
      'name': 'redis-cluster',
      'namespace': namespace,
    },
    'spec': {
      'affinity': {
        'podAntiAffinity': 'Preferred',
        'tenancy': 'SharedNode'
      },
      'clusterDefinitionRef': '',
      'clusterVersionRef': '',
      'componentSpecs': [
        {
          'componentDefRef': 'redis',
          'enabledLogs': [
            'running'
          ],
          'monitor': false,
          'name': 'redis',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '1',
              'memory': '1Gi'
            }
          },
          'switchPolicy': {
            'type': 'Noop'
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        },
        {
          'componentDefRef': 'redis-sentinel',
          'monitor': false,
          'name': 'redis-sentinel',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1G'
            },
            'requests': {
              'cpu': '200m',
              'memory': '1Gi'
            }
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        }
      ],
      'monitor': {},
      'resources': {
        'cpu': '0',
        'memory': '0'
      },
      'storage': {
        'size': '0'
      },
      'terminationPolicy': 'Delete'
    }
  }
}

const kafkaObj = (namespace) => {
  return {
    'apiVersion': 'apps.kubeblocks.io/v1alpha1',
    'kind': 'Cluster',
    'metadata': {
      'name': 'kafka-cluster',
      'namespace': namespace,
    },
    'spec': {
      'affinity': {
        'podAntiAffinity': 'Preferred',
        'tenancy': 'SharedNode'
      },
      'clusterDefinitionRef': 'kafka',
      'clusterVersionRef': '',
      'componentSpecs': [
        {
          'componentDefRef': 'kafka-server',
          'monitor': false,
          'name': 'kafka-server',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '1',
              'memory': '1Gi'
            }
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        },
        {
          'componentDefRef': 'kafka-broker',
          'monitor': false,
          'name': 'kafka-broker',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '1',
              'memory': '1Gi'
            }
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        },
        {
          'componentDefRef': 'controller',
          'monitor': false,
          'name': 'controller',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '1',
              'memory': '1Gi'
            }
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        },
        {
          'componentDefRef': 'kafka-exporter',
          'monitor': false,
          'name': 'kafka-exporter',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '1',
              'memory': '1Gi'
            }
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        }
      ],
      'monitor': {},
      'resources': {
        'cpu': '0',
        'memory': '0'
      },
      'storage': {
        'size': '0'
      },
      'terminationPolicy': 'Delete'
    }
  }
}

const mongodbObj = (namespace) => {
  return {
    'apiVersion': 'apps.kubeblocks.io/v1alpha1',
    'kind': 'Cluster',
    'metadata': {
      'name': 'mongodb-cluster',
      'namespace': namespace,
    },
    'spec': {
      'affinity': {
        'podAntiAffinity': 'Preferred',
        'tenancy': 'SharedNode'
      },
      'clusterDefinitionRef': 'mongodb',
      'clusterVersionRef': '',
      'componentSpecs': [
        {
          'componentDefRef': 'mongodb',
          'enabledLogs': [
            'running'
          ],
          'monitor': false,
          'name': 'mongodb',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '1',
              'memory': '1Gi'
            }
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        }
      ],
      'monitor': {},
      'resources': {
        'cpu': '0',
        'memory': '0'
      },
      'storage': {
        'size': '0'
      },
      'terminationPolicy': 'Delete'
    }
  }
}

const postgresqlObj = (namespace) => {
  return {
    'apiVersion': 'apps.kubeblocks.io/v1alpha1',
    'kind': 'Cluster',
    'metadata': {
      'name': 'postgresql-cluster',
      'namespace': namespace,
    },
    'spec': {
      'affinity': {
        'podAntiAffinity': 'Preferred',
        'tenancy': 'SharedNode',
        'topologyKeys': [
          'kubernetes.io/hostname'
        ]
      },
      'clusterDefinitionRef': 'postgresql',
      'componentSpecs': [
        {
          'componentDefRef': 'postgresql',
          'enabledLogs': [
            'running'
          ],
          'monitor': false,
          'name': 'postgresql',
          'noCreatePDB': false,
          'replicas': 1,
          'resources': {
            'limits': {
              'cpu': '1',
              'memory': '1Gi'
            },
            'requests': {
              'cpu': '0.5',
              'memory': '0.5Gi'
            }
          },
          'switchPolicy': {
            'type': 'Noop'
          },
          'volumeClaimTemplates': [
            {
              'name': 'data',
              'spec': {
                'accessModes': [
                  'ReadWriteOnce'
                ],
                'resources': {
                  'requests': {
                    'storage': '20Gi'
                  }
                }
              }
            }
          ]
        }
      ],
      'terminationPolicy': 'Delete'
    }
  }
}

const backupMysqlObj = (name, namespace) => {
  return {
    'apiVersion': 'dataprotection.kubeblocks.io/v1alpha1',
    'kind': 'Backup',
    'metadata': {
      'name': name,
      'namespace': namespace,
    },
    'spec': {
      'backupMethod': 'xtrabackup',
      'backupPolicyName': name + '-mysql-backup-policy',
      'deletionPolicy': 'Delete'
    }
  }
}

const oamApplication = (namespace) => {
  return {
    'apiVersion': 'core.oam.dev/v1beta1',
    'kind': 'Application',
    'metadata': {
      'name': 'first-vela-app',
      'namespace': namespace,
    },
    'spec': {
      'components': [
        {
          'name': 'express-server',
          'type': 'webservice',
          'properties': {
            'image': 'nginx:1.25.5',
            'ports': [
              {
                'port': 8000,
                'expose': true
              }
            ]
          },
          'traits': [
            {
              'type': 'scaler',
              'properties': {
                'replicas': 1
              }
            }
          ]
        }
      ],
      'policies': [
        {
          'name': 'target-default',
          'type': 'topology',
          'properties': {
            'clusters': [
              'local'
            ],
            'namespace': 'default'
          }
        },
        {
          'name': 'target-prod',
          'type': 'topology',
          'properties': {
            'clusters': [
              'local'
            ],
            'namespace': 'prod'
          }
        },
        {
          'name': 'deploy-ha',
          'type': 'override',
          'properties': {
            'components': [
              {
                'type': 'webservice',
                'traits': [
                  {
                    'type': 'scaler',
                    'properties': {
                      'replicas': 2
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      'workflow': {
        'steps': [
          {
            'name': 'deploy2default',
            'type': 'deploy',
            'properties': {
              'policies': [
                'target-default'
              ]
            }
          },
          {
            'name': 'manual-approval',
            'type': 'suspend'
          },
          {
            'name': 'deploy2prod',
            'type': 'deploy',
            'properties': {
              'policies': [
                'target-prod',
                'deploy-ha'
              ]
            }
          }
        ]
      }
    }
  }
}
