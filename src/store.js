import Vue from "vue";
import Vuex from "vuex";
import api from "./api";

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state() {
      return {
        user: "",
      };
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
    },
    actions: {
      async getUser({ dispatch, commit }) {
        const user = await api.getUser();
        commit("setUser", user);
      },
    },
  });
};
