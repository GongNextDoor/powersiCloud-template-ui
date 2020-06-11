// 常用工具
import Layout from '@/layout'
export default {
  path: '/commonly-used-tools',
  // component: () => import('@/views/components/childRoutePage'),
  component: Layout,
  alwaysShow: true,
  name: 'commonlyUsedTools',
  meta: {
    title: '常用工具',
    noCache: true,
    icon: 'common'
  },
  children: [
    {
      path: 'auxiliary-tool',
      component: () => import('@/views/BusinessTogether/commonlyUsedTools/auxiliaryTool'),
      name: 'auxiliaryTool',
      meta: {
        title: '辅助工具',
        noCache: true,
        icon: 'tool'
      }
    }
  ]
}
