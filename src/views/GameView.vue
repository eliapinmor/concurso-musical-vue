<template>
  <LoginGame v-if="!userStore.name" />

  <GameQuestion v-else/>
</template>
<script setup>
import GameQuestion from "../components/GameQuestion.vue";
import LoginGame from "../components/LoginGame.vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
</script>