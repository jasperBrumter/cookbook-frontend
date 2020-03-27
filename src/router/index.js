import Vue from 'vue';
import Router from 'vue-router';
import RecipesIndex from '@/pages/RecipesIndex';
import Signin from '@/pages/Signin';
import Signup from '@/pages/Signup';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RecipesIndex',
      component: RecipesIndex,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
  ],
});
