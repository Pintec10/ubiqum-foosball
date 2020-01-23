<template>
  <v-container fluid class="px-auto">
    <v-row>
      <v-col class="col-12">
        <p class="mb-0">Login</p>
      </v-col>

      <v-col class="col-12 pa-6 text-center">
        <v-row>
          <v-col class="col-1 col-md-4"></v-col>
          <v-col class="col-10 col-md-4">
            <v-form>
              <p class="text-left text-uppercase mb-1">Username</p>
              <v-text-field
                background-color="grey lighten-3"
                light
                dense
                type="text"
                v-model="username"
                label="username"
                placeholder="Your Team Name"
                solo
                filled
                required
              ></v-text-field>
              <p class="text-left text-uppercase mb-1">Password</p>
              <v-text-field
                background-color="grey lighten-3"
                light
                dense
                type="password"
                v-model="password"
                label="Password"
                placeholder="Your Password"
                solo
                filled
                required
              ></v-text-field>
              <v-btn outlined class="ma-3">Login</v-btn>

              <p class="mt-3">
                <router-link to="/create-account" class="white--text">Create new account</router-link>
              </p>
            </v-form>
          </v-col>
          <v-col class="col-1 col-md-4"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
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
