// 绩效管理
import Layout from '@/layout'
export default {
  path: '/performance-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'performanceManage',
  meta: {
    title: '绩效管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'post-maintenance',
      component: () => import('@/views/BusinessTogether/performanceManage/postMaintenance'),
      name: 'postMaintenance',
      meta: {
        title: '岗位维护',
        noCache: true,
        icon: 'vindicate'
      }
    },
    // {
    //   path: 'personnel-maintenance',
    //   component: () => import('@/views/BusinessTogether/performanceManage/personnelMaintenance'),
    //   name: 'personnelMaintenance',
    //   meta: {
    //     title: '岗位人员维护',
    //     noCache: true,
    //     icon: 'spot'
    //   }
    // },
    // {
    //   path: 'job-menu-maintenance',
    //   component: () => import('@/views/BusinessTogether/performanceManage/jobMenuMaintenance'),
    //   name: 'jobMenuMaintenance',
    //   meta: {
    //     title: '岗位菜单维护',
    //     noCache: true,
    //     icon: 'spot'
    //   }
    // },
    {
      path: 'post-online-Rrecord',
      component: () => import('@/views/BusinessTogether/performanceManage/postOnlineRecord'),
      name: 'postOnlineRecord',
      meta: {
        title: '岗位上线记录',
        noCache: true,
        icon: 'online'
      }
    },
    {
      path: 'post-operation-record',
      component: () => import('@/views/BusinessTogether/performanceManage/postOperationRecord'),
      name: 'postOperationRecord',
      meta: {
        title: '岗位操作记录',
        noCache: true,
        icon: 'handle'
      }
    }
  ]
}
