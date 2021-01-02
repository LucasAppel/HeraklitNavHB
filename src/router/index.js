import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dragscroll from 'dragscroll'

Vue.use(VueRouter)
Vue.use(Dragscroll)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DemoWidth',
    name: 'DemoWidth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/DemoWidth.vue')
  },
  {
    path: '/DemoClick',
    name: 'DemoClick',
    component: () => import('../views/DemoClick.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  methods: {
    resetZoomer() {
      document.getElementById("zoomer").setAttribute("zvalue", 1);
    }
  }
  
})

export default router
