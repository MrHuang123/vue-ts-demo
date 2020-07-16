import Vue from "vue";
import {Component } from 'vue-property-decorator';

import router from "./router";
import store from "./store";
import Vuex from "vuex";

import '@/style/APP.styl';
import '@/utils/config';
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);


Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);
new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount("#app");
