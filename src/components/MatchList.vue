<template>
  <div>
    <h2>{{tournamentData.title}}</h2>
    <h3>Next/past matches</h3>
    <!-- there will be a condition to change the title in h2 -->
    <v-row>
      <v-col v-for="(oneMatch, i) in tournamentData.matches" :key="i" class="col-12 col-sm-6">
        <MatchTile :matchData="oneMatch" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MatchTile from "@/components/MatchTile.vue";
export default {
  name: "matchList",
  props: {
    tournamentData: {
      type: Object
    }
  },
  components: {
    MatchTile
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
</style>