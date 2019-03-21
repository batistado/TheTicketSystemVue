import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userName: '',
        isAuthenticated: false,
    },
    mutations: {
        signIn(state, userName) {
          state.userName = userName;
          state.isAuthenticated = true;
          window.sessionStorage.setItem('ts_userName', userName);
        },

        signOut(state) {
            state.userName = '';
            state.isAuthenticated = false;
            window.sessionStorage.removeItem('ts_userName');
        }
    },
    getters: {
        userName: state => state.userName,
        isAuthenticated: state => state.isAuthenticated,
      }
});