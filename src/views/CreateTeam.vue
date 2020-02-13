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
              v-model="newTeamData.name"
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
              <p>Choose team name abbreviation</p>
            </label>
            <input
              v-model="newTeamData.abbr"
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
              <p>Choose team mate</p>
            </label>
            <input
              v-model="teamMate"
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
        name: "",
        abbr: ""
      },

      teamMate: ""
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

      console.log("newTeamData:");
      console.log(this.newTeamData);
      console.log("encoded: " + encodetoURI(this.newTeamData));

      axios
        .post(
          proxy + "/teams/create/" + tournamentId,
          encodetoURI(this.newTeamData),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: localStorage.getItem("ubiqumFoosballUserToken")
            }
          }
        )
        .then(() => {
          if (this.teamMate) {
            this.addTeamMate();
          } else {
            this.setNotification({
              type: "success",
              message: "Team successfully created!"
            });
            setTimeout(() => {
              this.$router.push(
                proxy + "/matches/" + this.$route.params.itemID
              );
            }, 2000);
          }
        })
        .catch(error => {
          this.setNotification({
            type: "error",
            message: error.response.data.messag
          });
        });
    },

    addTeamMate() {
      console.log("adding team mate...");
      setTimeout(() => {
        this.$router.push(proxy + "/tournaments/" + this.$router.params.itemID);
      }, 2000);
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