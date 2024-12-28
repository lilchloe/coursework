  <template>
     <div class="container">
  <v-card  class="mb-10 games"> 
    <v-card-title class="text-center justify-center py-6 ">
      
      <h1 class="font-weight-bold text_font ">
        КОМАНДЫ УЧАСТНИКИ 
      </h1>
      
      <h4 class="font-weight-bold text_font_mobile text-center justify-center" >
        КОМАНДЫ УЧАСТНИКИ
        </h4>
        
    </v-card-title>
    <v-card-subtitle class="text-center justify-center py-6 d-none d-sm-flex">
      <h4  >
        Команды принимающие участие в нашем замечательном турнире ! 
      </h4>
     
    </v-card-subtitle>
    <v-tabs 
      v-model="tab"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item"
        :value="item"
      >
      <v-container v-if="tab === 'CS2' " >
        <Card :authorised="props.authorised" :game="cs" :bg="style_cs" @delete-card="update_cs" @new-card="addnewCard" >
        </Card>
      </v-container>
      <v-container v-if="tab === 'DOTA2'" >
        <Card :authorised="props.authorised" :game="dota" :bg="style_dota"  @delete-card="update_dota"></Card>
      </v-container>
      <v-container v-if="tab === 'VALORANT'" >
        <Card :authorised="props.authorised" :game="valorant" :bg="style_valorant"  @delete-card="update_valorant"></Card>
      </v-container>
      <v-container v-if="tab === 'LOL'" :bg="style_lol" @delete-card="update_lol">
        <Card :authorised="props.authorised" :game="lol" :bg="style_lol"  @delete-card="update"></Card>
      </v-container>
      </v-window-item>
    </v-window>
  </v-card>


</div>

</template>
<script setup>

import { ref } from 'vue'
import Card from "../components/Card.vue"
import { reactive } from 'vue'
const props = defineProps(['authorised'])

const addnewCard = (team) =>{
  cs.push(team);
}

const update_cs =(index) => {
  cs.splice(index, 1);
}
const update_dota =(index) => {
  dota.splice(index, 1);
}
const update_valorant =(index) => {
  valorant.splice(index, 1);
}
const update_lol =(index) => {
  lol.splice(index, 1);
}

const style_cs = {
 
  backgroundImage: 'linear-gradient(rgba(119, 21, 90, 0.5), rgba(0, 0, 0, 0.9)),url("https://3dnews.ru/assets/external/illustrations/2023/03/22/1083857/0.jpg")'
}
const style_dota = {
  background:'center',
  backgroundImage: 'linear-gradient(rgba(119, 21, 90, 0.5), rgba(0, 0, 0, 0.9)),url("/bg/c.jpg")'
}
const style_valorant = 

{
  background:'left',
  backgroundImage: 'linear-gradient(rgba(119, 21, 90, 0.5), rgba(0, 0, 0, 0.9)),url("https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg")'
}
const style_lol = {
  backgroundImage: 'linear-gradient(rgba(119, 21, 90, 0.5), rgba(0, 0, 0, 0.9)),url("https://whatnext.pl/wp-content/uploads/2019/05/league-of-legends-hd-wallpapers-33299-6994659.jpg")'
}
var tab = ref('');
var items= [
    'CS2', 'DOTA2', 'VALORANT', 'LOL',
]

var cs =reactive([
{id:0,name :"G2",path:"https://img.championat.com/team/logo/1584988190191772382.png",team:"NIKO-MONESY-NEXA-HUNTER-HOOXI"},
{id:1,name:"HEROIC",path:"https://img.championat.com/team/logo/15907760211949564581.png",team:"NERTZ TESES NICOODOZ SJUSH KYXSAN"},
{id:2,name :"VITALITY",path:"https://img.championat.com/team/logo/15849902021387020597.png",team:"APEX ZYWOO FlameZ SPINX MEZII"},
{id:3,name:"OG",path:"https://img.championat.com/team/logo/1584990139378915517.png",team:"DEGSTER F1KU K1TO NEXIUS HeavyGod"},
{id:4,name:"MOUZ",path:"https://img.championat.com/team/logo/15849900551796097350.png",team:"BROLLAN S1UHY TORZSI JIMPPHAT XERTION"},
{id:5,name :"CLOUD9",path:"https://img.championat.com/team/logo/15850706011443534063.png",team:"HOBB1T BOOMbl4 AX1LE PERFECTO ELECTRONIC"},
{id:6,name:"FAZE",path:"https://img.championat.com/team/logo/15849899541690512673.png",team:"KARRIGAN RAIN FROZEN ROPZ BROKY"},
{id:7,name:"VIRTUS.PRO",path:"https://img.championat.com/team/logo/15849901881326408816.png",team:"mir Jame FL1T fame n0rb3r7"},

])
var dota=reactive([
{name :"BB",path:"/logos/bb.png",team:"Nightfall gpk~ Save- TORONTOTOKYO MieRo"},
{name:"LIQUID",path:"https://virtus-img.cdnvideo.ru/images/details-logo/plain/cc/ccdb9bb9676b374792e8a5661162f61e.png",team:"iNSaNiA Boxi miCKe Nisha ЗЗ"},
{name:"HEROIC",path:"https://img.championat.com/team/logo/15907760211949564581.png",team:"DavaiLama KJ Scofield 4nalog K1"},
{name :"TEAM SPIRIT",path:"https://virtus-img.cdnvideo.ru/images/details-logo/plain/fb/fb144e9ffe0a2cf6bab0cf207a21ee4f.png",team:"Larl Miposhka Mira Yatoro Collapse"},
{name:"OG",path:"https://img.championat.com/team/logo/1584990139378915517.png",team:"Wisper Ari Ceb Timado Bzm"},
{name:"TALON ESPORTS",path:"https://virtus-img.cdnvideo.ru/images/details-logo/plain/ac/ac407ea3-8039-4c5f-af0b-7ce71dcdc58f.png",team:"ponyo Ws Jhocam Akashi ChYuan"},
{name :"TUNDRA ESPORTS",path:"https://virtus-img.cdnvideo.ru/images/details-logo/plain/67/6776035b666c37d8cbc41e4a1c5f086e.png",team:"Whitemon 9Class Tobi Topson Pure"},
{name:"TEAM FALCONS",path:"https://virtus-img.cdnvideo.ru/images/details-logo/plain/10/1004d7a7-36ce-452b-9aab-18613bf7256d.webp",team:"Sneyking Cr1t- skiter Malr1ne ATF"},

])
var valorant=reactive([
{name :"FNATIC",path:"https://storage.cq.ru/logos/teams/861d1208e771667d04d1439a7886ff50.png",team:"Boaster Chronicle Leo Derke Alfajer"},
{name:"PEPER REX",path:"https://storage.cq.ru/logos/teams/eb3789f3dec7a72e0ac49dab466c8ef2.png",team:"Jinggg mindfreak f0rsaken d4v41 monyet something"},
{name:"Sentinels",path:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Sentinels_logo.svg/1200px-Sentinels_logo.svg.png",team:"SAcy TenZ Johnqt zekken Zelsis"},
{name :"EVIL GENIUSES",path:"https://storage.cq.ru/logos/teams/429a360d42a3c979fba6974cf81607d4.png",team:"supamen Derrek jawgemo NaturE Apoth"},
{name:"DSYRE",path:"https://storage.cq.ru/logos/teams/1c254a10ac3b666f05da92d0a774cdb3.png",team:"caydeN WADDLE FILu WACKIE Tag "},
{name:"FUT ESPORTS",path:"https://storage.cq.ru/logos/teams/5c8b091afb5fe0f90cca99384513e016.png",team:"qRaxs cned AtaKaptan MrFalin Yetujey"},
{name :"MOUZ",path:"https://storage.cq.ru/logos/teams/17e95a967e2881305b89342513a7db6c.png",team:"obnoks xuss iluri Fizzy starki"},
{name:"TEAM FALCONS",path:"https://storage.cq.ru/logos/teams/7f8c8a13074bfeaab3cf380627d0fccb.png",team:"alvar SpYzera OutLaW KHaaLiD Moh"},
] )
var lol=reactive([
{name :"T1 TEAM",path:"https://static.gosugamers.net/71/b9/22/ab54bc111ecb4c5a8f7391e22376456bfa4c91fb45ea80a4f3e2f6fb1f.png?w=128",team:"Faker Keria Zeus Gumayusi Oner"},
{name:"GEN.G",path:"https://static.gosugamers.net/73/dc/54/d65e11f36fb160ce0ac667ab68c3ab7d6bb77defac125ca86937115cff.png?w=128",team:"Chovy Peyz Lehends Kiin Canyon"},
{name:"G2",path:"https://static.gosugamers.net/6f/ee/e3/f6a5b42bd06b81647a943e4e75afd066df401aeae97818527f96a5b27c.png?w=128",team:"Caps BrokenBlade Yike hans_sama Mikyx"},
{name :"Bilibili Gaming",path:"https://static.gosugamers.net/4b/4a/cb/e6d20a53e3076bddd42a71ece89e09699b1ce01eec2aa5cafc86c39a69.png?w=128",team:"bin XUN ELK ON Baiye"},
{name:"JD Gaming",path:"https://static.gosugamers.net/3e/2e/c5/bf896426940e406202b24026fb418cc6a8aca763fecc6de317a2e950e3.png?w=128",team:"Missng sheer Maggie Ruler YaGao"},
{name:"LNG Esports",path:"https://static.gosugamers.net/22/3d/f6/f625f9704f25ca8e10f0c58fa5f754a05104832d1cc1c8214fef9bd0c7.png?w=128",team:"Hang Zika Scout Gala WeiWei"},
{name :"FlyQuest",path:"https://static.gosugamers.net/f3/6e/9a/26b6973b7403ed733c059a4a8d5213f1f4a4807e95e979560ea2c3e436.png?w=128",team:"Jensen Bwipo Inspired Busio Massu"},

] )

</script>
<style scoped>
.new{
 
}
.games{
  background: #e009bc67;
  border: solid;
  box-shadow: 0px 0px 10px 5px rgba(218, 10, 190, 0.9);
 
  border-color: #d81da9;
  margin-bottom: 50px;
}
@media  (min-width: 800px) {
    .text_font{
      font-size: 60px;
    }
  }
  @media  (max-width: 800px) {
    .text_font{
      font-size: 35px;
    }
  }
@media  (min-width: 800px) {
.container {
margin: 0px 50px 0px 50px;
}
}
@media  (max-width: 800px) {
.container {
margin: 0px 15px 0px 15px;;
}
}

</style>