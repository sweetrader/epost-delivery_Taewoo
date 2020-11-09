import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import { contextRemoveIntroView } from '@/hybrid'
import { requestUserInfo } from '@/http/api/service'
import VueCookies from 'vue-cookies'
import i18n from '@/i18n'

var biOSDevice = navigator.userAgent.match(/iPhone|iPad|iPod/i)

var index = {
  initContext: function() {
    // router.push({ name: 'Main' })
    contextRemoveIntroView()
  },
  callbackBackPress: function() {
    router.push('/')
  },
  callbackLocationPermission: function(permissionInfo) {
    if (typeof permissionInfo !== 'object') {
      permissionInfo = JSON.parse(permissionInfo)
    }
    if (permissionInfo !== '' && permissionInfo !== null) {
      store.dispatch('setLocation', permissionInfo.value)
      store.dispatch('setLocationTime', permissionInfo.time)
      store.dispatch('setLatitude', permissionInfo.latitude)
      store.dispatch('setLongitude', permissionInfo.longitude)
    }
  },
  callbackIntroView: function(loginInfo) {
    if (typeof loginInfo !== 'object') {
      loginInfo = JSON.parse(loginInfo)
    }
    if (loginInfo !== '' && loginInfo !== null) {
      if (loginInfo.accessToken !== '' && loginInfo.accessToken !== null && loginInfo.accessToken !== undefined) {
        VueCookies.set('access_token', loginInfo.accessToken)
        VueCookies.set('refresh_token', loginInfo.refreshToken)

        // 자동 로그인의 경우 고객 정보 조회
        Vue.prototype.showLoading()
        requestUserInfo().then(response => {
          // Vue.prototype.dismissLoading()

          VueCookies.set('user_email', response.email)
          VueCookies.set('user_name', response.name)
          store.dispatch('setAccountImg', response.accountImg)

          router.push({ name: 'Main' })
        }).catch((error) => {
          Vue.prototype.dismissLoading()

          Vue.prototype.Alert({
            content: i18n.t('common.login'),
            success: () => {
              Vue.prototype.showLoading()
              router.replace({ name: 'Login' })
            }
          })
        })
      } else {
        Vue.prototype.showLoading()
        router.push({ name: 'Main' })
      }
    }
  },
  callbackLogout: function() {
    Vue.prototype.dismissLoading()
    store.dispatch('setToken', '')
    store.dispatch('setRefreshToken', '')
    store.dispatch('setUserId', '')
    store.dispatch('setUserName', '')
    store.dispatch('setUserNum', '')

    router.push({ name: 'Login' })
  },
  callbackDismissPage: function() {
    // console.log('callbackDismissPage 불렸음')
    // console.log(Vue.prototype)
    // Vue.prototype.dismissLoading()
    // router.go(-1)
    // if (router.history.current.path.indexOf('signup') >= 0 || router.history.current.path.indexOf('sns') >= 0) {
    //   if (document.getElementsByClassName('terms_body').length === 0) {
    //     window.history.go(-1)
    //   } else {
    //     Vue.prototype.$dismissTerms()
    //   }
    // }
  },
  callbackPushData: function(type, id) {
    if (type === 'MAIN') {
      router.push({ name: 'Main' })
    } else if (type === 'EVT') {
      if (id !== '' && id !== null && id !== undefined) {
        router.push({ name: 'EventDetail', params: { evtSeqNo: id }})
      } else {
        router.push({ name: 'Event' })
      }
    } else if (type === 'ROOM') {
      if (id !== '' && id !== null && id !== undefined) {
        store.dispatch('setMerchantId', id)
        router.push({ path: '/hotels' })
      } else {
        store.dispatch('setShopIndex', 1)
        router.push({ name: 'Shop' })
      }
    } else if (type === 'MOBILITY') {
      if (id !== '' && id !== null && id !== undefined) {
        store.dispatch('setVoucherCd', id)
        router.push({ path: '/mobilities' })
      } else {
        store.dispatch('setShopIndex', 2)
        router.push({ name: 'Shop' })
      }
    } else if (type === 'COUPON') {
      if (id !== '' && id !== null && id !== undefined) {
        store.dispatch('setCouponCd', id)
        router.push({ path: '/coupons' })
      } else {
        store.dispatch('setShopIndex', 3)
        router.push({ name: 'Shop' })
      }
    }
  },
  callbackInitDeviceToken: function(deviceToken) {
    store.dispatch('setDeviceToken', deviceToken)
  },
  callbackShowKeyboard: function() {
    if (router.history.current.path.indexOf('findidpw') >= 0 && !biOSDevice) {
      document.getElementsByClassName('box__contents')[0].style.paddingBottom = '1.36rem'
    }
  },
  callbackHideKeyboard: function() {
    if (router.history.current.path.indexOf('findidpw') >= 0 && !biOSDevice) {
      document.getElementsByClassName('box__contents')[0].style.paddingBottom = '0'
    }
  }
}

window.bridge = index
