<template>
    <ul>
      <li v-for="(item, index) in ranking" :key="index">
        {{ index +1 }}. {{ item.jugador }} — {{ item.score }} puntos
      </li>
    </ul>
</template>
<script setup>

import { showOrderedRanking10Elements } from "@/assets/ranking.js";
const ranking = showOrderedRanking10Elements();
console.log(ranking);
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
}

li {
  background: white;
  padding: 16px 20px;
  margin-bottom: 12px;

  border: 2px solid #e8d9ff;
  border-radius: 12px;

  font-size: 1.2rem;
  color: #4b0082;
  font-weight: 600;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.15s ease, background-color 0.2s ease;
}

li:hover {
  transform: translateY(-3px);
  background-color: #f6edff;
}

/* 🥇 Primer lugar */
li:nth-child(1) {
  border-color: #ffd700;
  background-color: #fff8d6;
}

/* 🥈 Segundo lugar */
li:nth-child(2) {
  border-color: #c0c0c0;
  background-color: #f3f3f3;
}

/* 🥉 Tercer lugar */
li:nth-child(3) {
  border-color: #cd7f32;
  background-color: #fff2e6;
}

/* Usuario | Puntos alineados */
li span {
  font-weight: 700;
  color: #6a0dad;
}

</style>