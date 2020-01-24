<template>
  <v-container fluid class="fill-height px-auto background">
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
    //
  },
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.background {
  background: linear-gradient(
    -35deg,
    #f7b99c,
    #f51146,
    #db2b29,
    #f84913,
    #db2b29,
    #f0bab9
  );
  background-size: 500% 500%;
  animation: gradientFade 8s ease infinite;
}
@keyframes gradientFade {
  0% {
    background-position: 47% 0%;
  }
  50% {
    background-position: 52% 100%;
  }
  100% {
    background-position: 47% 0%;
  }
}
</style>