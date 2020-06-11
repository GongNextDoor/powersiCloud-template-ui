// 知识库管理
import Layout from '@/layout'
export default {
  path: '/knowledge-base-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'knowledgeBaseManage',
  meta: {
    title: '知识库管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'information-maintenance',
      component: () => import('@/views/BusinessTogether/knowledgeBaseManage/informationMaintenance'),
      name: 'informationMaintenance',
      meta: {
        title: '知识库信息维护',
        noCache: true,
        icon: 'knowledgemaintain'
      }
    },
    {
      path: 'Information-queryn',
      component: () => import('@/views/BusinessTogether/knowledgeBaseManage/InformationQuery'),
      name: 'InformationQuery',
      meta: {
        title: '知识库信息查询',
        noCache: true,
        icon: 'knowledgequery'
      }
    },
    {
      path: 'recent-browse',
      component: () => import('@/views/BusinessTogether/knowledgeBaseManage/recentBrowse'),
      name: 'RecentBrowse',
      meta: {
        title: '最近浏览',
        noCache: true,
        icon: 'recently'
      }
    }
  ]
}
