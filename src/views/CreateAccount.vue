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

              <Notification />

              <v-btn
                outlined
                large
                class="ma-3"
                @click="validateForm"
                :loading="loading"
              >Create Account</v-btn>
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
import { mapGetters, mapMutations, mapActions } from "vuex";
import Notification from "@/components/Notification.vue";
import axios from "axios";
import router from "@/router";

const proxy = "https://enigmatic-cove-90612.herokuapp.com";

export default {
  name: "create-account",

  components: {
    Notification
  },

  data() {
    return {
      email: "",
      username: "",
      password: "",
      passwordValidation: "",
      loading: false
    };
  },

  methods: {
    ...mapMutations(["setNotification"]),
    ...mapActions(["fetchAuthenticatedUser"]),

    validateForm() {
      if (!this.username || !this.email || !this.password) {
        this.setNotification({
          type: "error",
          message: "Please fill in all required fields"
        });
      } else if (this.validateEmail !== true) {
        this.setNotification({ type: "error", message: this.validateEmail });
      } else if (this.validatePassword !== true) {
        this.setNotification({ type: "error", message: this.validatePassword });
      } else {
        this.setNotification(null);

        //if all checks ok, proceed to account creation
        let accountData = {
          username: this.username,
          email: this.email,
          password: this.password,
          passwordValidation: this.passwordValidation
        };
        this.createAccount(accountData);
      }
    },

    createAccount(payload) {
      this.loading = true;
      //encoding account data for URI
      function encodeBody(jsondata) {
        var body = [];
        for (var key in jsondata) {
          var encKey = encodeURIComponent(key);
          var encVal = encodeURIComponent(jsondata[key]);
          body.push(encKey + "=" + encVal);
        }
        return body.join("&");
      }

      //posting to backend
      axios
        .post(proxy + "/auth/signup", encodeBody(payload), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(response => {
          this.loading = false;
          this.setNotification({
            type: "success",
            message: "Account created!"
          });
          localStorage.setItem("ubiqumFoosballUserToken", response.data.token);
          this.fetchAuthenticatedUser();
        })
        .then(() => {
          setTimeout(function() {
            router.push("/tournaments");
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
    ...mapGetters(["getNotification"]),

    validateEmail() {
      return /.+@.+\..+/.test(this.email) ? true : "Email not valid";
    },

    validatePassword() {
      return this.password === this.passwordValidation
        ? true
        : "Passwords not matching";
    }
  }
};
</script>

<style>
</style>