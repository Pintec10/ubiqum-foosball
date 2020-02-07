<template>
  <div>
    <p>{{team.name}}</p>
    <img :src="team.image" class="teamImage" />
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
      //
    };
  },

  methods: {
    showTeamMembers() {}
  }
};
</script>

<style>
.teamImage {
  width: 100%;
}
</style>