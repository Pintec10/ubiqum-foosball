<template>
  <v-container>
    <h1>
      <span v-if="$route.params.itemID !== 'global'">Tournament</span>
      Leaderboard
    </h1>
    <h2 v-if="$route.params.itemID !== 'global'">{{sourceData.name}}</h2>

    <div v-if="$route.params.itemID !== 'global'">
      <v-row v-for="(team, i) in sourceData.teams" :key="i">
        <v-col class="col-2 d-flex flex-column justify-center align-center">{{i + 1}}</v-col>
        <v-col class="col-8">
          <SingleTeam :team="team" />
        </v-col>
        <v-col class="col-2 d-flex flex-column justify-center align-center">
          <p>{{team.score}}</p>
          <p>Points</p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import SingleTeam from "@/components/SingleTeam.vue";
export default {
  name: "leaderboard",
  components: {
    SingleTeam
  },
  data() {
    return {
      sourceData:
        // MOCK DATA FOR TESTING - WILL ADD METHOD TO FETCH AND SORT DATA
        {
          id: 1,
          name: "Christmas",
          teams: [
            {
              id: 56,
              name: "Sugar Rush",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
              score: 11,
              player1: {
                id: "234",
                name: "Cel K",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              },
              player2: {
                id: "567",
                name: "Rob M",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              }
            },
            {
              id: 78,
              name: "Funny Faces",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
              score: 3,
              player1: {
                id: "357",
                name: "Llu G",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              },
              player2: {
                id: "468",
                name: "Vas M",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              }
            },
            {
              id: 12,
              name: "Windstrike",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
              score: 9,
              player1: {
                id: "123",
                name: "Celina K",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              },
              player2: {
                id: "456",
                name: "Roberto M",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              }
            }
          ]
        }
    };
  }
};
</script>

<style>
</style>