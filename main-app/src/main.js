import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#main-app');

// step1 注册应用
const miroAppContainer = '#micro-app-container';

registerMicroApps([
  {
    name: 'app-a', // app name registered
    entry: '//localhost:3001',
    container: miroAppContainer,
    activeRule: '/app-a',
  },
  {
    name: 'app-b', // app name registered
    entry: '//localhost:3002',
    container: miroAppContainer,
    activeRule: '/app-b',
  },
]);

// step2
start();
