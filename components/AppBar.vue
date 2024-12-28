<template>
    <v-container   >
      <v-app-bar :elevation="5" color="#e009bc67" >
        
        
        <v-app-bar-title class="app_bar hidden-sm-and-down"><strong>CYTECH CYBERCUP</strong> <v-icon color="rgb(214, 193, 3) " class="mdi mdi-trophy"></v-icon></v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-slot:prepend >
        <v-app-bar-nav-icon class="hidden-md-and-up"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        </template>
       <div class="hidden-sm-and-down ">
        <v-btn density="default" class="mx-10  " to="/" selected-class="aa">Главная</v-btn>
        <v-btn density="default" class="mx-10 " to="/tornamentbracket">Сетка</v-btn>
        <v-btn density="default" class="mx-10 " to="teams">Команды</v-btn>
       </div>
       <v-icon color="rgb(214, 193, 3) " class="  mdi mdi-trophy prize  hidden-md-and-up "></v-icon>
       <div>

        <span class="d-none d-sm-flex d-md-none"><strong>CYTECH CYBERCUP</strong> </span>

        </div>
    <v-spacer></v-spacer>
    

      <v-btn @click="isHidden=true, isAuthorised=true,updateAuthorisation(isAuthorised)" v-if="!isHidden" size="large" rounded="lg" variant="tonal"  :to="'/'">ВОЙТИ <v-icon class="mdi mdi-login"></v-icon></v-btn>
      <div v-if="isHidden" class="mr-2 bg">
        <v-avatar  size="45" class="mr-5 avatar ma-1 " >
      <v-img
        alt="John"
        src="https://cdn.vuetifyjs.com/images/john.jpg"
      ></v-img>
      
    </v-avatar> 
    <v-icon icon="mdi mdi-menu-down" @click="drawer_profile = !drawer_profile"></v-icon>
      </div>
    

      </v-app-bar>
      <v-navigation-drawer class="nd rounded-b-lg " style="height: 165px;" v-model="drawer" location="left" temporary>
        <v-list >
         <v-list-item v-for="(item,i) in items" :key="i" :to="item.routes">
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
         </v-list>
      </v-navigation-drawer>




      <v-navigation-drawer class="rounded-b-lg " style="height:120px;  background: #e009bc67;" v-model="drawer_profile" location="right" temporary>
        <v-list  >
         <v-list-item  >
          <v-list-item-title >Профиль <v-icon icon=" mdi mdi-account"></v-icon></v-list-item-title>
        </v-list-item>
        <v-list-item  @click="isHidden=!isHidden ,drawer_profile = !drawer_profile,isAuthorised=false,updateAuthorisation(isAuthorised) " :to="'/'">
          <v-list-item-title  >Выход  <v-icon icon="mdi mdi-logout"></v-icon></v-list-item-title>
        </v-list-item>
         </v-list>
      </v-navigation-drawer>
    </v-container>
</template>
<style>
</style>
<style scoped >
.bg{
  background: #ada2af4d;
  border-radius: 23px;
 
}
.avatar{
  border-color: #e009bc67;
  box-shadow: 0px 0px 10px 5px rgba(192, 3, 240, 0.9);}
.app_bar{
 
  flex: none;
}
.btn{
  background: #4d0c42;
  min-width: 120px;
}
.nd{
 background: #4d0c42;
}


</style>
<script setup >

import { reactive, ref } from 'vue'
var isHidden = ref(false)
var isAuthorised=ref(false)
const emit=defineEmits(['isAuthorised'])
const updateAuthorisation = (isAuthorised)=>{
  emit('isAuthorised',isAuthorised)
}
</script>
<script >


export default {
    data: () => ({
      drawer: false, loading: false,drawer_profile: false,
      items: [
        {
          title: 'Главная',
          value: '1',
          routes:'/'
        },
        {
          title: 'Сетка',
          value: '2',
          routes:'/tornamentbracket'
        },
        {
          title: 'Команды',
          value: '3',
          routes:'/teams'
        },
      ],
      
    }),
    
  }
</script>
