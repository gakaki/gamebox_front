import Vue from 'vue'
import store from '@/store'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
})
app.$mount()


export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/home/list'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#d22222',
      backgroundColorTop: '#d22222',
      navigationBarBackgroundColor: '#d22222',
      navigationBarTitleText: '莆田游戏中心',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#A3A3A3',
      selectedColor: '#191919',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/home/list',
          text: '游戏',
          iconPath:  'static/assets/home_disable.png',
          selectedIconPath: 'static/assets/home.png'
        },
        {
          pagePath: 'pages/my/my',
          text: '我的',
          iconPath: 'static/assets/my_disable.png',
          selectedIconPath: 'static/assets/my.png'
        },

        {
          pagePath: 'pages/home/list',
          text: '首页',
          iconPath: 'static/assets/news.png',
          selectedIconPath: 'static/assets/news-active.png'
        },
        {
          pagePath: 'pages/news/list',
          text: '资讯',
          iconPath: 'static/assets/news.png',
          selectedIconPath: 'static/assets/news-active.png'
        },
        {
          pagePath: 'pages/quanzi/list',
          text: '圈子',
          iconPath: 'static/assets/quanzi.png',
          selectedIconPath: 'static/assets/quanzi-active.png'
        }

      ]
    }
  }
}
