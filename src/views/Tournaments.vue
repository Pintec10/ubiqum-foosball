<template>
  <v-container fluid class="px-5">
    <v-row>
      <v-col class="col-4">
        <v-select
          dense
          color="white"
          :items="filterOptions"
          v-model="selectedFilter"
          label="Filter Tournaments"
        ></v-select>
      </v-col>
      <v-col class="col-8">
        <v-text-field
          color="white"
          dense
          type="text"
          v-model="enteredSearch"
          label="Search by name"
          placeholder
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-space-between">
      <h1 class="headline">Tournaments</h1>
      <v-btn
        to="/create-tournament"
        color="white"
        class="red--text text--darken-1"
      >Create Tournament</v-btn>
    </v-row>

    <v-row v-for="(tournament, i) in tournamentList" :key="i">
      <TournamentTile :tournament="tournament" />
    </v-row>

    <v-row class="d-flex justify-center">
      <v-btn
        to="/create-tournament"
        color="white"
        class="red--text text--darken-1"
      >Create Tournament</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import TournamentTile from "@/components/TournamentTile.vue";

export default {
  name: "tournaments",

  components: {
    TournamentTile
  },

  data() {
    return {
      tournamentList: [
        {
          title: "Sugar Rush Tournament",
          image: "https://preview.ibb.co/bC5ELQ/alex_min.png",
          teamsJoined: 6,
          teamsMax: 10
        },
        {
          title: "Get me Coding Tournament",
          image: "https://preview.ibb.co/bC5ELQ/alex_min.png",
          teamsJoined: 8,
          teamsMax: 15
        },
        {
          title: "Get me Coding Tournament",
          image: "https://preview.ibb.co/bC5ELQ/alex_min.png",
          teamsJoined: 8,
          teamsMax: 15
        }
      ],
      selectedFilter: "All",
      enteredSearch: "",
      filterOptions: ["All", "Open", "Closed"]
    };
  }
};
</script>

<style>
</style>