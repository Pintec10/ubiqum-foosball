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
          v-model="statusFilter"
          label="Filter Tournaments"
        ></v-select>
      </v-col>
      <v-col class="col-7">
        <v-text-field
          id="search-field"
          color="white"
          dense
          type="text"
          v-model="searchFilter"
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

    <Notification />

    <v-col class="col-12">
      <v-row v-for="(tournament, i) in filteredTournamentList" :key="i">
        <TournamentTile
          v-if="getTeamList"
          :tournament="tournament"
          :tournamentTeams="tournamentTeams(tournament)"
        />
      </v-row>
    </v-col>

    <v-row v-show="filteredTournamentList.length > 0">
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
import { mapGetters, mapActions } from "vuex";
import Notification from "@/components/Notification.vue";

export default {
  name: "tournaments",

  components: {
    TournamentTile,
    Notification
  },

  data() {
    return {
      statusFilter: "All",
      searchFilter: "",
      filterOptions: ["All", "Open", "Ongoing", "Closed"]
    };
  },

  methods: {
    ...mapActions(["fetchTournamentList", "fetchTeamList"]),

    tournamentTeams(tournament) {
      let teamsArray = [];
      this.getTeamList.filter(oneTeam => {
        if (oneTeam.tournament == tournament["_id"]) {
          teamsArray.push(oneTeam);
        }
      });
      return teamsArray;
    }
  },

  computed: {
    ...mapGetters(["getTournamentList", "getTeamList"]),

    filteredTournamentList() {
      let filteredList = this.getTournamentList
        .filter(oneTournament => {
          return (
            oneTournament.state == this.statusFilter.toUpperCase() ||
            this.statusFilter === "All"
          );
        })
        .filter(oneTournament => {
          return oneTournament.title
            .toUpperCase()
            .includes(this.searchFilter.toUpperCase());
        });

      return filteredList;
    }
  },

  created() {
    this.fetchTournamentList();
    this.fetchTeamList();
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
