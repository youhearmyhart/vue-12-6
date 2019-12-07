import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import firstpages from '@/pages/firstpages/firstpages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/firstpages',
      name:'firstpages',
      component:firstpages
    }
  ]
})
