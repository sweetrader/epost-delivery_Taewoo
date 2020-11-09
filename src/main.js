import '@babel/polyfill' // IE 지원
import Vue from 'vue' // 뷰
import '@/styles/index.scss' // 전역 SCSS
import App from './App.vue' // 기본 틀
import router from './router' // 라우터
import store from './store' // Vuex 스토어
import Alert from './components/Alert/index' // 알림팝업 컴포넌트
import VueCookies from 'vue-cookies' // 쿠키 필요시 사용 npm i vue-cookies
import { addComma } from '@/utils/formatter'
import Loading from './utils/loading' // 로딩아이콘
import 'element-ui/lib/theme-chalk/index.css' // 로딩아이콘에 사용됨

Vue.config.productionTip = false
Vue.use(Loading)
Vue.use(Alert)
Vue.use(VueCookies)
Vue.prototype.addComma = addComma
Vue.config.devtools = true

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
