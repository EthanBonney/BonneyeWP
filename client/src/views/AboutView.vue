<script setup lang ="ts">

  const items =[
    {name: 'Shoes', cost: 30},
    {name: 'Belt', cost:20},
  ]
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in items" :key="item.name">
      {{item.name}} costs {{item.cost}}
      </li>
    </ul>
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
