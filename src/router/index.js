import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Shopping from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
    // component: () => import(/* webpackChunkName: "about" */ '../views/Produc.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/shopping',
    name: 'Shopping',
    component:Shopping
    // component: () => import(/* webpackChunkName: "about" */ '../views/Produc.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component:Success
    // component: () => import(/* webpackChunkName: "about" */ '../views/Produc.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
