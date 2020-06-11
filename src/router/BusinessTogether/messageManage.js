// 消息管理
import Layout from '@/layout'
export default {
  path: '/message-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'messageManage',
  meta: {
    title: '消息管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'expert-message-template',
      component: () => import('@/views/BusinessTogether/messageManage/expertMessageTemplate'),
      name: 'expertMessageTemplate',
      meta: {
        title: '消息模板',
        noCache: true,
        icon: 'temp'
      }
    },
    {
      path: 'expert-message-notification',
      component: () => import('@/views/BusinessTogether/messageManage/expertMessageNotification'),
      name: 'expertMessageNotification',
      meta: {
        title: '消息通知',
        noCache: true,
        icon: 'inform'
      }
    }
  ]
}
