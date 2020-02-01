<template>
  <div>
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