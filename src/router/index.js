import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Hello'
import service from '@/components/service/service'
import product from '@/components/product/product'
import madeOrder from '@/components/madeOrder/madeOrder'
import aboutUS from '@/components/aboutUS/aboutUS'
import contactUS from '@/components/contactUS/contactUS'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/service',
      component: service
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/madeOrder',
      component: madeOrder
    },
    {
      path: '/aboutUS',
      component: aboutUS
    },
    {
      path: '/contactUS',
      component: contactUS
    }
  ]
})
