<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col class="col-12 mb-0">
        <p class="title mb-0">Create account</p>
        <hr />
        <p>Create a new account for Ubiqum Foosball.</p>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-12 pa-3 text-center">
        <v-row>
          <v-col class="col-1 col-md-4"></v-col>
          <v-col class="col-10 col-md-4">
            <v-form>
              <v-text-field
                class="mb-5 mt-0"
                color="white"
                type="text"
                v-model="email"
                label="email"
                placeholder="Your email"
              ></v-text-field>
              <v-text-field
                class="mb-5"
                color="white"
                type="text"
                v-model="username"
                label="username"
                placeholder="Your username"
                required
              ></v-text-field>
              <v-file-input
                class="mb-5"
                prepend-icon
                append-icon="mdi-file-image"
                color="white"
                dense
                label="Profile picture"
                placeholder="Upload profile picture"
              ></v-file-input>

              <v-text-field
                class="mb-5"
                color="white"
                type="password"
                v-model="password"
                label="Password"
                placeholder="Your Password"
                required
              ></v-text-field>
              <v-text-field
                class="mb-5"
                color="white"
                type="password"
                v-model="passwordValidation"
                label="PasswordValidation"
                placeholder="Repeat Your Password"
                required
              ></v-text-field>
              <v-btn outlined large class="ma-3">Create A</v-btn>
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