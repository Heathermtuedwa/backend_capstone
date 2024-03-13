import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import CheckoutView from '../views/CheckoutView.vue';
import ProductsView from '../views/ProductsView.vue';
import loginView from '../views/loginView.vue';
import AdminView from '../views/AdminView.vue';
import ContactView from '../views/ContactView.vue';
import userView from '../views/userview.vue';
import singleProductView from '../views/singleProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path:'/checkout',
    name:'checkout',
    component:CheckoutView
  },
  {
    path:'/Products',
    name:'Products',
    component:ProductsView,

  },
  {
    path:'/login',
    name:'login',
    component:loginView
  },
  {
    path:'/contact',
    name:'contact',
    component:ContactView
  },
  {
    path:'/Admin',
    name:'admin',
    component:AdminView
  },
  {
    path:'/user',
    name:'user',
    component:userView
  },
  {
    path:'/Products/:ProductsId',
    name:'singleProduct',
    component:singleProductView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

