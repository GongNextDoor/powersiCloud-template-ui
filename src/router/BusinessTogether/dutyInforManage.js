// 值班信息管理
import Layout from '@/layout'
export default {
  path: '/duty-infor-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'dutyInforManage',
  meta: {
    title: '值班信息管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'reporting-duty-information',
      component: () => import('@/views/BusinessTogether/dutyInforManage/ReportingDutyInformation'),
      name: 'ReportingDutyInformation',
      meta: {
        title: '值班信息填报',
        noCache: true,
        icon: 'dutysubmit'
      }
    },
    {
      path: 'duty-filling-confirmation',
      component: () => import('@/views/BusinessTogether/dutyInforManage/dutyFillingConfirmation'),
      name: 'dutyFillingConfirmation',
      meta: {
        title: '值班填报确认',
        noCache: true,
        icon: 'dutyconfirm'
      }
    },
    {
      path: 'duty-information-release',
      component: () => import('@/views/BusinessTogether/dutyInforManage/dutyInformationRelease'),
      name: 'dutyInformationRelease',
      meta: {
        title: '值班信息发布',
        noCache: true,
        icon: 'dutyissue'
      }
    },
    {
      path: 'duty-notice-enquiry',
      component: () => import('@/views/BusinessTogether/dutyInforManage/dutyNoticeEnquiry'),
      name: 'dutyNoticeEnquiry',
      meta: {
        title: '值班通知查询',
        noCache: true,
        icon: 'dutyquery'
      }
    }
  ]
}
