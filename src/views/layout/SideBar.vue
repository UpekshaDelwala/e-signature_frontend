<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
name: "SideBar"
})
</script>

<template>
<!--  <aside class="sidebar" :class="{ 'sidebar-hidden': !sidebarVisible && isMobile }">-->
  <v-navigation-drawer>

    <v-divider></v-divider>
    <v-list-item link title="Dashboard"></v-list-item>
    <v-list-item link title="Pending"></v-list-item>
    <v-list-item link title="Approved"></v-list-item>
    <v-list-item link title="Declined"></v-list-item>
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