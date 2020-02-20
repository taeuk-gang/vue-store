import Vue from "vue";
import Vuex from "vuex";
import * as list from "./modules/list";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

store.commit(`increment`)

console.log(store.state.count)