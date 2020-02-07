<template>
  <v-app>
    <HeaderNav v-if="$route.path !== '/'" />
    <v-content class="grad">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HeaderNav from "./components/HeaderNav";

export default {
  name: "App",

  components: {
    HeaderNav
  },

  data: () => ({
    //
  })
};
</script>

<style>
.grad {
  background: linear-gradient(
    -35deg,
    #db2b29,
    #f51146,
    #db2b29,
    #f84913,
    #db2b29,
    #db2b29,
    #f51146,
    #db2b29,
    #f84913,
    #db2b29
  );
  background-size: 500% 500%;
  animation: gradientFade 8s ease infinite;
}

@keyframes gradientFade {
  0% {
    background-position: 47% 0%;
  }
  50% {
    background-position: 52% 100%;
  }
  100% {
    background-position: 47% 0%;
  }
}

.title {
  font-style: black;
  font-weight: 800;
}
</style>