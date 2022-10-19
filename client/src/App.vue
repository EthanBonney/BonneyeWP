<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavVue from './components/nav.vue';
import WorkoutsView from './views/WorkoutsView.vue';
</script>

<template>
  <header>
    
    <NavVue />
  </header>

  <div class="container">
    <WorkoutsView />
  </div>

  <RouterView />
</template>

<style scoped>

</style>
