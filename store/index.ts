import Vue from "vue";
import Vuex from "vuex";
import * as list from './modules/list.ts';

Vue.use(Vuex);

const store = new Vuex.Store({
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