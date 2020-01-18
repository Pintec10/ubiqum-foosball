<template>
  <v-container fluid class="fill-height px-auto">
    <v-row class="d-flex align-center justify-center">
      <v-col class="col-12 col-sm-6 col-md-12 pa-6 d-flex align-center justify-center">
        <v-img src="@/assets/futbolin_logo_square.jpg" max-width="30vh"></v-img>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-12 pa-6 text-center">
        <v-row>
          <v-col class="col-1 col-md-4"></v-col>
          <v-col class="col-10 col-md-4">
            <v-form>
              <v-text-field v-model="username" label="Username" required></v-text-field>
              <v-text-field v-model="password" label="Password" required></v-text-field>
              <v-btn color="grey darken-1 ma-3">Login</v-btn>
              <v-btn color="grey darken-1 ma-3">Create account</v-btn>
            </v-form>
          </v-col>
          <v-col class="col-1 col-md-4"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

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
