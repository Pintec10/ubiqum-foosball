import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreateAccount from '../views/CreateAccount.vue'
import CreateTournament from '../views/CreateTournament.vue'
import Tournaments from '../views/Tournaments.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: CreateAccount
  },
  {
    path: '/create-tournament',
    name: 'create-tournament',
    component: CreateTournament
  },
  {
    path: '/tournaments',
    name: 'tournaments',
    component: Tournaments
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: Leaderboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },

  //{
  //  path: '/about',
  //  name: 'about',
  //  // route level code-splitting
  //  // this generates a separate chunk (about.[hash].js) for this route
  //  // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  routes
})

export default router
