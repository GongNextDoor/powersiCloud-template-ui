// 政务服务管理
import Layout from '@/layout'
export default {
  path: '/government-service-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'governmentServiceManage',
  meta: {
    title: '政务服务好差评管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'evaluation-management',
      component: () => import('@/views/BusinessTogether/governmentServiceManage/evaluationManagement'),
      name: 'evaluationManagement',
      meta: {
        title: '服务评价管理',
        noCache: true,
        icon: 'manage'
      }
    },
    {
      path: 'evaluation-query',
      component: () => import('@/views/BusinessTogether/governmentServiceManage/evaluationQuery'),
      name: 'evaluationQuery',
      meta: {
        title: '服务评价查询',
        noCache: true,
        icon: 'query'
      }
    }
  ]
}
