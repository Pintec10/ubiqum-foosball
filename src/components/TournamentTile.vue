<template>
  <v-container @click="$router.push('/tournaments/detail/' + tournament.id)">
    <v-row>
      <h2 class="title">{{tournament.title}}</h2>
    </v-row>
    <v-row>
      <v-col class="col-4">
        <v-img :src="tournament.image" />
      </v-col>
      <v-col class="col-8 d-flex flex-column justify-center">
        <p>{{tournament.teamsJoined}}/{{tournament.teamsMax}}</p>
        <p>teams joined</p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-around">
      <v-btn small color="white" class="red--text text--darken-1">Cancel</v-btn>
      <v-btn small color="white" class="red--text text--darken-1">Matches</v-btn>
      <v-btn small color="white" class="red--text text--darken-1">Join</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "tournamentTile",

  props: {
    tournament: {
      type: Object
    }
  },

  data() {
    return {
      //matchList: [
      //  {
      //    homeTeamName: "Winstrike",
      //    homeTeamImage: "https://i.ibb.co/sQHQtQy/team01.jpg",
      //    awayTeamName: "Get Me Coding",
      //    awayTeamImage: "https://i.ibb.co/sQHQtQy/team01.jpg"
      //  }
      //]
    };
  },

  methods: {
    //imgUrl(url) {
    //  //return require("'" + url + "'");
    //  console.log(url);
    //  //let urlqui = "../assets/team01.jpg";
    //
    //  return require(this.oggetto.oggurl);
    //}
  }
};
</script>

<style>
</style>