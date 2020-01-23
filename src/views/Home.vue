<template>
  <v-container fluid class="fill-height px-auto">
    <v-row class="d-flex align-center justify-center">
      <v-col class="col-12 pa-6 d-flex align-center justify-center">
        <v-img src="@/assets/futbolin_logo_square.svg" max-width="30vh"></v-img>
      </v-col>

      <v-col class="col-12 pa-6 d-flex align-center justify-center">
        <v-btn to="/login" outlined class="ma-3">Login</v-btn>
      </v-col>

      <v-col class="col-12 pa-6 d-flex align-center justify-center">
        <v-btn to="/create-account" outlined class="ma-3">Create Account</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  components: {
    // test
  },
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>
