import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '@/router'

const proxy = "https://enigmatic-cove-90612.herokuapp.com"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: null,
    authenticatedUser: null,
  },

  getters: {
    getAuthenticatedUser: state => { return state.authenticatedUser; },
    getNotification: state => { return state.notification; },
  },

  mutations: {
    login: (state, payload) => {
      state.loggedUser = payload; //CHECK BASED ON ACTUAL JSON
    },
    setNotification: (state, payload) => {
      payload === null
        ? state.notification = null :
        state.notification = { ...payload };
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
          }
        })
        .then(response => {
          context.commit("setNotification", null);
          localStorage.setItem("ubiqumFoosballUserToken", response.data.token);
          context.dispatch("fetchAuthenticatedUser");
        })
        .catch(error => {
          context.commit("setNotification", { type: "error", message: error.response.data.message });
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
          context.commit("setNotification", { type: "error", message: error.response.data.message });
        });
    },

    createAccount(context, payload) {
      //encoding account data for URI
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
      axios.post(proxy + "/auth/signup",
        encodeBody(payload),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      )
        .then(response => {
          context.commit("setNotification", { type: "success", message: "Account created!" });
          localStorage.setItem("ubiqumFoosballUserToken", response.data.token);
          context.dispatch("fetchAuthenticatedUser");
        })
        .then(() => {
          setTimeout(function () { router.push("/tournaments") }, 2500);
        })
        .catch(error => {
          context.commit("setNotification", { type: "error", message: error.response.data.message });
        })
    },

    encodeURI(jsondata) {
      console.log("encoding....");
      var output = [];
      for (var key in jsondata) {
        var encKey = encodeURIComponent(key);
        var encVal = encodeURIComponent(jsondata[key]);
        output.push(encKey + "=" + encVal);
      }
      return output.join("&");
    }
  },

  modules: {
  }
})
