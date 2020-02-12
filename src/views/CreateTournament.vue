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
                v-model="maxTeamNumber"
                label="Maximum nr. of Teams"
                required
              ></v-select>
              <v-btn
                outlined
                class="ma-3"
                @click="createTournament(enteredData)"
                :disabled="!getAuthenticatedUser"
              >create tournament</v-btn>
            </v-form>
          </v-col>
          <v-col class="col-1 col-md-4"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "createTournament",
  data() {
    return {
      enteredData: {
        title: "",
        passcode: ""
      },

      tournamentTitle: "",
      passcode: "",
      maxTeamNumber: 3
    };
  },

  methods: {
    ...mapActions(["createTournament"])
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