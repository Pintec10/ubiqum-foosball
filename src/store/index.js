import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '@/router'

const proxy = "https://enigmatic-cove-90612.herokuapp.com"
const encodeToURI = function (jsondata) {
  var body = [];
  for (var key in jsondata) {
    var encKey = encodeURIComponent(key);
    var encVal = encodeURIComponent(jsondata[key]);
    body.push(encKey + "=" + encVal);
  }
  return body.join("&");
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: null,
    authenticatedUser: null,
    tournamentList: null,
    teamList: null,
  },

  getters: {
    getAuthenticatedUser: state => { return state.authenticatedUser; },
    getNotification: state => { return state.notification; },
    getTournamentList: state => { return state.tournamentList; },
    getTeamList: state => { return state.teamList; },
  },

  mutations: {
    login: (state, payload) => {
      state.loggedUser = payload; //CHECK BASED ON ACTUAL JSON
    },
    logout: (state) => {
      state.authenticatedUser = null; //will check when endpoint ready
      router.push('/');
    },
    setNotification: (state, payload) => {
      payload === null
        ? state.notification = null :
        state.notification = { ...payload };
    },
    setAuthenticatedUser: (state, payload) => {
      state.authenticatedUser = { ...payload };
    },
    setTournamentList: (state, payload) => {
      state.tournamentList = payload;
    },
    setTeamList: (state, payload) => {
      state.teamList = payload;
    },
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
        .then(() => {
          router.push('/profile')
        })
        .catch(error => {
          context.commit("setNotification", { type: "error", message: error.response.data.message });
        });
    },

    logout: (context) => {
      // will add axios when endpoint ready
      localStorage.removeItem("ubiqumFoosballUserToken");
      context.commit("logout");
    },

    fetchAuthenticatedUser(context) {
      axios.get(proxy + "/auth/currentUser", {
        headers: { "Authorization": localStorage.getItem("ubiqumFoosballUserToken") }
      })
        .then(response => {
          context.commit("setAuthenticatedUser", response.data.user);
        })
        .catch(error => {
          let errorMessage = "";
          if (error.response.data.message) {
            errorMessage = error.response.data.message;
          } else {
            errorMessage = "Could not get current user"
          }
          alert(errorMessage);
        });
    },

    fetchTournamentList(context) {
      axios.get(proxy + "/tournaments")
        .then(response => {
          context.commit("setTournamentList", response.data.tournaments)
        })
        .catch(error => {
          let errorMessage = "";
          if (error.response.data.message) {
            errorMessage = error.response.data.message;
          } else {
            errorMessage = "Could not get the list of tournaments, please try later"
          }
          context.commit("setNotification", { type: "error", message: errorMessage });
        });
    },

    fetchTeamList(context) {
      axios.get(proxy + "/teams")
        .then(response => {
          context.commit("setTeamList", response.data.teams);
        })
        .catch(error => {
          let errorMessage = "";
          if (error.response.data.message) {
            errorMessage = error.response.data.message;
          } else {
            errorMessage = "Could not get the list of teams, please try later"
          }
          context.commit("setNotification", { type: "error", message: errorMessage });
        })
    },

    createTournament(context, payload) {
      axios.post(proxy + "/tournaments", encodeToURI(payload), {
        headers: { "Authorization": localStorage.getItem("ubiqumFoosballUserToken") }
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response.data.message);
        })
    },

    deleteTournament() {
      console.log("deleting tournament")
      //if (window.confirm(`Do you really want to delete the tournament ${payload.title}?`)) {
      //  axios.delete(proxy + "tournaments/delete/" + payload['_id'], {
      //    headers: { "Authorization": localStorage.getItem("ubiqumFoosballUserToken") }
      //  })
      //    .then(() => {
      //      context.dispatch("fetchTournamentList");
      //    })
      //    .catch(error => {
      //      alert(error.response.data.message);
      //    });
      //}
    }
  },

  modules: {
  }
})
