<template>
  <v-app-bar app color="grey darken-1" dark class="test">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-img alt="Ubiqum foosball logo" src="@/assets/futbolin_logo_long.jpg" />
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
      <!-- replace icon with profile picture -->
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  //
};
</script>

<style>
.test {
  border: 1px solid red !important;
}
</style>