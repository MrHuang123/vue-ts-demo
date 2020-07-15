import Vue from "vue";
import {Component } from 'vue-property-decorator';

import router from "./router";
import store from "./store";

import '@/style/APP.styl';
import '@/utils/config';
import App from "./App.vue";

Vue.config.productionTip = false;

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
