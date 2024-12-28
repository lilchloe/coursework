<template>
  
    <v-footer class="footer bg">
      <v-spacer></v-spacer>
      <v-row justify='center' no-gutters >
        <span class="mr-10" >Ищите нас в наших соцсетях!</span>
        <div >
          
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" ><img src="/vk.png" alt="no" size="16x16" class="vk icons " ></a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/tg.png" alt="no" size="16x16" class="vk icons" ></a>
      <a href="https://www.youtube.com/watch?v=OxQ0Y5N7QlM"><img src="/tw.png" alt="no" size="16x16" class="vk icons" ></a>
    </div>
    
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>CYTECH CYBERSPORTS</strong>
        </v-col>
      </v-row>
      
      <v-switch  :label="`Переключение темы (Текущая тема :${currentTheme()}) `" inset color="purple-accent-2" base-color="pink-lighten-4" @click="toggleTheme"></v-switch>
    </v-footer>
  </template>

<style scoped>
.icons:hover {
  box-shadow: 0px 0px 5px 5px rgba(218, 10, 190, 0.9);
}
.bg{
  background-color: #e009bc67;
}
.vk{
  margin-right: 20px;
  height: 25px;
  width: 25px;
}

.footer{
    max-height: 90px;
    border-top: solid;
    box-shadow: 0px 0px 10px 5px rgba(218, 10, 190, 0.9);
    border-color: #d81da9;
}

</style>
<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
var currenttheme =''
function currentTheme() {
  if (theme.global.name.value == "light") {
    currenttheme ='Светлая'
    return currenttheme
  }
  else{
    currenttheme ='Темная'
    return currenttheme
  }

}
function toggleTheme() {
  theme.global.name.value =
    theme.global.name.value == "light" ? "dark" : "light";
}
</script>
