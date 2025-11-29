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
  <div style="display: flex; flex-direction: row; align-items: center; gap: 12px; align-content: center;">
  <button @click="quizStore.startGame()">Volver a jugar</button>
  <ButtonGame route="/ranking" content="Ver el Ranking" bgColor="#6a0dad" /></div>
</template>
<script setup>
import ButtonGame from "@/components/ButtonGame.vue";
import { useQuizStore } from "@/stores/quizStore";
const quizStore = useQuizStore();
</script>
<style scoped>
p {
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #444;
}

p:first-of-type {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6a0dad;
}

button {
  border: 3px solid #6a0dad;
  color: rgb(37, 37, 37);
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
}

button:hover {
  background-color: #4b0082;
  color: white;
}

div {
  text-align: center;
  margin-top: 10px;
}
</style>
