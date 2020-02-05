<template>
  <v-container>
    <h1>
      <span v-if="$route.params.itemID !== 'global'">Tournament</span>
      Leaderboard
    </h1>
    <h2 v-if="$route.params.itemID !== 'global'">{{sourceData.name}}</h2>

    <div>
      <v-row v-for="(oneItem, i) in dataSelector" :key="i">
        <v-col class="col-2 d-flex flex-column justify-center align-center">{{i + 1}}</v-col>
        <v-col class="col-8">
          <div v-if="$route.params.itemID === 'global'">
            <v-avatar>
              <!-- you can change v-avatar to div or anything you want without problem! -->
              <img :src="oneItem.image" alt="Profile picture" />
            </v-avatar>
            <p>{{oneItem.name}}</p>
          </div>

          <!-- -->
          <v-expansion-panels v-else flat>
            <v-expansion-panel class="transparent">
              <v-expansion-panel-header class="pa-0 transparent">
                <div>
                  <SingleTeam :team="oneItem" />
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-avatar>
                  <img :src="oneItem.player1.image" alt="Profile picture" />
                </v-avatar>
                <v-avatar>
                  <img :src="oneItem.player1.image" alt="Profile picture" />
                </v-avatar>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- -->
        </v-col>
        <v-col class="col-2 d-flex flex-column justify-center align-center">
          <p>{{oneItem.score}}</p>
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
      sourceData: {},

      // MOCK DATA FOR TESTING - WILL ADD METHOD TO FETCH AND SORT DATA
      tournamentData: {
        id: 1,
        name: "Christmas",
        teams: [
          {
            id: 56,
            name: "Sugar Rush",
            image: "https://i.ibb.co/ydBtdxb/team04.jpg",
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
            image: "https://i.ibb.co/nkDXjsB/team03.png",
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
      },

      globalData: {
        players: [
          {
            id: "357",
            name: "Llu G",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg",
            score: 6
          },
          {
            id: "567",
            name: "Rob M",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg",
            score: 10
          },
          {
            id: "123",
            name: "Celina K",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg",
            score: 9
          },
          {
            id: "456",
            name: "Roberto M",
            image: "https://i.ibb.co/GctnKW1/profile-pic.jpg",
            score: 7
          }
        ]
      }
    };
  },

  watch: {
    "$route.params.itemID": function() {
      this.updateSourceData();
    }
  },

  computed: {
    dataSelector() {
      return this.$route.params.itemID === "global"
        ? this.sourceData.players
        : this.sourceData.teams;
    }
  },

  methods: {
    updateSourceData() {
      this.$route.params.itemID === "global" // will change with fetch once logic implemented
        ? (this.sourceData = this.globalData)
        : (this.sourceData = this.tournamentData);
    }
  },

  created() {
    this.updateSourceData();
  }
};
</script>

<style>
</style>