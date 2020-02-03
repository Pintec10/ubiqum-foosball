<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col class="col-12">
        <p class="mb-0">Create Account</p>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-12 pa-3 text-center">
        <v-row>
          <v-col class="col-1 col-md-4"></v-col>
          <v-col class="col-10 col-md-4">
            <v-form>
              <p class="text-left text-uppercase mb-1">Email</p>
              <v-text-field
                background-color="grey lighten-3"
                light
                dense
                type="text"
                v-model="email"
                label="email"
                placeholder="Your Team Name"
                solo
                filled
                required
              ></v-text-field>
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
              <p class="text-left text-uppercase mb-1">Repeat Password</p>
              <v-text-field
                background-color="grey lighten-3"
                light
                dense
                type="password"
                v-model="passwordValidation"
                label="PasswordValidation"
                placeholder="Repeat Your Password"
                solo
                filled
                required
              ></v-text-field>
              <v-btn outlined class="ma-3">create account</v-btn>
              <p class="mt-3">
                <router-link to="/login" class="white--text">or login to your existing account</router-link>
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
  name: "create-account",

  data() {
    return {
      email: "",
      username: "",
      password: "",
      passwordValidation: ""
    };
  }
};
</script>

<style>
</style>