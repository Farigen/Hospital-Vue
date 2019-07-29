// 引入Vue
import Vue from 'vue'
import App from './App'
// 引入组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from './router'
import './icons' // icon

/*require('./mock/index')*/
/*import './mock/index'*/
import axios from 'axios'

import store from './store'

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
    if (localStorage.getItem('Authorization')) {
      config.headers.token = localStorage.getItem('Authorization');
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  });

new Vue({
  el:'#app',
  render: h=>h(App),
  router,
  store: store,
  template: '<App/>'
});
