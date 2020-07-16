import {Common} from '@/interface/common';
import {Store} from '@/interface/store';

const STATE:Common = {
  height: window.innerHeight,
  width: window.innerWidth,
}
const GETTERS:Common = {

}
const MUTATIONS:Common = {
  changeKey(state: Store.State, payload: Common) {
    for (const i in payload) {
      state[i] = null;
      state[i] = payload[i];
    }
  },
}
const ACTIONS:Common = {

}
export default {
  state: STATE,
  getters:GETTERS,
  mutations: MUTATIONS,
  actions: ACTIONS,
  modules: {}
};
