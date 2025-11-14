<template>
  <header>
    <div class="nav">
      <div>

      </div>
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/game">Game</RouterLink>
        <RouterLink to="/ranking">Ranking</RouterLink>
      </div>
      <!-- <div>
        <NavBarElement />
      </div> -->
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import NavBarElement from "./NavBarElement.vue";
</script>
