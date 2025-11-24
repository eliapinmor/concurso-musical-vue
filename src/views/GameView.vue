<template>
  <LoginGame v-if="!userStore.name" />

  <div v-else-if="!quizStore.isFinished"><GameQuestion /></div>
  <div v-else>
    <GameEnd />
  </div>

</template>
<script setup>
import GameQuestion from "../components/GameQuestion.vue";
import LoginGame from "../components/LoginGame.vue";
import GameEnd from "../components/GameEnd.vue";
import { useUserStore } from "../stores/userStore";
import { useQuizStore } from "../stores/quizStore";


const userStore = useUserStore();
const quizStore = useQuizStore();

</script>