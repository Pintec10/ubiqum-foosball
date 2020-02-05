<template>
  <v-container>
    <v-row class="d-flex justify-space-between">
      <v-col class="col-12 titlecolumn">
        <p class="title mb-0">Tournaments</p>
        <hr />
        <p>Find, create or join a tournament.</p>
      </v-col>
    </v-row>

    <v-row class="search-filter">
      <v-col class="col-5">
        <v-select
          class="filter-btn"
          dense
          color="white"
          :items="filterOptions"
          v-model="selectedFilter"
          label="Filter Tournaments"
        ></v-select>
      </v-col>
      <v-col class="col-7">
        <v-text-field
          id="search-field"
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

    <v-row>
      <v-col class="col-12">
        <v-btn
          to="/create-tournament"
          color="white"
          class="red--text text--darken-1"
        >Create Tournament</v-btn>
      </v-col>
    </v-row>

    <v-col class="col-12">
      <v-row v-for="(tournament, i) in tournamentList" :key="i">
        <TournamentTile :tournament="tournament" />
      </v-row>
    </v-col>
    <v-row>
      <v-col class="col-12">
        <v-btn
          to="/create-tournament"
          color="white"
          class="red--text text--darken-1"
        >Create Tournament</v-btn>
      </v-col>
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
          title: "Girls do it better",
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
#search-field {
  padding-top: 18px;
}

#list-31.theme--dark.v-list {
  background: #ffffff;
}

#filter-btn.v-list-item--dense .v-list-item__title,
.v-list-item--dense .v-list-item__subtitle,
.v-list--dense .v-list-item .v-list-item__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1rem;
  color: darkslategray;
}
.theme--dark.v-list {
  background: #ffffff;
}
.v-application--is-ltr .v-text-field .v-label {
  -webkit-transform-origin: top left;
  transform-origin: top left;
  font-size: large;
}

.search-filter {
  padding-top: 15px;
  background-color: #ffffff33;
}

.titlecolumn {
  padding-bottom: 0px;
}
</style>
