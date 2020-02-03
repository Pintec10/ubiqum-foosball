<template>
  <!-- CELINA: you can change all "v-img" with "img" and then do the sizing with CSS! -->

  <!-- if you prefer flexbox, comment out all this v-row and its contents and use the other option 
  that you'll find after it. I made this grid to be responsive with horizontal orientation-->
  <v-row>
    <v-col class="col-12">
      <v-row class="d-flex justify-space-between align-center">
        <v-col class="col-4">
          <SingleTeam :team="matchData.homeTeam" />
          <!-- will add logic to display winning team badge -->
        </v-col>
        <v-col class="col-1">
          <p>VS</p>
        </v-col>
        <v-col class="col-4">
          <SingleTeam :team="matchData.awayTeam" />
          <!-- will add logic to display winning team badge -->
        </v-col>
        <v-col class="col-3">
          <button type="button">Results</button>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <!-- Other option: if you prefer flexbox, comment out the first v-row above 
  and all its contents and use this instead (it's not responsive though):-->

  <!-- <div class="d-flex justify-space-between">
    <SingleTeam :team="matchData.homeTeam" />
    <div>
      <p>VS</p>
    </div>
    <SingleTeam :team="matchData.awayTeam" />
  </div>-->
</template>

<script>
import SingleTeam from "@/components/SingleTeam.vue";
export default {
  name: "matchTile",
  components: {
    SingleTeam
  },

  props: {
    matchData: {
      type: Object
    }
    /* EXAMPLE OF matchData:
      {
            id: 10,
            homeTeamScore: 7,
            awayTeamScore: 3,
            homeTeam: {
              id: 12,
              name: "Windstrike",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
              player1: {
                id: "123",
                name: "Celina K",
                image: "https://i.ibb.co/sQHQtQy/team01.jpg"
              },
              player2: {
                id: "456",
                name: "Roberto M",
                image: "https://i.ibb.co/sQHQtQy/team01.jpg"
              }
            },
            awayTeam: {
              id: 34,
              name: "Get Me Coding",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
              player1: {
                id: "135",
                name: "Lluis G",
                image: "https://i.ibb.co/sQHQtQy/team01.jpg"
              },
              player2: {
                id: "246",
                name: "Vasil M",
                image: "https://i.ibb.co/sQHQtQy/team01.jpg"
              }
            }
          }
    */
  },

  data() {
    return {
      //
    };
  }
};

/*
------ ROBERTO'S NOTES: CODE WITH GRID BUT NO SingleTeam COMPONENT -----
<!-- GRID, no SingleTeam component -->
  <!-- <v-row>
    <v-col class="col-12">
      <v-row>
        <v-col class="col-4">
          <p>{{matchData.homeTeam.name}}</p>
        </v-col>
        <vcol class="col-1"></vcol>
        <v-col class="col-4">
          <p>{{matchData.awayTeam.name}}</p>
        </v-col>
        <vcol class="col-3"></vcol>
      </v-row>
      <v-row class="d-flex justify-space-between align-center">
        <v-col class="col-4">
          <v-img :src="matchData.homeTeam.image"></v-img>
        </v-col>
        <v-col class="col-1">
          <p>VS</p>
        </v-col>
        <v-col class="col-4">
          <v-img :src="matchData.awayTeam.image"></v-img>
        </v-col>
        <v-col class="col-3">
          <button type="button">Results</button>
        </v-col>
      </v-row>
    </v-col>
  </v-row>-->

*/
</script>

<style>
</style>


