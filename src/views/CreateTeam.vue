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
              type="text"
              name="teamName"
              id="teamName"
              class="input-field"
              placeholder="Your team name"
              required
            />
          </div>
          <div>
            <label for="teamMate">
              <p>Choose team mate</p>
            </label>
            <input
              type="text"
              name="teamMate"
              id="teamMate"
              class="input-field"
              placeholder="Type teammate's username"
            />
          </div>
          <input type="submit" value="Create team" @click.prevent="createNewTeam" />
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "createTeam",
  data() {
    return {
      //
    };
  },

  methods: {
    openFileInputDialog() {
      document.getElementById("img-submit-input").click();
    },

    createNewTeam() {
      console.log("creating new team");
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