import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

const proxy = "https://enigmatic-cove-90612.herokuapp.com"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorMessage: "",
    authenticatedUser: null,
  },

  getters: {
    getAuthenticatedUser: state => { return state.authenticatedUser; },
    getErrorMessage: state => { return state.errorMessage; },
  },

  mutations: {
    login: (state, payload) => {
      state.loggedUser = payload; //CHECK BASED ON ACTUAL JSON
    },
    setErrorMessage: (state, payload) => {
      state.errorMessage = payload; //CHECK BASED ON ACTUAL JSON
    },
    setAuthenticatedUser: (state, payload) => {
      state.authenticatedUser = { ...payload };
    }
  },

  actions: {
    login: (context, payload) => {
      //build JSON for posting to backend
      var credentials = {
        username: payload.username,
        password: payload.password
      }

      //encode credentials for URI
      function encodeBody(jsondata) {
        var body = [];
        for (var key in jsondata) {
          var encKey = encodeURIComponent(key);
          var encVal = encodeURIComponent(jsondata[key]);
          body.push(encKey + "=" + encVal);
        }
        return body.join("&");
      }

      //posting to backend 
      axios.post(proxy + "/auth/login",
        encodeBody(credentials),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //"Authorization": "token"
          }
        })
        .then(response => {
          context.commit("setErrorMessage", "");
          localStorage.setItem("ubiqumFoosballUserToken", response.data.token);
          context.dispatch("fetchAuthenticatedUser");
        })
        .catch(error => {
          context.commit("setErrorMessage", error.response.data.message);
        });
    },

    fetchAuthenticatedUser(context) {
      let token = localStorage.getItem("ubiqumFoosballUserToken");
      axios.get(proxy + "/auth/currentUser", {
        headers: { "Authorization": token }
      })
        .then(response => {
          context.commit("setAuthenticatedUser", response.data.user);
        })
        .catch(error => {
          context.commit("setErrorMessage", error.response.data.message);
        });
    }
  },

  modules: {
  }
})
