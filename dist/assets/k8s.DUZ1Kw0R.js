/*! 
 Build based on  
 Time : 1735190558000 */
function e(e,$,ee){switch(e){case"namespaces":return a;case"services":return v($);case"servicesinit":return b();case"pods":return o($);case"deployments":return i($);case"deploymentsinit":return n();case"daemonsets":return d($);case"daemonsetsinit":return c();case"statefulsetsinit":return l();case"statefulsets":return u($);case"jobs":return g($);case"jobsinit":return y();case"cronjobs":return p($);case"cronjobsinit":return m();case"endpoints":return k($);case"ingresses":return f($,ee);case"ingressesinit":return h($,ee);case"networkpolicies":return P($);case"configmaps":return R($);case"configmapsinit":return x($);case"secrets":return V($);case"secretsinit":return w($);case"resourcequotas":return C($);case"limitranges":return G($);case"horizontalpodautoscalers":return S($);case"poddisruptionbudgets":return D($);case"persistentvolumeclaims":return A($);case"persistentvolumes":return q;case"storageclasses":return N;case"serviceaccounts":return L($);case"roles":return M($);case"rolebindings":return U($);case"clusterroles":return z;case"clusterrolebindings":return I;case"podsecuritypolicies":return T;case"cloneset":return O($);case"advancedstatefulset":return B($);case"advanceddaemonset":return j($);case"broadcastjob":return W($);case"advancedcronjob":return F($);case"sidecarsets":return J();case"rollouts":return H($);case"mysql":return E($);case"redis":return K($);case"kafka":return Q($);case"mongodb":return _($);case"postgresql":return X($);case"backupMysql":return Y(ee,$);case"oamApplication":return Z($);case"schedule":return r();case"backup":return t();case"restore":return s();default:return{}}}const a={apiVersion:"v1",kind:"Namespace",metadata:{name:"test1",annotations:{},labels:{}}},s=()=>({kind:"Restore",apiVersion:"velero.io/v1",metadata:{name:"testa-restore-1723709830",namespace:"velero",labels:{"kubeasy.com/create":"true"}},spec:{backupName:"testa",includedNamespaces:["default"],excludedResources:["nodes","events","events.events.k8s.io","backups.velero.io","restores.velero.io","resticrepositories.velero.io","csinodes.storage.k8s.io","volumeattachments.storage.k8s.io","backuprepositories.velero.io"]}}),t=()=>({kind:"Backup",apiVersion:"velero.io/v1",metadata:{name:"backup",namespace:"velero",labels:{kubeVelero:"true"}},spec:{includedNamespaces:["*"],includedResources:["*"],ttl:"720h0m0s"}}),r=()=>({apiVersion:"velero.io/v1",kind:"Schedule",metadata:{name:"backtasks",annotations:{},labels:{kubeVelero:"true"}},spec:{schedule:"01 03 * * *",template:{ttl:"720h0m0s",includedNamespaces:["krm","default","kube-public"],includedResources:["deployment","pod","statefulset"]}}}),o=e=>({apiVersion:"v1",kind:"Pod",metadata:{name:"debug",namespace:e},spec:{containers:[{name:"debug",image:"nicolaka/netshoot",command:["/bin/sh"],args:["-c","sleep 100000"],resources:{limits:{cpu:"100m",memory:"128Mi"},requests:{cpu:"50m",memory:"64Mi"}}}]}}),i=e=>({apiVersion:"apps/v1",kind:"Deployment",metadata:{name:"nginx-deployment",namespace:e,labels:{app:"nginx"}},spec:{replicas:1,selector:{matchLabels:{app:"nginx"}},template:{metadata:{labels:{app:"nginx"}},spec:{containers:[{name:"nginx",image:"nginx:1.14.2",ports:[{containerPort:80}]}]}}}}),n=()=>({apiVersion:"apps/v1",kind:"Deployment",metadata:{name:"",namespace:"",labels:{}},spec:{progressDeadlineSeconds:600,revisionHistoryLimit:10,minReadySeconds:60,replicas:1,selector:{matchLabels:{}},strategy:{type:"RollingUpdate",rollingUpdate:{maxSurge:"25%",maxUnavailable:"25%"}},template:{metadata:{labels:{}},spec:{containers:[{name:"container-0",image:"nginx:latest",imagePullPolicy:"Always",stdin:!1,tty:!0}],initContainers:[],affinity:{},restartPolicy:"Always",terminationGracePeriodSeconds:30,dnsPolicy:"ClusterFirst",tolerations:[],hostIPC:null,hostNetwork:null,hostPID:null,shareProcessNamespace:null,subdomain:"",hostname:"",hostAliases:[],securityContext:{seLinuxOptions:{}},dnsConfig:{nameservers:[],searches:[],options:[]}}}}}),c=()=>({apiVersion:"apps/v1",kind:"DaemonSet",metadata:{name:"",namespace:"",labels:{}},spec:{progressDeadlineSeconds:600,revisionHistoryLimit:10,replicas:1,selector:{matchLabels:{}},strategy:{type:"RollingUpdate",rollingUpdate:{maxSurge:"25%",maxUnavailable:"25%"}},template:{metadata:{labels:{}},spec:{containers:[{name:"container-0",image:"nginx:latest",imagePullPolicy:"Always",stdin:!1,tty:!0}],initContainers:[],affinity:{},restartPolicy:"Always",terminationGracePeriodSeconds:30,dnsPolicy:"ClusterFirst",tolerations:[],hostIPC:null,hostNetwork:null,hostPID:null,shareProcessNamespace:null,subdomain:"",hostname:"",hostAliases:[],securityContext:{seLinuxOptions:{}},dnsConfig:{nameservers:[],searches:[],options:[]}}}}}),l=()=>({apiVersion:"apps/v1",kind:"StatefulSet",metadata:{name:"",namespace:"",labels:{}},spec:{progressDeadlineSeconds:600,revisionHistoryLimit:10,replicas:1,selector:{matchLabels:{}},strategy:{type:"RollingUpdate",rollingUpdate:{maxSurge:"25%",maxUnavailable:"25%"}},template:{metadata:{labels:{}},spec:{containers:[{name:"container-0",image:"nginx:latest",imagePullPolicy:"Always",stdin:!1,tty:!0}],initContainers:[],affinity:{},restartPolicy:"Always",terminationGracePeriodSeconds:30,dnsPolicy:"ClusterFirst",tolerations:[],hostIPC:null,hostNetwork:null,hostPID:null,shareProcessNamespace:null,subdomain:"",hostname:"",hostAliases:[],securityContext:{seLinuxOptions:{}},dnsConfig:{nameservers:[],searches:[],options:[]}}}}}),p=e=>({apiVersion:"batch/v1",kind:"CronJob",metadata:{name:"hello",namespace:e},spec:{schedule:"*/1 * * * *",jobTemplate:{spec:{template:{spec:{containers:[{name:"hello",image:"busybox",imagePullPolicy:"IfNotPresent",command:["/bin/sh","-c","date; echo Hello from the Kubernetes cluster"]}],restartPolicy:"OnFailure"}}}}}}),m=e=>({apiVersion:"batch/v1",kind:"CronJob",metadata:{name:"",namespace:""},spec:{schedule:"*/1 * * * *",jobTemplate:{spec:{template:{spec:{containers:[],restartPolicy:"OnFailure"}}}}}}),u=e=>({apiVersion:"apps/v1",kind:"StatefulSet",metadata:{name:"web",namespace:e},spec:{selector:{matchLabels:{app:"web"}},serviceName:"web",replicas:1,template:{metadata:{labels:{app:"web"}},spec:{terminationGracePeriodSeconds:10,containers:[{name:"web",image:"nginx",ports:[{containerPort:80,name:"web"}]}]}}}}),d=e=>({apiVersion:"apps/v1",kind:"DaemonSet",metadata:{name:"fluentd-elasticsearch",namespace:e,labels:{"k8s-app":"fluentd-logging"}},spec:{selector:{matchLabels:{name:"fluentd-elasticsearch"}},template:{metadata:{labels:{name:"fluentd-elasticsearch"}},spec:{tolerations:[{key:"node-role.kubernetes.io/master",effect:"NoSchedule"}],containers:[{name:"fluentd-elasticsearch",image:"quay.io/fluentd_elasticsearch/fluentd:v2.5.2",resources:{limits:{memory:"200Mi"},requests:{cpu:"100m",memory:"200Mi"}},volumeMounts:[{name:"varlog",mountPath:"/var/log"},{name:"varlibdockercontainers",mountPath:"/var/lib/docker/containers",readOnly:!0}]}],terminationGracePeriodSeconds:30,volumes:[{name:"varlog",hostPath:{path:"/var/log"}},{name:"varlibdockercontainers",hostPath:{path:"/var/lib/docker/containers"}}]}}}}),y=()=>({apiVersion:"batch/v1",kind:"Job",metadata:{name:"",namespace:"",labels:{}},spec:{template:{metadata:{labels:{}},spec:{containers:[],restartPolicy:"Never"}},backoffLimit:4}}),g=e=>({apiVersion:"batch/v1",kind:"Job",metadata:{name:"pi",namespace:e},spec:{template:{spec:{containers:[{name:"pi",image:"perl",command:["perl","-Mbignum=bpi","-wle","print bpi(2000)"]}],restartPolicy:"Never"}},backoffLimit:4}}),b=()=>({apiVersion:"v1",kind:"Service",metadata:{name:"",namespace:"",labels:{},annotations:{}},spec:{type:"ClusterIP"}}),v=e=>({apiVersion:"v1",kind:"Service",metadata:{name:"my-service",namespace:e},spec:{selector:{app:"MyApp"},ports:[{protocol:"TCP",port:80,targetPort:9376}]}}),k=e=>({kind:"Endpoints",apiVersion:"v1",metadata:{name:"elasticsearch-1",namespace:e,annotations:{},labels:{}},subsets:[{addresses:[{ip:"192.168.11.13"}],ports:[{port:9200}]}]}),h=(e,a)=>{let s={};return s="networking.k8s.io/v1"===a?{service:{name:null,port:{number:null}}}:{serviceName:null,servicePort:null},{apiVersion:a,kind:"Ingress",metadata:{name:"",namespace:e,annotations:{"kubernetes.io/ingress.class":"nginx"}},spec:{tls:[],rules:[{host:null,http:{paths:[{path:"/",pathType:"Prefix",backend:s}]}}]}}},f=(e,a)=>{let s={};return s="networking.k8s.io/v1"===a?{service:{name:"nginx",port:{number:80}}}:{serviceName:"nginx",servicePort:80},{apiVersion:a,kind:"Ingress",metadata:{name:"nginx",namespace:e,annotations:{"kubernetes.io/ingress.class":"nginx"}},spec:{rules:[{host:"www.example.com",http:{paths:[{path:"/",pathType:"Prefix",backend:s}]}}]}}},P=e=>({apiVersion:"networking.k8s.io/v1",kind:"NetworkPolicy",metadata:{name:"test-network-policy",namespace:e},spec:{podSelector:{matchLabels:{role:"db"}},policyTypes:["Ingress","Egress"],ingress:[{from:[{ipBlock:{cidr:"172.17.0.0/16",except:["172.17.1.0/24"]}},{namespaceSelector:{matchLabels:{project:"myproject"}}},{podSelector:{matchLabels:{role:"frontend"}}}],ports:[{protocol:"TCP",port:6379}]}],egress:[{to:[{ipBlock:{cidr:"10.0.0.0/24"}}],ports:[{protocol:"TCP",port:5978}]}]}}),x=e=>({apiVersion:"v1",kind:"ConfigMap",metadata:{name:"",namespace:e},data:{},binaryData:{}}),R=e=>({apiVersion:"v1",kind:"ConfigMap",metadata:{name:"demo1",namespace:e},data:{test:"this is test data"}}),w=e=>({apiVersion:"v1",kind:"Secret",metadata:{name:"",namespace:e,labels:{},annotations:{}},type:"Opaque",data:{}}),V=e=>({apiVersion:"v1",kind:"Secret",metadata:{name:"secret-test",namespace:e},type:"kubernetes.io/basic-auth",stringData:{username:"admin",password:"123456"}}),C=e=>({apiVersion:"v1",kind:"ResourceQuota",metadata:{name:"pods-high",namespace:e},spec:{hard:{cpu:"1000",memory:"200Gi",pods:"10"},scopeSelector:{matchExpressions:[{operator:"In",scopeName:"PriorityClass",values:["high"]}]}}}),G=e=>({apiVersion:"v1",kind:"LimitRange",metadata:{name:"cpu-min-max-demo-lr",namespace:e},spec:{limits:[{max:{cpu:"800m"},min:{cpu:"200m"},type:"Container"}]}}),S=e=>({apiVersion:"autoscaling/v2",kind:"HorizontalPodAutoscaler",metadata:{name:"php-apache",namespace:e},spec:{scaleTargetRef:{apiVersion:"apps/v1",kind:"Deployment",name:"php-apache"},minReplicas:1,maxReplicas:10,metrics:[{type:"Resource",resource:{name:"cpu",target:{type:"Utilization",averageUtilization:50}}}]}}),D=e=>({apiVersion:"policy/v1beta1",kind:"PodDisruptionBudget",metadata:{name:"zk-pdb",namespace:e},spec:{minAvailable:2,selector:{matchLabels:{app:"zookeeper"}}}}),A=e=>({apiVersion:"v1",kind:"PersistentVolumeClaim",metadata:{name:"myclaim",namespace:e},spec:{accessModes:["ReadWriteOnce"],volumeMode:"Filesystem",resources:{requests:{storage:"8Gi"}},storageClassName:"slow",selector:{matchLabels:{release:"stable"},matchExpressions:[{key:"environment",operator:"In",values:["dev"]}]}}}),q={apiVersion:"v1",kind:"PersistentVolume",metadata:{name:"pv0003"},spec:{capacity:{storage:"5Gi"},volumeMode:"Filesystem",accessModes:["ReadWriteOnce"],persistentVolumeReclaimPolicy:"Recycle",storageClassName:"slow",mountOptions:["hard","nfsvers=4.1"],nfs:{path:"/tmp",server:"172.17.0.2"}}},N={apiVersion:"storage.k8s.io/v1",kind:"StorageClass",metadata:{name:"standard"},provisioner:"kubernetes.io/aws-ebs",parameters:{type:"gp2"},reclaimPolicy:"Retain",allowVolumeExpansion:!0,mountOptions:["debug"],volumeBindingMode:"Immediate"},L=e=>({apiVersion:"v1",kind:"ServiceAccount",metadata:{name:"build-robot",namespace:e},secrets:[{name:"build-robot-token-bvbk5"}]}),M=e=>({apiVersion:"rbac.authorization.k8s.io/v1",kind:"Role",metadata:{namespace:e,name:"pod-reader"},rules:[{apiGroups:[""],resources:["pods"],verbs:["get","watch","list"]}]}),U=e=>({apiVersion:"rbac.authorization.k8s.io/v1",kind:"RoleBinding",metadata:{name:"read-pods",namespace:e},subjects:[{kind:"User",name:"jane",apiGroup:"rbac.authorization.k8s.io"}],roleRef:{kind:"Role",name:"pod-reader",apiGroup:"rbac.authorization.k8s.io"}}),z={kind:"ClusterRole",apiVersion:"rbac.authorization.k8s.io/v1",metadata:{name:"read-all-clusterrole"},rules:[{nonResourceURLs:["/metrics"],verbs:["get","list","watch"]},{apiGroups:[""],resources:["bindings","componentstatuses","configmaps","endpoints","events","limitranges","namespaces","namespaces/finalize","namespaces/status","nodes","nodes/proxy","nodes/status","persistentvolumeclaims","persistentvolumeclaims/status","persistentvolumes","persistentvolumes/status","pods","pods/attach","pods/binding","pods/eviction","pods/exec","pods/log","pods/proxy","pods/status","podtemplates","replicationcontrollers","replicationcontrollers/scale","replicationcontrollers/status","resourcequotas","resourcequotas/status","serviceaccounts","services","services/proxy","services/status"],verbs:["get","list","watch"]},{apiGroups:["apps"],resources:["controllerrevisions","daemonsets","daemonsets/status","deployments","deployments/scale","deployments/status","replicasets","replicasets/scale","replicasets/status","statefulsets","statefulsets/scale","statefulsets/status"],verbs:["list","get","watch"]},{apiGroups:["batch"],resources:["jobs","jobs/status"],verbs:["get","list","watch"]},{apiGroups:["autoscaling"],resources:["horizontalpodautoscalers","horizontalpodautoscalers/status"],verbs:["get","list","watch"]},{apiGroups:["storage.k8s.io"],resources:["csidrivers","csinodes","storageclasses","volumeattachments","volumeattachments/status"],verbs:["get","list","watch"]},{apiGroups:["networking.k8s.io"],resources:["networkpolicies"],verbs:["get","list","watch"]},{apiGroups:["scheduling.k8s.io"],resources:["priorityclasses"],verbs:["get","list","watch"]},{apiGroups:["node.k8s.io"],resources:["runtimeclasses"],verbs:["get","list","watch"]},{apiGroups:["extensions"],resources:["ingresses","ingresses/status"],verbs:["get","list","watch"]},{apiGroups:["events.k8s.io"],resources:["events"],verbs:["get","list","watch"]},{apiGroups:["apiextensions.k8s.io"],resources:["customresourcedefinitions","customresourcedefinitions/status"],verbs:["get","list","watch"]},{apiGroups:["apiregistration.k8s.io"],resources:["apiservices","apiservices/status"],verbs:["get","list","watch"]},{apiGroups:["discovery.k8s.io"],resources:["endpointslices"],verbs:["get","list","watch"]},{apiGroups:["metrics.k8s.io"],resources:["pods","nodes"],verbs:["get","list","watch"]},{apiGroups:["policy"],resources:["poddisruptionbudgets","poddisruptionbudgets/status","podsecuritypolicies"],verbs:["get","list","watch"]},{apiGroups:["rbac.authorization.k8s.io"],resources:["clusterrolebindings","clusterroles","rolebindings","roles"],verbs:["get","list","watch"]}]},I={apiVersion:"rbac.authorization.k8s.io/v1",kind:"ClusterRoleBinding",metadata:{name:"developer-read-all"},subjects:[{kind:"ServiceAccount",name:"developer",namespace:"default"}],roleRef:{kind:"ClusterRole",name:"read-all-clusterrole",apiGroup:"rbac.authorization.k8s.io"}},T={apiVersion:"policy/v1beta1",kind:"PodSecurityPolicy",metadata:{name:"example"},spec:{privileged:!1,seLinux:{rule:"RunAsAny"},supplementalGroups:{rule:"RunAsAny"},runAsUser:{rule:"RunAsAny"},fsGroup:{rule:"RunAsAny"},volumes:["*"]}},O=e=>({apiVersion:"apps.kruise.io/v1alpha1",kind:"CloneSet",metadata:{annotations:{"kruise.io/auto-generate-persistent-pod-state":"true","kruise.io/preferred-persistent-topology":"kubernetes.io/hostname"},labels:{app:"sample"},name:"sample",namespace:e},spec:{replicas:1,revisionHistoryLimit:10,scaleStrategy:{},selector:{matchLabels:{app:"sample"}},template:{metadata:{labels:{app:"sample"}},spec:{containers:[{image:"nginx:1.7.9",imagePullPolicy:"Always",name:"nginx",resources:{limits:{cpu:"200m",memory:"300Mi"},requests:{cpu:"100m",memory:"200Mi"}}}],dnsPolicy:"ClusterFirst",restartPolicy:"Always",schedulerName:"default-scheduler",securityContext:{},terminationGracePeriodSeconds:30}},updateStrategy:{inPlaceUpdateStrategy:{gracePeriodSeconds:10},maxSurge:0,maxUnavailable:"20%",partition:0,type:"InPlaceIfPossible"}}}),B=e=>({apiVersion:"apps.kruise.io/v1beta1",kind:"StatefulSet",metadata:{name:"sample2",namespace:e},spec:{podManagementPolicy:"Parallel",replicas:1,revisionHistoryLimit:10,selector:{matchLabels:{app:"samples2"}},serviceName:"fake-service",template:{metadata:{labels:{app:"samples2"}},spec:{containers:[{image:"nginx:alpine",imagePullPolicy:"Always",name:"main"}],dnsPolicy:"ClusterFirst",readinessGates:[{conditionType:"InPlaceUpdateReady"}],restartPolicy:"Always",schedulerName:"default-scheduler",securityContext:{},terminationGracePeriodSeconds:30}},updateStrategy:{rollingUpdate:{maxUnavailable:"20%",minReadySeconds:0,partition:0,podUpdatePolicy:"InPlaceIfPossible"},type:"RollingUpdate"}}}),j=e=>({apiVersion:"apps.kruise.io/v1alpha1",kind:"DaemonSet",metadata:{labels:{app:"sample3"},name:"sample3",namespace:e},spec:{revisionHistoryLimit:10,selector:{matchLabels:{app:"sample3"}},template:{metadata:{labels:{app:"sample3"}},spec:{containers:[{image:"nginx:alpine",name:"nginx"}]}},updateStrategy:{rollingUpdate:{maxSurge:0,maxUnavailable:1,rollingUpdateType:"InPlaceIfPossible"},type:"RollingUpdate"}}}),W=e=>({apiVersion:"apps.kruise.io/v1alpha1",kind:"BroadcastJob",metadata:{name:"broadcastjob-nginx",namespace:e},spec:{template:{spec:{containers:[{name:"nginx",image:"nginx",command:["/bin/sh"],args:["-c","ls"]}],restartPolicy:"Never"}},completionPolicy:{type:"Always"}}}),F=e=>({apiVersion:"apps.kruise.io/v1alpha1",kind:"AdvancedCronJob",metadata:{name:"acj-test",namespace:e},spec:{schedule:"*/1 * * * *",template:{broadcastJobTemplate:{spec:{template:{spec:{containers:[{name:"nginx",image:"nginx",command:["/bin/sh"],args:["-c","ls"]}],restartPolicy:"Never"}},completionPolicy:{type:"Always"}}}}}}),H=e=>({apiVersion:"rollouts.kruise.io/v1beta1",kind:"Rollout",metadata:{name:"rollouts-demo",namespace:e},spec:{workloadRef:{apiVersion:"apps/v1",kind:"Deployment",name:"workload-demo"},strategy:{canary:{enableExtraWorkloadForCanary:!1,steps:[{replicas:1},{replicas:"50%"},{replicas:"100%"}]}}}}),J=()=>({apiVersion:"apps.kruise.io/v1alpha1",kind:"SidecarSet",metadata:{name:"test-sidecarset"},spec:{selector:{matchLabels:{app:"nginx"}},updateStrategy:{type:"RollingUpdate",maxUnavailable:1},containers:[{name:"sidecar1",image:"nginx",command:["sleep","999d"],volumeMounts:[{name:"log-volume",mountPath:"/var/log"}]}],volumes:[{name:"log-volume",emptyDir:{}}]}}),E=e=>({apiVersion:"apps.kubeblocks.io/v1alpha1",kind:"Cluster",metadata:{name:"mysql-cluster",namespace:e},spec:{affinity:{podAntiAffinity:"Preferred",tenancy:"SharedNode"},clusterDefinitionRef:"",clusterVersionRef:"",componentSpecs:[{componentDefRef:"mysql",monitor:!1,name:"mysql",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"1",memory:"1Gi"}},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]}],monitor:{},resources:{cpu:"0",memory:"0"},storage:{size:"0"},terminationPolicy:"Delete"}}),K=e=>({apiVersion:"apps.kubeblocks.io/v1alpha1",kind:"Cluster",metadata:{name:"redis-cluster",namespace:e},spec:{affinity:{podAntiAffinity:"Preferred",tenancy:"SharedNode"},clusterDefinitionRef:"",clusterVersionRef:"",componentSpecs:[{componentDefRef:"redis",enabledLogs:["running"],monitor:!1,name:"redis",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"1",memory:"1Gi"}},switchPolicy:{type:"Noop"},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]},{componentDefRef:"redis-sentinel",monitor:!1,name:"redis-sentinel",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1G"},requests:{cpu:"200m",memory:"1Gi"}},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]}],monitor:{},resources:{cpu:"0",memory:"0"},storage:{size:"0"},terminationPolicy:"Delete"}}),Q=e=>({apiVersion:"apps.kubeblocks.io/v1alpha1",kind:"Cluster",metadata:{name:"kafka-cluster",namespace:e},spec:{affinity:{podAntiAffinity:"Preferred",tenancy:"SharedNode"},clusterDefinitionRef:"kafka",clusterVersionRef:"",componentSpecs:[{componentDefRef:"kafka-server",monitor:!1,name:"kafka-server",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"1",memory:"1Gi"}},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]},{componentDefRef:"kafka-broker",monitor:!1,name:"kafka-broker",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"1",memory:"1Gi"}},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]},{componentDefRef:"controller",monitor:!1,name:"controller",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"1",memory:"1Gi"}},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]},{componentDefRef:"kafka-exporter",monitor:!1,name:"kafka-exporter",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"1",memory:"1Gi"}},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]}],monitor:{},resources:{cpu:"0",memory:"0"},storage:{size:"0"},terminationPolicy:"Delete"}}),_=e=>({apiVersion:"apps.kubeblocks.io/v1alpha1",kind:"Cluster",metadata:{name:"mongodb-cluster",namespace:e},spec:{affinity:{podAntiAffinity:"Preferred",tenancy:"SharedNode"},clusterDefinitionRef:"mongodb",clusterVersionRef:"",componentSpecs:[{componentDefRef:"mongodb",enabledLogs:["running"],monitor:!1,name:"mongodb",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"1",memory:"1Gi"}},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]}],monitor:{},resources:{cpu:"0",memory:"0"},storage:{size:"0"},terminationPolicy:"Delete"}}),X=e=>({apiVersion:"apps.kubeblocks.io/v1alpha1",kind:"Cluster",metadata:{name:"postgresql-cluster",namespace:e},spec:{affinity:{podAntiAffinity:"Preferred",tenancy:"SharedNode",topologyKeys:["kubernetes.io/hostname"]},clusterDefinitionRef:"postgresql",componentSpecs:[{componentDefRef:"postgresql",enabledLogs:["running"],monitor:!1,name:"postgresql",noCreatePDB:!1,replicas:1,resources:{limits:{cpu:"1",memory:"1Gi"},requests:{cpu:"0.5",memory:"0.5Gi"}},switchPolicy:{type:"Noop"},volumeClaimTemplates:[{name:"data",spec:{accessModes:["ReadWriteOnce"],resources:{requests:{storage:"20Gi"}}}}]}],terminationPolicy:"Delete"}}),Y=(e,a)=>({apiVersion:"dataprotection.kubeblocks.io/v1alpha1",kind:"Backup",metadata:{name:e,namespace:a},spec:{backupMethod:"xtrabackup",backupPolicyName:e+"-mysql-backup-policy",deletionPolicy:"Delete"}}),Z=e=>({apiVersion:"core.oam.dev/v1beta1",kind:"Application",metadata:{name:"first-vela-app",namespace:e},spec:{components:[{name:"express-server",type:"webservice",properties:{image:"nginx:1.25.5",ports:[{port:8e3,expose:!0}]},traits:[{type:"scaler",properties:{replicas:1}}]}],policies:[{name:"target-default",type:"topology",properties:{clusters:["local"],namespace:"default"}},{name:"target-prod",type:"topology",properties:{clusters:["local"],namespace:"prod"}},{name:"deploy-ha",type:"override",properties:{components:[{type:"webservice",traits:[{type:"scaler",properties:{replicas:2}}]}]}}],workflow:{steps:[{name:"deploy2default",type:"deploy",properties:{policies:["target-default"]}},{name:"manual-approval",type:"suspend"},{name:"deploy2prod",type:"deploy",properties:{policies:["target-prod","deploy-ha"]}}]}}});export{e as g};
