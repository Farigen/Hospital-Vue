import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constRouters = [
  {
    path: '/login',
    component: ()=>import('../views/login/index')
  },
  {
    path: '/register',
    component: ()=>import('../views/register/index')
  },
  {
    path: '/',
    component: ()=>import('../views/findDept/index'),
    children:[
      {
        path: '/',
        component: ()=> import('../views/findDept/component/main/carousel')
      },
      {
        path: 'dept/:name',
        component: ()=>import('../views/findDept/component/main/depts')
      }
    ]
  },
  {
    // /reservation:dept：需要传递具体是哪个科室的参数，以查找doc
    path: '/reservation/:dept',
    component: () => import('../views/reservation/index'),
    children: [
      {
        path: '/',
        component: () => import('../views/reservation/component/reservation'),
      },
      {
        path: 'time/:doc',
        component: ()=>import('../views/reservation/component/time/dateList'),
      }
    ]
  },
  {
    path: '/account',
    component: ()=>import('../views/account/index'),
    children:[
      {
        path: '/',
        component: ()=>import('../views/account/component/info')
      },
      {
        path: 'home',
        component: ()=>import('../views/account/component/home')
      },
      {
        path: 'info',
        component: ()=>import('../views/account/component/info')
      },
      {
        path: 'avatar',
        component: ()=>import('../views/account/component/avatar')
      },
      {
        path: 'record',
        component: ()=>import('../views/account/component/record')
      },
      {
        path: 'security',
        component: ()=>import('../views/account/component/security')
      },
      {
        path: 'invite',
        component: ()=>import('../views/account/component/invite')
      }

    ]
  },
]
export default  new VueRouter({
  routes: constRouters
})
