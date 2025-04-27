<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
name: "SideBar"
})
</script>

<template>
<!--  <aside class="sidebar" :class="{ 'sidebar-hidden': !sidebarVisible && isMobile }">-->
  <v-navigation-drawer>
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>
<!--  <aside class="sidebar" :class="{ 'sidebar-hidden': !sidebarVisible && isMobile }">-->
<!--    <ul>-->
<!--      <li>-->
<!--        <router-link to="/" :class="{ active: $route.name === 'BusinessLetter' }">Dashboard</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/add-signature" :class="{ active: $route.name === 'AddSignature' }">E-Sign</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/history" :class="{ active: $route.name === 'History' }">History</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/signature-model" :class="{ active: $route.name === 'SignatureModel' }">Signature Model</router-link>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <div class="sidebar-footer">-->
<!--      <span class="settings-icon">⚙️</span>-->
<!--    </div>-->
<!--  </aside>-->
</template>

<style scoped>

</style>