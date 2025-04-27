<script lang="ts">
import {defineComponent} from 'vue'
import NavBar from './NavBar.vue';
import SideBar from "@/views/layout/SideBar.vue";

export default defineComponent({
  name: "MainLayout",
  components:{
    NavBar,
    SideBar
  }
})
</script>

<template>
<!--  <nav-bar></nav-bar>-->
<!--  <side-bar></side-bar>-->
<!--  <div>-->
<!--    <router-view></router-view>-->
<!--  </div>-->

  <v-layout class="rounded rounded-md border">
    <nav-bar></nav-bar>
    <side-bar></side-bar>

    <v-main class="d-flex align-center justify-center" height="300">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>

</template>

<style scoped>

</style>