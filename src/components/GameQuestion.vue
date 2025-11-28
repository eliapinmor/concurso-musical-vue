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
        @click="checkAnswer(op, $event)"
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

function checkAnswer(option, event) {
  // const isCorrect = option === currentQuestion.value.respuesta;
  // quizStore.selectedAnswer = option;
  // quizStore.answerQuestion(isCorrect);
  const button = event.target;
  if (quizStore.blocked) return;

  if (option === currentQuestion.value.respuesta) {
    quizStore.blocked = true;
    button.style.backgroundColor = "green";
    quizStore.answerQuestion(true);
  } else {
    quizStore.blocked = true;
    button.style.backgroundColor = "red";
    quizStore.answerQuestion(false);
  }
}
</script>
<style scoped>
/* TÍTULO */
h2 {
  text-align: center;
  color: #6a0dad;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
}

/* INFO DEL USUARIO Y PUNTOS */
div > p {
  text-align: center;
  margin: 4px 0;
  color: #444;
  font-size: 1rem;
}

/* PREGUNTA */
div > p:nth-of-type(3) {
  font-size: 1.3rem;
  font-weight: 600;
  color: #4b0082;
  margin: 20px 0;
}

/* CONTENEDOR DE BOTONES */
div > div {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
}

/* BOTONES DE RESPUESTAS */
button {
  background-color: white;
  border: 2px solid #d8c3ff;
  color: #4b0082;
  padding: 14px;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.25s ease,
              transform 0.15s,
              border-color 0.25s;
}

button:hover {
  background-color: #f3e6ff;
  transform: scale(1.02);
}

button:active {
  transform: scale(0.98);
}

/* COLORES QUE TÚ CAMBIAS CON JS:
   - verde: correcto
   - rojo: incorrecto 
(no hace falta estilo extra aquí) */
</style>