import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/home/Home.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '@/components/signup/SignUp.vue'
import ForgotPassword from '@/components/forgot-password/ForgotPassword.vue'
import ResetPassword from '@/components/reset-password/ResetPassword.vue'
import Cart from '../components/cart/Cart.vue'
import Wishlist from '../components/wishlist/Wishlist.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
