<template>
    <ul>
      <li v-for="(item, index) in ranking" :key="index">
        {{ item.jugador }} — {{ item.score }} puntos
      </li>
    </ul>
</template>
<script setup>

import { showOrderedRanking10Elements } from "@/assets/ranking.js";
const ranking = showOrderedRanking10Elements();
console.log(ranking);
</script>