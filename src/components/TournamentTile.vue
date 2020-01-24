<template>
  <v-container>
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
      //
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