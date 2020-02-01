<template>
  <v-container>
    <h1>{{tournamentData.title}}</h1>
    <!-- will put route condition to change h1 title if viewing global list -->
    <h2>Next/past matches</h2>
    <!-- will put condition to change the title in h2 -->
    <MatchList :tournamentData="tournamentData" />
    <div class="text-center">
      <button type="button">Join</button>
    </div>
  </v-container>
</template>

<script>
import MatchList from "@/components/MatchList.vue";
export default {
  name: "singleTournament",
  components: {
    MatchList
  },
  data() {
    return {
      tournamentData: {
        // MOCK DATA FOR TESTING - TO COMPARE WITH LLUIS' JSON
        id: 1,
        title: "Christmas Tournament",
        image: "https://i.ibb.co/sQHQtQy/team01.jpg",
        matches: [
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
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              },
              player2: {
                id: "456",
                name: "Roberto M",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              }
            },
            awayTeam: {
              id: 34,
              name: "Get Me Coding",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
              player1: {
                id: "135",
                name: "Lluis G",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              },
              player2: {
                id: "246",
                name: "Vasil M",
                image: "https://i.ibb.co/GctnKW1/profile-pic.jpg"
              }
            }
          },
          {
            id: 11,
            homeTeamScore: null,
            awayTeamScore: null,
            homeTeam: {
              id: 56,
              name: "Sugar Rush",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
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
            awayTeam: {
              id: 78,
              name: "Funny Faces",
              image: "https://i.ibb.co/sQHQtQy/team01.jpg",
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