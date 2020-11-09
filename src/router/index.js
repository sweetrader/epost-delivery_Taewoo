import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  
  { path: '/', name: 'RegisterPost', component: () => import('@/views/post/RegisterPost.vue') },
  { path: '/post_result', name: 'PostResult', component: () => import('@/views/post/PostResult.vue') }
]

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
 
// })

export default router
