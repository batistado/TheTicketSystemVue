import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import locale from 'element-ui/lib/locale/lang/en';
import './plugins/element.js';
import BootstrapVue from 'bootstrap-vue';
import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import { store } from './store/store';

Vue.use(VueChartkick, {adapter: Chart});
Vue.use(BootstrapVue);
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
