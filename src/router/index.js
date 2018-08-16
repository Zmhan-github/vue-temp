import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import ProfilePage from '../profile/ProfilePage.vue';
import ServicePage from '../service/ServicePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  }, {
    path: '/service',
    name: 'Service',
    component: ServicePage,
  }],
});
