import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Charts from './views/Charts.vue'
import ServerError from './views/ServerError.vue'
import PageNotFound from './views/PageNotFound.vue'
import { store } from './store/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/charts',
      name: 'charts',
      component: Charts
    },
    {
      path: '/server-error',
      name: 'server-error',
      component: ServerError
    },
    {
      path: '/page-not-found',
      name: 'page-not-found',
      component: PageNotFound
    },
    { path: '*', 
      redirect: '/page-not-found' }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" || to.name === "server-error") {
    next();
  } else {
    const userName = window.localStorage.getItem('ts_userName');

    if (userName === null || userName === undefined || userName.length === 0) {
      next('/login');
    } else {
      store.commit('signIn', userName);
      next();
    }
  }
})

export default router;
