<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavVue from './components/nav.vue';
</script>

<template>
  <header>
    
    <NavVue />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
