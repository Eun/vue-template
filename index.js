'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './Components/App/index.vue';
import Site1 from './Components/Site1/index.vue';
import Site2 from './Components/Site2/index.vue';

export const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/site1', component: Site1 },
    { path: '/site2', component: Site2 },
  ]
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)  
});