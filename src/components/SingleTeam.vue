<template>
  <div @click="showMembers = !showMembers" class="team-box">
    <p>{{team.name}}</p>
    <v-img :src="team.image"></v-img>
    <div v-show="showMembers">
      <v-avatar class="avatar-left">
      <!-- you can change v-avatar to div or anything you want without problem! -->
        <img :src="team.player1.image" alt="Profile picture" />
      </v-avatar>
      <v-avatar class="avatar-right">
        <img :src="team.player1.image" alt="Profile picture" />
      </v-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleTeam",

  props: {
    team: {
      type: Object
    }
    /* EXAMPLE OF team:
          {
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
          }
    */
  },

  data() {
    return {
      showMembers: false
    };
  }
};
</script>

<style>
.team-box {
  position: relative;
  cursor: pointer;
}

.avatar-left {
  position: absolute;
  bottom: 0;
  left: 0;
}

.avatar-right {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>