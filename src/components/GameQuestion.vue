<template>
  <h2>esto es una game question</h2>
  <div>
    <p>{{ userStore.name }}</p>
    <p>Puntaje: {{ quizStore.score }}</p>
  </div>
  <div>
    <!-- <audio :src="quizStore.currentQuestion.src" controls autoplay></audio> -->
    <p>{{ currentQuestion.pregunta }}</p>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useQuizStore } from "../stores/quizStore";
import { useUserStore } from "../stores/userStore";

const quizStore = useQuizStore();
const userStore = useUserStore();

const currentQuestion = computed(() => quizStore.questions[quizStore.currentQuestionIndex])


function checkAnswer() {
  // Lógica para verificar la respuesta seleccionada
}
</script>
