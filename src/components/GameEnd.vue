<template>
  <p>juego terminado</p>
  <p>Tu puntaje final es: {{ quizStore.score }}</p>
  <div v-if="quizStore.score == 100">
    <p>¡Lo has hecho fantástico!</p>
  </div>
  <div v-else-if="quizStore.score >= 70">
    <p>¡Buen trabajo!</p>
  </div>
  <div v-else-if="quizStore.score >= 50">
    <p>¡Puedes hacerlo mejor!</p>
  </div>
  <div v-else>
    <p>¡Sigue practicando!</p>
  </div>
  <button @click="quizStore.startGame()">Volver a jugar</button>
  <ButtonGame route="/ranking" content="Ver el Ranking" />
</template>
<script setup>
import ButtonGame from "@/components/ButtonGame.vue";
import { useQuizStore } from "@/stores/quizStore";
const quizStore = useQuizStore();
</script>
