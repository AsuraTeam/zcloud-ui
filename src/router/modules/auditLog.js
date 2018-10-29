/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const auditLog = {
  path: '/appLog',
  component: Layout,
  name: '审计日志',
  meta: {
    title: '审计日志',
    icon: 'log'
  },
  children: [
    {
      path: 'operationLog',
      name: '操作日志',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '操作日志' }
    }
  ]
}

export default auditLog
