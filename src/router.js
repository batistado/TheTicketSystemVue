import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Charts from './views/Charts.vue'
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" || !!store.getters.isAuthenticated){
    next();
  } else {
    next('/login');
  }
})

export default router;
