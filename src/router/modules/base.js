/** When your routing table is too long, you can split it into small modules**/
/** 基础设施 **/
import Layout from '@/views/layout/Layout'

const baseRouter = {
  path: '/base',
  component: Layout,
  name: '基础设施',
  meta: {
    title: '基础设施',
    icon: 'base'
  },
  children: [
    {
      path: 'clusterManager',
      name: '集群管理',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '集群管理' }
    },
    {
      path: 'network',
      name: '网络管理',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '网络管理' },
      children: [
        {
          path: 'loadBalance',
          name: '负载均衡',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '负载均衡' }
        },
        {
          path: 'certManager',
          name: '证书管理',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '证书管理' }
        }
      ]
    },
    {
      path: 'quota',
      name: '资源配额',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '资源配额' },
      children: [
        {
          path: 'resourceSpace',
          name: '资源空间',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '资源空间' }
        },
        {
          path: 'serviceUsed',
          name: '服务用量',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: '服务用量' }
        }
      ]
    }
  ]
}

export default baseRouter
