<template>
  <div v-if="auth===true" class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
    
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-plus"
          text="Добавить команду"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        prepend-icon="mdi-note-text"
        title="Заполнение данных новой команды"
      >
      <v-form v-model="form" >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="12"
              sm="12"
            >
              <v-text-field
              clearable
              v-model="nameTeam"
                label="Название Команды"
               
                :rules="[required]"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="12"
              sm="12"
            >
              <v-text-field
              clearable
                v-model="playersTeam"
                label="Игроки"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12"  sm="12" >
               <v-text-field 
              clearable
                v-model="imgTeam"
                label="Логотип Команды"
                
                :rules="[required]"
              ></v-text-field> 
             <!-- <v-file-input accept="image/*" label="Логотип Команды " prepend-icon="mdi-camera"></v-file-input> -->
          </v-col> 
            
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Выйти"
            color="red"
            variant="elevated"
            @click="dialog = false, clearValues()"
          ></v-btn>

          <v-btn
          :disabled="!form"
            color="success"
            text="Сохранить"
            variant="elevated"
            @click="saveTeam(nameTeam,playersTeam,imgTeam),addCard(team),dialog = false,clearValues()"
            id="custom-disabled"
          ></v-btn>
        </v-card-actions>
      </v-form>
      </v-card>
    
    </v-dialog>
  </div>

    <v-row >
      <v-col v-for="(item,index) in props.game" :key="item.name" cols="12" lg="6">
        <v-hover v-slot="{ isHovering, props }" open-delay="250">
          <v-container class="">
        <v-card color="#161616" class="d-flex flex-column align-center games  " hover  v-bind="props" :style="bg" >
        <v-container class="d-flex flex-column align-center pa-5" >
        <v-card-title >{{ item.name }} <v-icon v-if="auth===true" @click="updateCard(index)" class="mdi mdi-delete new"></v-icon></v-card-title>
    <v-avatar size="300" rounded="xl" class="img" >
        <v-img alt="ytne" :src="item.path"  ></v-img>
    </v-avatar>
    
       
        
        <v-expand-transition>
            
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out  expand">
              
              <div><strong>Players: </strong>{{ item.team }}</div>
            
            </div>
          </v-expand-transition>
        </v-container>
        </v-card>
      </v-container>
        </v-hover>
        
      </v-col>
    </v-row>
</template>
<script setup >
import { ref } from 'vue'
var dialog =ref(false);
var team ={
  name :"",
  team:"",
  path:""
}
var form =ref(false)
var playersTeam=ref('');
var nameTeam=ref('');
var imgTeam=ref('');
const props = defineProps(['game','bg','authorised'])
var auth=ref(props.authorised)
const emit=defineEmits(['deleteCard','newCard'])
const updateCard =(index)=>{
  emit('deleteCard',index)
}
const addCard =(team)=>{
  emit('newCard',team)
}
function required(v){
  return !!v || 'Field is required'
}
function  clearValues(){
  playersTeam.value='';
  nameTeam.value='';
  imgTeam.value='';
}
function saveTeam(nameTeam,playersTeam,imgTeam){
  team.name=nameTeam;
  team.team=playersTeam;
  team.path=imgTeam;
}
</script>
<style scoped>
.new{
  position: absolute;
  top: 20px;
  right: 20px;
}
.img{
  background-image: url(https://pibig.info/uploads/posts/2022-08/thumbs/1659399227_4-pibig-info-p-krutoi-fioletovii-fon-krasivo-4.png);
 
  border: solid;
  border-color: #e009bc67;
  margin-bottom: 20px;
}
.img:hover{
  box-shadow: 0px 0px 10px 5px rgba(192, 3, 240, 0.9);
  
}
.games{
  border: solid;
  box-shadow: 0px 0px 10px 5px rgba(192, 3, 240, 0.9);
 
  border-color: #d81da9;
}
</style>
<style>
#custom-disabled.v-btn--disabled {
    background-color: rgba(230, 221, 221, 0.418) !important;
}
</style>