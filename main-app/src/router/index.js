import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import { loadMicroApp } from 'qiankun';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // {
  //   path: '/app-a',
  //   name: 'AppA',
  //   meta: {
  //     microAppName: 'app-a',
  //     microAppEntry: '//localhost:3001',
  //   },
  // },
  // {
  //   path: '/app-b',
  //   name: 'AppB',
  //   meta: {
  //     microAppName: 'app-b', // app name registered
  //     microAppEntry: '//localhost:3002',
  //   },
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 依靠路由手动加载子应用
// let currentMicroApp = null;

// router.beforeEach((to, from, next) => {
//   if (to.meta?.microAppName && to.meta.microAppEntry) {
//     currentMicroApp = loadMicroApp({
//       name: to.meta.microAppName, // app name registered
//       entry: to.meta.microAppEntry,
//       container: '#micro-app-container',
//       sandbox: {
//         strictStyleIsolation: true,
//       },
//     });

//     console.log(currentMicroApp);
//   }

//   next();
// });

export default router;
