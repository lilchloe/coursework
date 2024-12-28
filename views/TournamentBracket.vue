<template>
  <div class="container">
    <v-card class="games">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text_font " >
          ТУРНИРНАЯ СЕТКА 
        </h1>
       
        <h4 class="font-weight-bold text_font_mobile text-center justify-center" >
          ТУРНИРНАЯ СЕТКА 
        </h4>
      </v-card-title>
      <v-card-subtitle class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h4 " >
          
        </h1>
      </v-card-subtitle>
      <v-tabs 
        v-model="tab" grow  
      >
        <v-tab  
          v-for="item in items"
          :key="item"
          :value="item"
          
        >
          {{ item }}
        </v-tab>
      </v-tabs>
  
      <v-window v-model="tab" disabled  class="tr tra" :style="bg"  >
        <v-window-item class="tra"
        transition="scale-transition"
        reverse-transition="scale-transition"
          v-for="item in items"
          :key="item"
          :value="item"
          @click="moving"
        >

        <v-container v-if="tab === 'CS2'"  >
          <bracket :rounds="cs" >
      <template #player="{ player }" >
        <v-container   v-if="authorised === true"><span  class="bg-grey" @click="player.winner=!player.winner">{{ player.name }}</span> {{ player.score }}<btn @click="player.score=player.score+1" class="mdi mdi-plus plus"></btn><btn @click="player.score=player.score-1" class="mdi mdi-minus minus"></btn></v-container>
        <v-container   v-else >
          {{ player.name }} {{ player.score }}
        </v-container>
    </template>
    <template #player-extension-bottom="{ match }">
       {{match.time }}
    </template>
  </bracket>
  
      </v-container>

      <v-container v-if="tab === 'DOTA2'" tr >
        <bracket :rounds="dota" >
      <template #player="{ player }" >
        <v-container >{{ player.name }} <span>{{ player.score }}</span></v-container>
          
      </template>
  </bracket>
      </v-container>

      <v-container v-if="tab === 'VALORANT'" >
        <bracket :rounds="valorant" >
      <template #player="{ player }" >
          {{ player.name }} - {{ player.score }}
      </template>
    
  </bracket>
      </v-container>
      <v-container v-if="tab === 'LOL'" :bg="style_lol">
        <bracket :rounds="lol" >
      <template #player="{ player }" >
          {{ player.name }} - {{ player.score }}
      </template>
      
  </bracket>
  
      </v-container>
          
        </v-window-item>
      </v-window>
     
    </v-card>
  </div>
  </template>

<script setup>

import Bracket from "vue-tournament-bracket";
import { ref } from 'vue';
const props = defineProps(['authorised'])
var tab =ref('CS2');
var items= ['CS2', 'DOTA2', 'VALORANT', 'LOL',]

  

  var cs = ref([
      //Quarter
      {
          games: [
              {
                  player1: { id: "1", name: "TEAM G2", winner: false,score:1 },
                  player2: { id: "2", name: "TEAM OG",  winner: true,score:2},
                  time: "19.03 15:00",
              },
              {
                  player1: { id: "3", name: "VITALITY",winner: false,score:0},
                  player2: { id: "4", name: "MOUZ",winner: true,score:2 },
                  time: "19.03 18:00",
              },
              {
                  player1: { id: "5", name: "CLOUD9",score:0 },
                  player2: { id: "6", name: "HEROIC",score:0},
                  time: "20.03 15:00",
              },
              {
                  player1: { id: "7", name: "FAZE",score:0 },
                  player2: { id: "8", name: "VIRTUS.PRO",score:0 },
                  time: "20.03 18:00",
              }
          ],

      },
      //Semi
      {
          games: [
              {
                player1: { id: "1", name: "TEAM G2",score:0 },
                player2: { id: "4", name: "MOUZ",score:0 },
                time: "21.03 15:00",
              },
              {
                  player1: { id: "5", name: ""},
                  player2: { id: "8", name: ""},
                  time: "21.03 18:00",
              }
          ]
      },
      //Final
      {
          games: [
              {
                  player1: { id: "4", name: ""},
                  player2: { id: "8", name: ""},
                  time: "22.03 15:00",
              }
          ]
      }
  ]);

  const dota = [
      //Quarter
      {
          games: [
              {
                  player1: { id: "1", name: "BB TEAM", winner:  true,score:'2' },
                  player2: { id: "2", name: "TEAM LIQUID",  winner: false,score:'1'}
              },
              {
                  player1: { id: "3", name: " OG",score:'0' },
                  player2: { id: "4", name: "HEROIC",score:'0' }
              },
              {
                  player1: { id: "5", name: "TEAM SPIRIT",score:'0' },
                  player2: { id: "6", name: "TALON ESPORTS",score:'0' }
              },
              {
                  player1: { id: "7", name: "TUNDRA",score:'0' },
                  player2: { id: "8", name: " TEAM FALCONS",score:'0' }
              }
          ]
      },
      //Semi
      {
          games: [
              {
                  player1: { id: "1", name: "BB TEAM",score:'0' },
                  player2: { id: "4", name: ""}
              },
              {
                  player1: { id: "5", name: ""},
                  player2: { id: "8", name: ""}
              }
          ]
      },
      //Final
      {
          games: [
              {
                  player1: { id: "4", name: ""},
                  player2: { id: "8", name: ""}
              }
          ]
      }
  ];




  const valorant = [
      //Quarter
      {
          games: [
              {
                  player1: { id: "1", name: "FNACTIC", winner: false,score:'1' },
                  player2: { id: "2", name: "PEPER REX",  winner: true,score:'2'}
              },
              {
                  player1: { id: "3", name: "DSYRE",winner: false,score:'0'},
                  player2: { id: "4", name: "EVIL GENIUSES",winner: true,score:'0' }
              },
              {
                  player1: { id: "5", name: "FUT ESPORTS",score:'0' },
                  player2: { id: "6", name: "MOUZ",score:'0' }
              },
              {
                  player1: { id: "7", name: "SENTINELS",score:'0' },
                  player2: { id: "8", name: "TEAM FALCONS",score:'0' }
              }
          ]
      },
      //Semi
      {
          games: [
              {
                  player1: { id: "1", name: ""},
                  player2: { id: "4", name: ""}
              },
              {
                  player1: { id: "5", name: ""},
                  player2: { id: "8", name: ""}
              }
          ]
      },
      //Final
      {
          games: [
              {
                  player1: { id: "4", name: ""},
                  player2: { id: "8", name: ""}
              }
          ]
      }
  ];





  const lol= [
      //Quarter
      {
          games: [
              {
                  player1: { id: "1", name: "TEAM G2", winner: false,score:'1' },
                  player2: { id: "2", name: "T1 TEAM",  winner: true,score:'2'}
              },
              {
                  player1: { id: "3", name: "GENG.G",winner: false,score:'0'},
                  player2: { id: "4", name: "BILIBILI GAMING",winner: true,score:'0' }
              },
              {
                  player1: { id: "5", name: "JD GAMING",score:'0' },
                  player2: { id: "6", name: "LNG ESPORTS",score:'0' }
              },
              {
                  player1: { id: "7", name: "FLYQUEST",score:'W' ,winner: true},
                  player2: { id: "8",  }
              }
          ]
      },
      //Semi
      {
          games: [
              {
                  player1: { id: "1", name: ""},
                  player2: { id: "4", name: ""}
              },
              {
                  player1: { id: "5", name: ""},
                  player2: { id: "8", name: ""}
              }
          ]
      },
      //Final
      {
          games: [
              {
                  player1: { id: "4", name: ""},
                  player2: { id: "8", name: ""}
              }
          ]
      }
  ];
  const bg = {
 
 backgroundImage: 'linear-gradient(rgba(119, 21, 90, 0.5), rgba(0, 0, 0, 0.9)),url("https://img.freepik.com/premium-photo/swirling-soft-purple-background_87720-149947.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1713657600&semt=ais")'
}
</script>


<style>
.v-card{
  transition: none !important;
}

  @media  (max-width: 450px) {
    .tr{
  overflow: scroll;
    }
    .text_font{
      display: none;
    }
    .text_font_mobile{
      display: flex;
    
    }
  }
  @media  (min-width: 450px) {
    .text_font_mobile{
      display: none;
    }
  }
  @media  (min-width: 800px) {
    .text_font{
      font-size: 60px;
    }
    .vtb-item-players {
      background-color: rgba(230, 2, 211, 0.582) !important;
        min-width:200px;
    }
  }

  @media  (max-width: 800px) {
    .text_font{
      font-size: 35px;
    }
    .vtb-item-players {
      background-color: rgba(230, 2, 211, 0.596) !important;
        min-width: 120px;
       
    }
  }
 
    
    .vtb-item-players .winner {
        background-color:rgba(10, 240, 68, 0.877) !important;
        
    }

    .vtb-item-players .defeated {
        background-color: rgba(206, 17, 17, 0.925) !important;
    }

    .vtb-item-players .winner.highlight {
        background-color: rgba(8, 233, 19, 0.815) !important;
    }

    .vtb-item-players .defeated.highlight {
        background-color: rgb(221, 23, 23) !important;
    }</style>
<style scoped>
.plus{
  position:absolute;
  right: 20px;
  background: #a7a1a1;
}
.minus{
  position:absolute;
  right: 0;
  background: #a7a1a1;
}
.tr{

  align-items: center;
  display: flex;
background-size: cover;

}
@media  (max-width: 800px) {

.container {
margin: 0px 10px 0px 10px;;
}
}
@media  (min-width: 800px) {
.container {
margin: 0px 50px 0px 50px;
}
}

.games{
  
  background: #e009bc67;
  border: solid;
  box-shadow: 0px 0px 10px 5px rgba(218, 10, 190, 0.9);
 
  border-color: #d81da9;
  margin-bottom: 50px;
}

</style>