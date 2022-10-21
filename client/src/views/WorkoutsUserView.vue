<script setup lang ="ts">
import userWorkout from '../components/userWorkouts.vue'
import session  from '../stores/Users'
</script>

<template>
  <div class="Workouts">
    <h1 class = "title">Your Workouts</h1>
    <div >
    <userWorkout></userWorkout>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
