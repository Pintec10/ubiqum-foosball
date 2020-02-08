<template>
  <div>
    <p v-if="getNotification">
      <v-icon v-if="getNotification.type === 'error'">mdi-alert</v-icon>
      <v-icon v-if="getNotification.type === 'success'">mdi-thumb-up</v-icon>
      <v-icon v-if="getNotification.type === 'info'">mdi-information</v-icon>
      {{ getNotification.message}}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNotification"])
  },

  methods: {
    ...mapMutations(["setNotification"])
  },

  created() {
    this.setNotification(null);
  }
};
</script>

<style>
</style>