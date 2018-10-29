/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const appCenterRouter = {
  path: '/appCenter',
  component: Layout,
  // redirect: '/appCenter/menu1/menu1-1',
  name: 'appCenter',
  meta: {
    title: 'appCenter',
    icon: 'application'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'containerManager',
      meta: { title: 'containerManager' },
      // redirect: '/nested/menu1/menu-app-1',
      children: [
        {
          path: 'menu-app-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: '应用管理',
          meta: { title: '应用管理' }
        },
        {
          path: 'menu-app-2',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: '服务管理',
          meta: { title: '服务管理' }
        },
        {
          path: 'menu-app-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: '容器管理',
          meta: { title: '容器管理' }
        },
        {
          path: 'menu-app-4',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: '服务管理',
          meta: { title: '配置管理' }
        }
      ]
    },
    {
      path: 'serviceCompose',
      name: 'serviceCompose',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'serviceCompose' }
    },
    {
      path: 'imageCenter',
      name: 'imageCenter',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'imageCenter' }
    },
    {
      path: 'ci',
      name: 'ci',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'ci' }
    },
    {
      path: 'serviceDeploy',
      name: 'serviceDeploy',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'serviceDeploy' }
    },
    {
      path: 'pipeline',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'pipeline' },
      name: 'pipeline'
    },
    {
      path: 'batchDeploy',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'batchDeploy' },
      name: 'batchDeploy'
    }
  ]
}

export default appCenterRouter
