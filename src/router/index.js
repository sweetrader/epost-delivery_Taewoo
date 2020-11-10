import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  // post
  { path: '/', name: 'RegisterPost', component: () => import('@/views/post/RegisterPost.vue') },
  { path: '/post_result', name: 'PostResult', component: () => import('@/views/post/PostResult.vue') },
  { path: '/post_list', name: 'PostList', component: () => import('@/views/post/PostList.vue') },
  { path: '/filter', name: 'Filter', component: () => import('@/views/post/Filter.vue') },
  { path: '/select_region', name: 'SelectRegion', component: () => import('@/views/post/SelectRegion.vue') },
  { path: '/post_detail', name: 'PostDetail', component: () => import('@/views/post/PostDetail.vue') },
  { path: '/contract', name: 'Contract', component: () => import('@/views/post/Contract.vue') },
  { path: '/apply-result', name: 'ApplyResult', component: () => import('@/views/post/ApplyResult.vue') },

  // employer
  { path: '/task-list', name: 'TaskList', component: () => import('@/views/employer/TaskList.vue') },
  { path: '/task-detail', name: 'TaskDetail', component: () => import('@/views/employer/TaskDetail.vue') },
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
