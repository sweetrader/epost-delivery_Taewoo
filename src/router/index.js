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
  // transit
  { path: '/transit/register', name: 'RegisterTransit', component: () => import('@/views/transit/RegisterTransit.vue') },
  { path: '/transit/result', name: 'TransitResult', component: () => import('@/views/transit/TransitResult.vue') },
  { path: '/transit/filter', name: 'TransitFilter', component: () => import('@/views/transit/TransitFilter.vue') },
  { path: '/transit/list', name: 'TransitList', component: () => import('@/views/transit/TransitList.vue') },
  // transit end.
  // employer
  // - manage-applier
  { path: '/task-list', name: 'TaskList', component: () => import('@/views/employer/manage_applier/TaskList.vue') },
  { path: '/task-detail', name: 'TaskDetail', component: () => import('@/views/employer/manage_applier/TaskDetail.vue') },
  { path: '/sand-notice', name: 'SandNotice', component: () => import('@/views/employer/manage_applier/SandNotice.vue') },
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
