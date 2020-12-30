import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入子组件对象
import Header from "./views/Header";
import Body from "./views/Body";
import Footer from "./views/Footer";

// 声明全局组件
/**
* 注册一个组件，第一个参数是名称，在template中使用，第二个参数是实际的参数，
 * 显示成什么内容，具备什么功能
* */
Vue.component('Header', Header);
Vue.component('Body', Body);
Vue.component('Footer', Footer);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
