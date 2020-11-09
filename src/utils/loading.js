import { Loading } from 'element-ui'

let loading = null

Loading.install = function(Vue) {
  Vue.prototype.showLoading = function() {
    loading = Loading.service({ fullscreen: true })
  }

  Vue.prototype.dismissLoading = function() {
    if (loading !== null) {
      loading.close()
      loading = null
    }
  }
}

export default Loading
