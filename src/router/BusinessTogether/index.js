// import Layout from '@/layout'
import MessageManage from './messageManage'
import PerformanceManage from './performanceManage'
import CommonlyUsedTools from './commonlyUsedTools'
import FileReleaseManage from './fileReleaseManage'
import GovernmentServiceManage from './governmentServiceManage'
import VisitorRegistrationManage from './visitorRegistrationManage'
import ExamManage from './examManage'
import DutyInforManage from './dutyInforManage'
import KnowledgeBaseManage from './knowledgeBaseManage'
import CreditFileManage from './creditFileManage'
import SystemManage from './systemManage'

export default [
  MessageManage,
  PerformanceManage,
  CommonlyUsedTools,
  FileReleaseManage,
  GovernmentServiceManage,
  VisitorRegistrationManage,
  ExamManage,
  DutyInforManage,
  KnowledgeBaseManage,
  CreditFileManage,
  SystemManage
]

// 这里目前不用了，之前是三级菜单，目前做成两级菜单
// export default {
//   path: '/business-together',
//   component: Layout,
//   alwaysShow: true,
//   meta: {
//     title: '业务协同',
//     icon: 'icon'
//   },
//   children: [
//     MessageManage,
//     PerformanceManage,
//     CommonlyUsedTools,
//     FileReleaseManage,
//     GovernmentServiceManage,
//     VisitorRegistrationManage,
//     ExamManage,
//     DutyInforManage,
//     KnowledgeBaseManage,
//     CreditFileManage,
//     SystemManage
//   ]
// }
