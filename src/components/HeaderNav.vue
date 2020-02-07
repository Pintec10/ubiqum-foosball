<template>
  <div>
    <!-- grey darken-3 -->
    <v-app-bar app id="slide-menu" dark class="test">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img
        @click="$router.push('/')"
        contain
        max-height="100%"
        alt="Ubiqum foosball logo"
        src="@/assets/futbolin_logo_long.svg"
        class="mx-5 my-10"
      />

      <v-avatar>
        <img v-if="getAuthenticatedUser" :src="getAuthenticatedUser.avatar" alt="Profile picture" />
        <v-icon v-else>mdi-account</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer
      id="slide-menu"
      v-model="drawer"
      color="#272727"
      absolute
      height="100vh"
      temporary
      class="text-uppercase text-center py-5 px-3"
    >
      <v-list-item class="d-flex justify-center">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider />

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <v-list-item-content>
            <v-list-item-title id="menu-text">{{ item.title }}</v-list-item-title>
            <v-divider />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn outlined class="align-self-end">logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", link: "/" },
        { title: "Tournaments", link: "/tournaments" },
        { title: "Matches", link: "/matches/global" },
        { title: "Leaderboard", link: "/leaderboard/global" },
        { title: "My Profile", link: "/profile" },
        { title: "My Teams", link: "/my-teams" },
        { title: "*DEMO tourn. matches", link: "/matches/1" }, //change :itemID
        { title: "*DEMO tourn. leaderboard", link: "/leaderboard/1" }, //change :itemID
        { title: "*DEMO create team", link: "/tournaments/1/create-team" } //change :itemID
      ]
    };
  },

  computed: {
    ...mapGetters(["getAuthenticatedUser"])
  }
};
</script>

<style>
.v-list .v-list-item--active .v-list-item__title {
  color: red !important;
}

.v-list .v-list-item--active {
  color: #ffffff00 !important;
}

#slide-menu .theme--dark.v-list {
  background-color: #272727;
}

#menu-text {
  background-color: #272727;
  color: white;
  font-size: 20px;
  line-height: 60px;
}

.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  position: fixed;
}

#slide-menu .theme--dark.v-navigation-drawer {
  background-color: #272727;
}
</style>