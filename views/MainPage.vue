<template >
  <div class="container">
    <h1>CYTECH CYBERCUP TOURNAMENT </h1> 
    <h2 class="mb-5"><strong>Какое сейчас время ? Время побеждать!</strong> </h2>   
  <v-carousel cycle class="games" :show-arrows="false" height="700px" hide-delimiters >
  <v-carousel-item
    src="https://sun9-61.userapi.com/impg/ZAeHi-6xpITpiHdgZJSvuSv7ntRGgpkBCVMTpw/S2Pqit70h48.jpg?size=1280x720&quality=96&sign=4219615f9b949343811bfd7eb967e5fc&type=album"
    cover
    
  ></v-carousel-item>

  <v-carousel-item
    src="https://sun9-7.userapi.com/impg/kmxSwLpCNHCdHy2SknkWege4R9QoDGsXUkpgLw/PkgZidJkrd8.jpg?size=1280x720&quality=96&sign=866f038d10c4ea71a7f94aec62c39d67&type=album"
    cover
    
  ></v-carousel-item>
  
  <v-carousel-item
    src="https://sun9-53.userapi.com/impg/OZb8WNWXI2Sc-5fmlAao3UXsOHSJ3EVn8B3ZIw/q6dBRh6ec9s.jpg?size=1280x720&quality=96&sign=f58c876a76cf47bc2976adef17367be4&type=album"
    cover
    
  ></v-carousel-item>
  <v-carousel-item
    src="https://sun9-79.userapi.com/impg/tkkl-UFws03EfR_Q1_sWUz_WQAHwwZgBo9YULg/Cfy9HWgfpug.jpg?size=1280x720&quality=96&sign=2ec733171764abd2eac6217d4f7c211d&type=album"
    cover
    
  ></v-carousel-item>
</v-carousel>
  
  <div class="games">
    <h3>Инфо</h3> 
    <p>Наш турнир проводится каждые полгода и каждый желающий  имеет возможность попробовать себя как командных , так и в одиночных киберспортивных соревнованиях </p>
    <p>Финал турнира будет проходить в оффлайн формате </p>
    <p>На нашем турнире будут разыгрываться крутейшие призы от наших спонсоров</p>
    <p class="mb-5"></p>
  </div>


  <div class="games">
    <h3>Дисциплины</h3>
    <v-container>
      <v-row >
      <v-col
        v-for="n in games"
        :key="n"
        cols="12"
        lg="6" >
      <v-hover v-slot="{ isHovering, props }">
      <v-card color="#161616"
      class="card"
      v-bind="props"
      hover >
    <template v-slot:title>
      <span >{{n.title}}</span>
    </template> 
    <v-img :src="`${n.img}`" 
        :alt="n.title" height="100%"  >
        <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out v-card--reveal "
              style="height: 100%;"
            >
           <div>ФОРМАТ ПРОВЕДЕНИЯ ТУРНИРА</div>
            <div>{{n.format}}</div>
             <div>Способ соревнования: 5 на 5</div>
             <div>Жанр игры : {{ n.genre }}</div>
             <div></div>
             
            </div>
          </v-expand-transition>
    </v-img>
  </v-card>
</v-hover>
      </v-col>
    </v-row>
    </v-container>
  </div>


  <div class="games">
    <h3>Партнеры</h3>
  <v-container >
    <v-row >
      <v-col v-for="img in images" :key="img.text" cols="12" sm="4">
        <a :href="img.src">
        <v-card color="#161616" class="d-flex flex-column align-center" hover >
        <v-container class="d-flex flex-column align-center pa-5">
        
        <v-avatar size="150" class="avater">
            <v-img alt="" :src="img.path" ></v-img>
          </v-avatar>
          
        </v-container>
        
        <v-card-title  ><v-divider
  :thickness="6"
  class="border-opacity-75"
  color="rgba(218, 10, 190, 0.9)"
></v-divider> {{img.text}}</v-card-title>
        </v-card>
      </a>
      </v-col>
    </v-row>

  </v-container>

  </div>
  <div class="games"><h3>Примите участие в нашем турнире и получите незабываемые эмоции!</h3></div>
  </div>
  
 
</template>

<style scoped>
a{
    text-decoration: none;
}

.v-card--reveal {
  flex-direction: column;
  background: #47033cad;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
.card{
  text-align: center;
}
h1{
  font-size: 50px;
}
h2{
  font-size:30px;
}
h3{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size:25px;
}
.games:hover{
  box-shadow: 0px 0px 20px 15px rgba(218, 10, 190, 0.9);
}
.avater:hover{
  box-shadow: 0px 0px 20px 15px rgba(218, 10, 190, 0.9);
}
.games{
  background: #e009bc67;
  border: solid;
  box-shadow: 0px 0px 10px 5px rgba(218, 10, 190, 0.9);
 
  border-color: #d81da9;
  margin-bottom: 50px;
}
p{
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;

}
@media  (min-width: 500px) {
.container {
margin: 0px 50px 0px 50px;
}
}
@media  (max-width:700px) {

.container {
margin: 0px 15px 0px 15px;;
}
}

</style>
<script setup>

var games = [
  {
    title:'CS 2',
    img:'https://3dnews.ru/assets/external/illustrations/2023/03/22/1083857/0.jpg',
    genre:'Тактический шутер',
    format:'Олимпийская система (Single-elimination tournament)',
  
    text:'Более двух десятилетий Counter-Strike служит примером первоклассной соревновательной игры, путь развития которой определяют миллионы игроков со всего мира. Теперь пришло время нового этапа — Counter-Strike 2.'
  },
  {
    title:'DOTA 2',
    img:'https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1710346933',
    genre:'MOBA',
    format:'Олимпийская система (Single-elimination tournament)',
    text:'Ежедневно миллионы игроков по всему миру сражаются от лица одного из более сотни героев Dota 2, и даже после тысячи часов в ней есть чему научиться. Благодаря регулярным обновлениям игра живёт своей жизнью: геймплей, возможности и герои постоянно преображаются.'
  },
  {
    title:'VALORANT',
    img:'https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg',
    genre:'Тактический шутер',
    format:'Олимпийская система (Single-elimination tournament)',
    text:'Играйте В PUBG: BATTLEGROUNDS бесплатно. Высаживайтесь в стратегически важных местах, добывайте оружие и припасы и постарайтесь выжить и остаться последней командой на одном из многочисленных полей боя.'
  },
  {
    title:'LEAGUE of LEGENDS',
    img:'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b',
    genre:'MOBA',
    format:'Олимпийская система (Single-elimination tournament)',
    text:'Многопользовательская компьютерная игра в жанре MOBA, разработанная и выпущенная американской компанией Riot Games в 2009 году для платформ Microsoft Windows и macOS. Игра была разработана по образу и подобию DotA — пользовательской карты для Warcraft III.'
  },

]
var images = [
    {
      path: 'https://media-cdn.tripadvisor.com/media/photo-s/13/2a/f1/cd/caption.jpg',
      text: 'DODO PIZZA',
      src:'https://dodopizza.ru/'
      
    },
    {
      path: 'https://www.retail.ru/upload/iblock/b58/c2e297606bb433856a8ee7f2f33ee8e8.jpg',
      text: 'DNS',
     src:'https://www.dns-shop.ru/?utm_medium=organic&utm_source=google&utm_referrer=https%3A%2F%2Fwww.google.com%2F'
    },

    {
      path: 'https://taplink.st/a/c/6/3/6/83ffb5.png?1',
      text: 'COLIZEUM',
      src:'https://vk.com/colizeumarena'
    },
  ]
</script>


