<template>
  <header>
    <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/game">Game</RouterLink>
        <RouterLink to="/ranking">Ranking</RouterLink>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
