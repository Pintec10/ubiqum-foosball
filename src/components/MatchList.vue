<template>
  <div>
    <v-row>
      <v-col v-for="(oneMatch, i) in tournamentData.matches" :key="i" class="col-12 col-sm-6">
        <h3 v-if="$route.params.itemID === 'global'">Tournament: {{tournamentData.title}}</h3>
        <!-- will change v-if condition based on Lluis' JSON -->
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
      type: Array
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