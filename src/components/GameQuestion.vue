<template>
  <h2>esto es una game question</h2>
  <div>
    <p>{{ userStore.name }}</p>
    <p>Puntaje: {{ quizStore.score }}</p>
  </div>
  <div>
    <!-- <audio :src="quizStore.currentQuestion.src" controls autoplay></audio> -->
    <p>{{ currentQuestion.pregunta }}</p>
    <!-- <p>{{ currentQuestion.src }}</p> -->
    <div>
      <button
        v-for="op in shuffledOptions"
        :key="op"
        @click="checkAnswer(op)"
      >
        {{ op }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useQuizStore } from "../stores/quizStore";
import { useUserStore } from "../stores/userStore";

const quizStore = useQuizStore();
const userStore = useUserStore();

const currentQuestion = computed(
  () => quizStore.questions[quizStore.currentQuestionIndex]
);

const shuffledOptions = computed(() => {
  if (!currentQuestion.value) return [];
  return [...currentQuestion.value.opciones].sort(() => Math.random() - 0.5);
});

function checkAnswer(option) {
  const isCorrect = option === currentQuestion.value.respuesta;
  quizStore.answerQuestion(isCorrect)
}

</script>
