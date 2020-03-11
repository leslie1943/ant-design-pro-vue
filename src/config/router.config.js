// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    children: [
      {
        path: '/',
        component: PageView,
        meta: { title: '首页', icon: 'form', permission: ['form'] }
      },
      // 工作台
      {
        path: '/workbench/',
        name: 'workbench',
        redirect: '/workbench',
        component: PageView,
        meta: { title: '工作台', icon: 'form', permission: ['form'] },
        hideChildrenInMenu: true,
        children: [
          {
            path: '/workbench',
            name: 'workbench-center',
            component: () => import('@/views/hospital/workbench'),
            meta: { title: '工作台', keepAlive: true, permission: ['form'] }
          }
        ]
      },
      // 需方认证
      {
        path: '/hospital/certificate',
        name: 'hospital-certificate',
        redirect: '/hospital/certificate',
        component: PageView,
        meta: { title: '需方认证', icon: 'form', permission: ['form'] },
        hideChildrenInMenu: true,
        children: [
          {
            path: '/hospital/certificate',
            name: 'hospital-certificate',
            component: () => import('@/views/hospital/certificate'),
            meta: { title: '需方认证', keepAlive: true, permission: ['form'] }
          }
        ]
      },
      // 参与项目
      {
        path: '/participate',
        redirect: '/participate/research',
        component: PageView,
        meta: { title: '参与项目', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/participate/research',
            name: 'participate-research',
            component: () => import('@/views/participate/research'),
            meta: { title: '市场调研', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/participate/project',
            name: 'participate-project',
            component: () => import('@/views/participate/project'),
            meta: { title: '竞价项目', keepAlive: true, permission: ['form'] }
          }
        ]
      },
      // 协议供货
      {
        path: '/agreement',
        redirect: '/agreement/relation',
        component: PageView,
        meta: { title: '协议供货', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/agreement/relation',
            name: 'agreement-relation',
            component: () => import('@/views/agreement/relation'),
            meta: { title: '协议关系', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/agreement/product',
            name: 'agreement-product',
            component: () => import('@/views/agreement/product'),
            meta: { title: '协议产品', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // 付费服务
      {
        path: '/pay',
        redirect: '/pay/technical',
        component: PageView,
        meta: { title: '付费服务', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/pay/technical',
            name: 'pay-technical',
            component: () => import('@/views/payService/technical'),
            meta: { title: '技术服务', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // 企业中心
      {
        path: '/supplier',
        redirect: '/supplier/credentials',
        component: PageView,
        meta: { title: '企业中心', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/supplier/credentials',
            name: 'supplier-credentials',
            component: () => import('@/views/supplier/credentials'),
            meta: { title: '企业实名', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/supplier/certificate',
            name: 'supplier-certificate',
            component: () => import('@/views/supplier/certificate'),
            meta: { title: '资质证件', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/supplier/product',
            name: 'supplier-product',
            component: () => import('@/views/supplier/product'),
            meta: { title: '我的产品', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/supplier/shop',
            name: 'supplier-shop',
            component: () => import('@/views/supplier/shop'),
            meta: { title: '我的店铺', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // 个人中心
      {
        path: '/personal',
        redirect: '/personal/info',
        component: PageView,
        meta: { title: '个人中心', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/personal/info',
            name: 'personal-info',
            component: () => import('@/views/personal/info'),
            meta: { title: '个人信息', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/personal/password',
            name: 'personal-password',
            component: () => import('@/views/personal/password'),
            meta: { title: '修改密码', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/personal/mobile',
            name: 'personal-mobile',
            component: () => import('@/views/personal/mobile'),
            meta: { title: '修改手机', keepAlive: true, permission: ['form'] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
