<template>
  <v-container>
    <h1>Your profile</h1>
    <v-row>
      <v-col class="col-12 col-sm-6 avatar-box" @click="changeAvatar">
        <v-avatar width="50vmin" height="50vmin">
          <!-- you can change v-avatar to div or anything you want without problem! -->
          <img :src="user.image" alt="Profile picture" />
          <div class="change-picture-box">
            <p>Change profile picture</p>
          </div>
        </v-avatar>
        <input id="avatar-change-input" type="file" accept="image/*" capture="camera" />
        <!-- will check if capture works correctly on smartphone! -->
      </v-col>

      <v-col class="col-6 col-sm-3">
        <p>Matches played: {{user.matches_played}}</p>
        <p>Matches won: {{user.matches_won}}</p>
        <p>Matches lost: {{user.matches_lost}}</p>
        <p>Best team:</p>
        <p>Next match:</p>
        <p>Tournaments:</p>
      </v-col>
      <v-col class="col-6 col-sm-3">
        <p>{{user.matches_played}}</p>
        <p>{{user.matches_won}}</p>
        <p>{{user.matches_lost}}</p>
        <p>{{user.best_team}}</p>
        <p>{{user.next_match}}</p>
        <ul>
          <li v-for="(oneTournament, i) in user.tournaments" :key="i">{{oneTournament.title}}</li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-12">
        <button type="button" @click="deleteProfile">Delete profile</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      user: {
        // MOCK DATA FOR TESTING - TO COMPARE WITH LLUIS' JSON
        id: "123",
        name: "Celina K",
        image: "https://i.ibb.co/GctnKW1/profile-pic.jpg",
        score: 9,
        matches_played: 10,
        matches_won: 7,
        matches_lost: 3,
        best_team: "Good Girls",
        next_match: "xxxx",
        tournaments: [
          {
            title: "Sugar Rush",
            id: 1,
            image: "https://preview.ibb.co/bC5ELQ/alex_min.png",
            teamsJoined: 6,
            teamsMax: 10
          },
          {
            title: "Get me Coding",
            id: 1,
            image: "https://preview.ibb.co/bC5ELQ/alex_min.png",
            teamsJoined: 8,
            teamsMax: 15
          }
        ]
      }
    };
  },

  methods: {
    changeAvatar() {
      document.getElementById("avatar-change-input").click();
    },

    deleteProfile() {
      console.log("deleting profile");
    }
  }
};
</script>

<style>
.avatar-box {
  position: relative;
}

.change-picture-box {
  position: absolute;
}

#avatar-change-input {
  visibility: hidden;
}
</style>