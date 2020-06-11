// 来访登记管理
import Layout from '@/layout'
export default {
  path: '/visitor-registration-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'visitorRegistrationManage',
  meta: {
    title: '来访登记管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'visit-type-maintenance',
      component: () => import('@/views/BusinessTogether/visitorRegistrationManage/visitTypeMaintenance'),
      name: 'visitTypeMaintenance',
      meta: {
        title: '来访类型维护',
        noCache: true,
        icon: 'visittype'
      }
    },
    {
      path: 'registration-info-maintenance',
      component: () => import('@/views/BusinessTogether/visitorRegistrationManage/registrationInfoMaintenance'),
      name: 'registrationInfoMaintenance',
      meta: {
        title: '登记信息维护',
        noCache: true,
        icon: 'infomaintain'
      }
    },
    {
      path: 'registration-info-query',
      component: () => import('@/views/BusinessTogether/visitorRegistrationManage/registrationInfoQuery'),
      name: 'registrationInfoQuery',
      meta: {
        title: '登记信息查询',
        noCache: true,
        icon: 'infoquery'
      }
    }
  ]
}
