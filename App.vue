<template>
  <v-app light>
    <AppBar  @isAuthorised="updateAuthorisation" />
    <v-main >
      <RouterView :authorised="authorised"></RouterView>
    </v-main>
   <AppFooter></AppFooter>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import AppBar from "./components/AppBar.vue"
import AppFooter from "./components/AppFooter.vue"
import { reactive, ref } from "vue";
var authorised=ref(false);
const updateAuthorisation =  (isAuthorised) =>{

  authorised.value=isAuthorised
  
}
</script>
