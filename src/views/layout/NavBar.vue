<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavBar",
  methods:{
    handleLogout() {
      alert('Logged out!');
    },
  }
})
</script>

<template>
  <v-app-bar title="DirectSign">
    <v-btn>LogOut</v-btn>
  </v-app-bar>

</template>

<style scoped>

</style>