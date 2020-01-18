import Vue from 'vue'
import Vuex from 'vuex'

const proxy = "https://infinite-shore-25867.herokuapp.com"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: null
  },
  getters: {
    loggedUser: state => { return state.loggedUser; },
  },
  mutations: {
    login: (state, payload) => {
      state.loggedUser = payload; //CHECK BASED ON ACTUAL JSON
    }
  },
  actions: {
    login: (context, payload) => {
      //build JSON for posting to backend
      var credentials = {
        username: payload.username,
        password: payload.password
      }

      //posting to backend ---CHECK WITH LLUIS TO PROVIDE TOKEN! AND ADAPT TO ACTUAL JSON ---
      fetch(proxy + "/auth/login", {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        body: credentials
      })
        .then(resp => {
          return resp.json();
        })
        .then(json => {
          context.commit("login", json)
        })
        .catch(error => {
          alert(error);
        })


    }
  },
  modules: {
  }
})
