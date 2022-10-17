<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavVue from './components/Nav.vue';
</script>

<template>
  <header>
    
    <NavVue />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
