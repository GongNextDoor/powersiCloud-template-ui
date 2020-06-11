// 文件发布管理
import Layout from '@/layout'
export default {
  path: '/file-release-manage',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'fileReleaseManage',
  meta: {
    title: '文件发布管理',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'file-information-entry',
      component: () => import('@/views/BusinessTogether/fileReleaseManage/fileInformationEntry'),
      name: 'fileInformationEntry',
      meta: {
        title: '文件信息维护',
        noCache: true,
        icon: 'filekeep'
      }
    },
    {
      path: 'file-information-audit',
      component: () => import('@/views/BusinessTogether/fileReleaseManage/fileInformationAudit'),
      name: 'fileInformationAudit',
      meta: {
        title: '文件信息审核',
        noCache: true,
        icon: 'fileaudit'
      }
    },
    {
      path: 'file-infomation-query',
      component: () => import('@/views/BusinessTogether/fileReleaseManage/fileInfomationQuery'),
      name: 'fileInfomationQuery',
      meta: {
        title: '文件信息查询',
        noCache: true,
        icon: 'filequery'
      }
    }
  ]
}
