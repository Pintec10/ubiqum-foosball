<template>
  <v-app>
    <HeaderNav />
    <v-content class="red darken-1">
      <!--  -->
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