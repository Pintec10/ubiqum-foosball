<template>
  <div>
    <v-app-bar app color="grey darken-4" dark class="test">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img
        @click="$router.push('/')"
        contain
        max-height="100%"
        alt="Ubiqum foosball logo"
        src="@/assets/futbolin_logo_long.svg"
        class="mx-5 my-10"
      />

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
        <!-- replace icon with profile picture -->
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      color="grey darken-4"
      class="text-uppercase text-center py-5 px-3"
    >
      <v-list-item class="d-flex justify-center">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", link: "/" },
        { title: "Tournaments", link: "/tournaments" },
        { title: "Leaderboard", link: "/leaderboard" },
        { title: "Your Profile", link: "/profile" }
      ]
    };
  }
};
</script>

<style>
.test {
  border: 1px solid white !important;
}
</style>