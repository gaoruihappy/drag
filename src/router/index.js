import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mixin from '@/components/mixin'
import Count from '@/components/count'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mixin',
      name: 'mymixin',
      component: Mixin
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    }
  ]
})
