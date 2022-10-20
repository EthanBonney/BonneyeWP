<script setup lang ="ts">

  const items =[
    {name: 'Run', cost: 30},
    {name: 'Swim', cost:20},
    {name: 'Bike', cost:20}
  ]
</script>

<template>
  <div class="Workouts">
    <h1 class = "title">Friends Workouts</h1>
    <div>
    <p>
    <ul>
      <li v-for="item in items" :key="item.name">
      {{item.name}} lenghts {{item.cost}}
      </li>
    </ul>
  </p>
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
