
import MainPage from '@/views/MainPage.vue'
import Teams from '@/views/Teams.vue'
import TournamentBracket from '@/views/TournamentBracket.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'mainpage',
      component:MainPage

    },
    {
      path:'/teams',
      name:'Teams',
      component:Teams

    },{
      path:'/tornamentbracket',
      name:'tornamentbracket',
      component:TournamentBracket

    },
    

  ]
})

export default router
