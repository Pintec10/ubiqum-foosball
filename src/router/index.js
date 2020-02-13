import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreateAccount from '../views/CreateAccount.vue'
import CreateTournament from '../views/CreateTournament.vue'
import CreateTeam from '../views/CreateTeam.vue'
import Tournaments from '../views/Tournaments.vue'
import MatchListView from '../views/MatchListView.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Profile from '../views/Profile.vue'
import MyTeams from '../views/MyTeams.vue'

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
    name: 'createAccount',
    component: CreateAccount
  },
  {
    path: '/create-tournament',
    name: 'createTournament',
    component: CreateTournament
  },
  {
    path: '/tournaments/:itemID/create-team', // itemID = {tournament id}
    name: 'createTeam',
    component: CreateTeam,
    props: true
  },
  {
    path: '/tournaments',
    name: 'tournaments',
    component: Tournaments
  },
  {
    path: '/matches/:itemID', // itemID = {tournament id} OR "global"
    name: 'matchListView',
    component: MatchListView,
    props: true
  },
  {
    path: '/leaderboard/:itemID', // itemID = {tournament id} OR "global"
    name: 'leaderboard',
    component: Leaderboard,
    props: true
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/my-teams',
    name: 'myTeams',
    component: MyTeams
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
