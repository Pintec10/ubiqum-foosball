<template>
  <v-container>
    <h1>My teams</h1>
    <v-row>
      <v-col v-for="(oneTeam, i) in teams" :key="i" class="col-12 col-sm-6">
        <h2>Tournament: {{oneTeam.tournament}}</h2>

        <div class="team-img-box">
          <!-- you can change v-img with img and remove max-width -->
          <v-img :src="oneTeam.image" max-width="50vmin" alt="Team logo"></v-img>

          <div class="mate-img-box">
            <!-- you can change v-avatar with div or remove it without problem -->
            <v-avatar>
              <img :src="findTeammate(oneTeam).image" alt="Teammate picture" />
            </v-avatar>
            <p class="mb-0">TeamMate:</p>
            <p class="mb-0">{{findTeammate(oneTeam).name}}</p>
          </div>
          <p>{{oneTeam.name}}</p>
        </div>
        <v-row>
          <v-col class="col-12">
            <button type="button" @click="findTeamMatches(oneTeam)">See matches</button>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12">
            <button type="button" @click="deleteTeam(oneTeam)">Delete team</button>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "myTeams",
  data() {
    return {
      teams: [
        {
          id: 12,
          name: "Windstrike",
          image: "https://i.ibb.co/sQHQtQy/team01.jpg",
          tournament: "Christmas",
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
        },
        {
          id: 34,
          name: "Get Me Coding",
          image: "https://i.ibb.co/DV0GpGx/team02.jpg",
          tournament: "Girl Power",
          player1: {
            id: "123",
            name: "Celina K",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
          },
          player2: {
            id: "246",
            name: "Vasil M",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
          }
        },
        {
          id: 56,
          name: "Coffee Coder",
          image: "https://i.ibb.co/nkDXjsB/team03.png",
          tournament: "No Prisoners",
          player1: {
            id: "123",
            name: "Celina K",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
          },
          player2: {
            id: "567",
            name: "Rob M",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
          }
        }
      ]
    };
  },

  methods: {
    findTeammate(team) {
      return team.player2; //will change this once JSON available
    },

    findTeamMatches(team) {
      console.log("finding matches for team " + team.name);
    },

    deleteTeam(team) {
      //use a store action for this?
      console.log("deleting team " + team.name);
    }
  }
};
</script>

<style>
.team-img-box {
  position: relative;
  border: 1px solid green;
}

.mate-img-box {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>