// 系统参数管理
import Layout from '@/layout'
export default {
  path: '/system-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'systemManage',
  meta: {
    title: '系统参数管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'system-parameter-maintenance',
      component: () => import('@/views/BusinessTogether/systemManage/systemParameterMaintenance'),
      name: 'systemParameterMaintenance',
      meta: {
        title: '系统参数维护',
        noCache: true,
        icon: 'systemmaintain'
      }
    },
    {
      path: 'system-parameter-audit',
      component: () => import('@/views/BusinessTogether/systemManage/systemParameterAudit'),
      name: 'systemParameterAudit',
      meta: {
        title: '系统参数审核',
        noCache: true,
        icon: 'systemaudit'
      }
    },
    {
      path: 'system-parameter-query',
      component: () => import('@/views/BusinessTogether/systemManage/systemParameterQuery'),
      name: 'systemParameterQuery',
      meta: {
        title: '系统参数查询',
        noCache: true,
        icon: 'systemquery'
      }
    }
  ]
}
