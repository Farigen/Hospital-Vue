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

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el:'#app',
  render: h=>h(App),
  router,
  template: '<App/>'
});
