// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'assets/js/hack'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick'
//import SunToast from 'base/SunToast'
import VueLazyload from 'vue-lazyload'

import '@/assets/css/index.scss'

//网络请求
Vue.prototype.$http = axios

//优化移动端300ms点击延迟
FastClick.attach(document.body)

//弹出层
//Vue.use(SunToast)

//懒加载
Vue.use(VueLazyload, {
    preLoad : 1,
    loading : require('assets/img/default.png')
})

const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.silent = isDebug_mode;
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.productionTip = isDebug_mode;

//版权信息
const pkg = require('../package.json');
window.SunPlayer = window.SunPlayer = `欢迎使用 SunPlayer!
当前版本为：V${pkg.version}
作者：Sun
歌曲来源于网易云音乐(http://music.163.com)`;
console.info(`%c${SunPlayer}`, `color : blue`);

/* eslint-disable no-new */
new Vue({
  el: '#SunPlayer',
  store,
  router,
  components: { App },
  template: '<App/>'
})