<script  setup lang="ts">
import {ref} from 'vue';
import { RouterLink } from 'vue-router';

    let isActive =ref(false)
</script>


<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          
      
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/user" class="navbar-item">
              Your Workouts
            </router-link>
      
            <router-link to="/" class="navbar-item">
              Friends Workouts
            </router-link>

            <router-link to="/stats" class="navbar-item">
              Stats
            </router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Admin
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Users
                </a>
                
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

</template>