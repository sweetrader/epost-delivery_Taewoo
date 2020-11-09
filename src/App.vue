<template>
  <div id="app">
    <link v-for="(preload, p) in preloadData" :key="p" rel="preload" :href="preload.url" :as="preload.as" :type="preload.type" crossorigin="anonymous">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preloadData: [
        {
          url: require('@/assets/font/NotoSans-Regular.ttf'),
          as: 'font',
          type: 'font/ttf'
        },
        {
          url: require('@/assets/font/Roboto-Regular.ttf'),
          as: 'font',
          type: 'font/ttf'
        }
      ]
    }
  },
  updated() {
    this.showLoading()
    this.httpTimestamp = (new Date()).getTime()
    setTimeout(() => {
      this.dismissLoading()
    }, 300 - ((new Date()).getTime() - this.httpTimestamp))
  }
}
</script>
