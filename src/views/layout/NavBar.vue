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
  <v-app-bar title="Application bar">
    <v-btn>test</v-btn>
  </v-app-bar>

</template>

<style scoped>

</style>