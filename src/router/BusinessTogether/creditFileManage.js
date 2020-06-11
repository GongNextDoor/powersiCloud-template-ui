// 信用档案管理
import Layout from '@/layout'
export default {
  path: '/credit-file-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'creditFileManage',
  meta: {
    title: '信用档案管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'by-inputting',
      component: () => import('@/views/BusinessTogether/creditFileManage/byInputting'),
      name: 'byInputting',
      meta: {
        title: '信用档案建档',
        noCache: true,
        icon: 'creditfiling'
      }
    },
    {
      path: 'credit-file-maintenance',
      component: () => import('@/views/BusinessTogether/creditFileManage/creditFileMaintenance'),
      name: 'creditFileMaintenance',
      meta: {
        title: '信用档案维护',
        noCache: true,
        icon: 'creditmaintain'
      }
    },
    {
      path: 'department-audit',
      component: () => import('@/views/BusinessTogether/creditFileManage/departmentAudit'),
      name: 'departmentAudit',
      meta: {
        title: '信用档案部门审核',
        noCache: true,
        icon: 'creditaudit'
      }
    },
    {
      path: 'credit-file-confirmation',
      component: () => import('@/views/BusinessTogether/creditFileManage/creditFileConfirmation'),
      name: 'creditFileConfirmation',
      meta: {
        title: '信用档案确认',
        noCache: true,
        icon: 'creditaffirm'
      }
    },
    {
      path: 'credit-file-query',
      component: () => import('@/views/BusinessTogether/creditFileManage/creditFileQuery'),
      name: 'creditFileQuery',
      meta: {
        title: '信用档案查询',
        noCache: true,
        icon: 'creditquery'
      }
    },
    {
      path: 'union-rewards-and-punishment',
      component: () => import('@/views/BusinessTogether/creditFileManage/unionRewardsAndPunishment'),
      name: 'unionRewardsAndPunishment',
      meta: {
        title: '联合奖罚查询',
        noCache: true,
        icon: 'jointquery'
      }
    }
  ]
}
