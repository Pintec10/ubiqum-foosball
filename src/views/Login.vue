<template>
  <v-container>
    <v-row>
      <v-col class="col-12">
        <p class="title mb-0">Login</p>
        <hr />
        <p>Enter to your existing account.</p>
      </v-col>

      <v-col class="col-12 pa-6 text-center">
        <v-row>
          <v-col class="col-1 col-md-4"></v-col>
          <v-col class="col-10 col-md-4">
            <v-form>
              <v-text-field
                class="mb-7"
                color="white"
                type="text"
                v-model="credentials.username"
                label="Username"
                placeholder="Your Username"
                regular
                required
              ></v-text-field>

              <v-text-field
                class="mb-7"
                color="white"
                type="password"
                v-model="credentials.password"
                label="Password"
                placeholder="Your Password"
                required
              ></v-text-field>
              <!-- <p v-if="getNotification">
                <v-icon v-if="getNotification.type === 'error'">mdi-alert</v-icon>
                {{getNotification.message}}
              </p>-->
              <Notification />

              <v-btn outlined large class="ma-3" @click="login(credentials)">Login</v-btn>

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
import { mapActions, mapMutations, mapGetters } from "vuex";
import Notification from "@/components/Notification.vue";

export default {
  name: "login",
  components: {
    Notification
  },
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["setNotification"])
  },

  computed: {
    ...mapGetters(["getNotification"])
  }
};
</script>

<style>
</style>
