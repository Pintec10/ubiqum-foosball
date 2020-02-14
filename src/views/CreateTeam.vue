<template>
  <v-container>
    <h1>Create new team</h1>
    <form id="createTeamForm">
      <v-row>
        <v-col class="col-12 col-sm-6">
          <input id="img-submit-input" type="file" accept="image/*" capture="camera" />
          <!-- will check if capture works correctly on smartphone! -->
          <div
            class="img-submit-div d-flex flex-column justify-center align-center"
            @click="openFileInputDialog"
          >
            <v-icon size="20vmin">mdi-file-image</v-icon>
            <p>click here to upload</p>
          </div>
        </v-col>
        <v-col class="col-12 col-sm-6 d-flex flex-column">
          <div>
            <label for="teamName">
              <p>Choose team name</p>
            </label>
            <input
              v-model="newTeamData.teamName"
              type="text"
              name="teamName"
              id="teamName"
              class="input-field"
              placeholder="Your team name"
              required
            />
          </div>
          <div>
            <label for="teamAbbr">
              <p>Choose team name abbreviation (3 chars)</p>
            </label>
            <input
              v-model="newTeamData.teamAbbr"
              type="text"
              name="teamAbbr"
              id="teamAbbr"
              class="input-field"
              placeholder="Team name abbreviation"
              required
            />
          </div>
          <div>
            <label for="teamMate">
              <p>Team mate username</p>
            </label>
            <input
              v-model="newTeamData.teamMateUsername"
              type="text"
              name="teamMate"
              id="teamMate"
              class="input-field"
              placeholder="Type teammate's username"
            />
          </div>
          <input
            type="submit"
            value="Create team"
            @click.prevent="createNewTeam($route.params.itemID)"
          />
        </v-col>
      </v-row>
    </form>
    <Notification />
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import Notification from "@/components/Notification.vue";

const proxy = "https://enigmatic-cove-90612.herokuapp.com";

export default {
  name: "createTeam",
  components: { Notification },
  data() {
    return {
      newTeamData: {
        teamName: "",
        teamAbbr: "",
        teamMateUsername: ""
      }
    };
  },

  methods: {
    ...mapMutations(["setNotification"]),
    openFileInputDialog() {
      document.getElementById("img-submit-input").click();
    },

    createNewTeam(tournamentId) {
      function encodetoURI(jsondata) {
        var body = [];
        for (var key in jsondata) {
          var encKey = encodeURIComponent(key);
          var encVal = encodeURIComponent(jsondata[key]);
          body.push(encKey + "=" + encVal);
        }
        return body.join("&");
      }

      axios
        .put(
          proxy + "/tournaments/joinwithteam/" + tournamentId,
          encodetoURI(this.newTeamData),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: localStorage.getItem("ubiqumFoosballUserToken")
            }
          }
        )
        .then(response => {
          console.log(response);
          setTimeout(() => {
            this.$router.push(proxy + "/matches/" + tournamentId);
          }, 2000);
        })
        .catch(error => {
          console.log(error.response.data);
          this.setNotification({
            type: "error",
            message: error.response.data.message
          });
        });
    }
  }
};
</script>

<style>
.img-submit-div {
  border: 1px solid green;
  width: 50vmin;
  height: 50vmin;
}

#img-submit-input {
  visibility: hidden;
}

.input-field {
  border: 1px solid green;
}
</style>