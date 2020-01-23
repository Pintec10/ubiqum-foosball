<template>
  <v-app>
    <HeaderNav v-if="$route.path !== '/'" />
    <v-content class="red darken-1">
      <router-view dark />
    </v-content>
  </v-app>
</template>

<script>
import HeaderNav from "./components/HeaderNav";

export default {
  name: "App",

  components: {
    HeaderNav
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
</style>