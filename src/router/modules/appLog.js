/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const appLogRouter = {
  path: '/appLog',
  component: Layout,
  name: '应用日志',
  meta: {
    title: '应用日志',
    icon: 'log'
  },
  children: [
    {
      path: 'dataSource',
      name: '数据源配置',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '数据源配置' }
    },
    {
      path: 'logDriver',
      name: '日志驱动配置',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '日志驱动配置' }
    },
    {
      path: 'logShow',
      name: '日志查看',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '日志查看' }
    }
  ]
}

export default appLogRouter
