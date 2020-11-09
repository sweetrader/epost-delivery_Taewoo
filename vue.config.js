const ansiRegex = require('ansi-regex')

'use strict'
const port = 9529

module.exports = {
  publicPath: '',
  outputDir: process.env.ENV === 'staging' ? 'dist_stag' : 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    // 포트
    port: port,
    // 개발 환경 실행시 페이지 자동 열기
    open: false,
    // 개발 환경 Lint 경고 메세지 브라우저 출력
    clientLogLevel: 'warning',
    // injectClient, injectHot 설정하지 않으면 로그 두 번 출력
    injectClient: false,
    injectHot: false,
    overlay: {
      // 경고의 경우 에러 출력 안함
      warnings: false,
      // 에러 메세지 출력
      errors: true
    }
  },
  configureWebpack: {
    // webpackConfig.name
    name: '우공플_delivery',
    // 성능 힌트 OFF(폰트를 넣으면 용량이 늘어나고, 용량 경고가 출력된다!)
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },
  // babel / polyfill 설정 IE 지원
  transpileDependencies: [ansiRegex]
}
