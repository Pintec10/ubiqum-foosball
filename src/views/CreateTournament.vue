<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col class="col-12">
        <p class="mb-0">Create Tournament</p>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-12 pa-3 text-center">
        <v-row>
          <v-col class="col-1 col-md-4"></v-col>
          <v-col class="col-10 col-md-4">
            <v-form>
              <v-text-field
                color="white"
                dense
                type="text"
                v-model="enteredData.title"
                label="tournamentTitle"
                placeholder="Tournament Title"
                required
              ></v-text-field>

              <v-text-field
                color="white"
                dense
                type="text"
                v-model="enteredData.passcode"
                label="passcode"
                placeholder="Choose a Passcode"
                required
              ></v-text-field>

              <v-file-input
                accept="image/*"
                color="white"
                prepend-icon
                append-icon="mdi-file-image"
                dense
                label="Tournament Picture"
                placeholder="Choose image"
              ></v-file-input>

              <v-select
                color="white"
                dense
                type="number"
                :items="minMaxArray"
                v-model="enteredData.maxTeamNumber"
                label="Maximum nr. of Teams"
                required
              ></v-select>
              <v-btn
                outlined
                class="ma-3"
                @click="createTournament(enteredData)"
                :disabled="!getAuthenticatedUser"
                :loading="loading"
              >create tournament</v-btn>
            </v-form>
            <Notification />
          </v-col>
          <v-col class="col-1 col-md-4"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import Notification from "@/components/Notification.vue";
const proxy = "https://enigmatic-cove-90612.herokuapp.com";

export default {
  name: "createTournament",
  components: { Notification },

  data() {
    return {
      enteredData: {
        title: "",
        passcode: "",
        maxTeamNumber: 3
      },
      loading: false
    };
  },

  methods: {
    //...mapActions(["createTournament"]),
    ...mapMutations(["setNotification"]),

    createTournament(payload) {
      this.loading = true;
      let encodeToURI = function(jsondata) {
        var body = [];
        for (var key in jsondata) {
          var encKey = encodeURIComponent(key);
          var encVal = encodeURIComponent(jsondata[key]);
          body.push(encKey + "=" + encVal);
        }
        return body.join("&");
      };

      axios
        .post(proxy + "/tournaments", encodeToURI(payload), {
          headers: {
            Authorization: localStorage.getItem("ubiqumFoosballUserToken")
          }
        })
        .then(() => {
          this.loading = false;
          this.setNotification({
            type: "success",
            message: "Tournament created!"
          });
        })
        .then(() => {
          setTimeout(() => {
            this.setNotification(null);
            this.$router.push("/tournaments");
          }, 2500);
        })
        .catch(error => {
          this.loading = false;
          this.setNotification({
            type: "error",
            message: error.response.data.message
          });
        });
    }
  },

  computed: {
    ...mapGetters(["getAuthenticatedUser"]),

    minMaxArray() {
      let array = [];
      for (let i = 3; i <= 50; i++) {
        array.push(i);
      }
      return array;
    }
  }
};
</script>

<style>
</style>