<template>
  <div class="container" @click="$router.push('/tournaments/detail/' + tournament.id)">
    <div>
      <h2>{{tournament.title}}</h2>
    </div>
    <div class="image-row">
      <div class="img">
        <img :src="tournament.image" />
      </div>
      <div class="aligner">
        <p class="nr aligner-item">{{tournament.teamsJoined}}/{{tournament.teamsMax}}</p>
        <p class="teams-joined-text aligner-item">teams joined</p>
      </div>
    </div>

    <div id="btns">
      <button type="button" class="btn">Cancel</button>
      <button type="button" class="btn">Matches</button>
      <button type="button" class="btn">Leaderboard</button>
      <button type="button" class="btn">Join</button>
    </div>
    <hr />
  </div>
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
hr {
  margin: 0px;
}

.aligner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
}
.aligner-item {
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
}

.nr {
  font-size: 10vw;
  font-weight: 800;
  margin-bottom: 0px !important;
}

.teams-joined-text {
  font-size: 3vw;
  margin-top: -10px !important;
}
.img img {
  width: 40vw;
  height: auto;
  border: 2px solid white;
  border-radius: 5%;
  clip: rect(10px, 290px, 190px, 10px);
  /* clip-path: inset(10px 20px 30px 40px); */
}
#btns {
  margin-left: 0px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
}

.btn {
  margin-top: 12px;
  padding: 5px 8px 5px 8px;
  background-color: white;
  color: red;
  font-weight: 400;
  font-size: 3vw;
  text-transform: uppercase;
  border-radius: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image-row {
  display: flex;
  flex-direction: row;
}

h2 {
  font-size: 6vw;
  line-height: 0.9em;
  margin-bottom: 15px;
}
</style>