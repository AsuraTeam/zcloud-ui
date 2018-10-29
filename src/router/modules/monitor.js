/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const monitorRouter = {
  path: '/monitor',
  component: Layout,
  name: 'monitor',
  meta: {
    title: 'monitor',
    icon: 'monitor'
  },
  children: [
    {
      path: 'autoScale',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: '自动伸缩',
      meta: { title: '自动伸缩' },
      children: [
        {
          path: 'menu-app-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: '伸缩配置',
          meta: { title: '伸缩配置' }
        },
        {
          path: 'menu-app-2',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: '伸缩日志',
          meta: { title: '伸缩日志' }
        }
      ]
    },
    {
      path: 'monitorManager',
      name: '监控管理',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '监控管理' }
    }
  ]
}

export default monitorRouter
