import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/demo/demo1'
  },
  {
    path: '/demo',
    component: Layout,
    name: 'demo',
    meta: { title: '示例' },
    redirect: '/demo/demo1',
    children: [
      {
        path: 'demo1',
        component: () => import('@/views/demo/demo1/index'),
        name: 'demo1',
        meta: { title: '示例1' }
      },
      {
        path: 'demo2',
        component: () => import('@/views/demo/demo2/index'),
        name: 'demo2',
        meta: { title: '示例2' }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
