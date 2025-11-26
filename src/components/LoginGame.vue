<template>
  <div>
    <h2>¡Adivina la canción!</h2>
    <div class="login">
      <div style="width: 500px;">
        <p>1. Introduce tu usuario</p>
        <p>2. Escucha la canción durante 5s</p>
        <p>3. Adivina el máximo de canciones posibles</p>
      </div>
      <div>
        <h2>Introduce tu nombre</h2>

        <input v-model="tempName" />

        <button @click="saveName">Empezar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useQuizStore } from "@/stores/quizStore";

const userStore = useUserStore();
const tempName = ref("");
const quizStore = useQuizStore();

function saveName() {
  if (tempName.value.trim().length === 0) return;
  userStore.setName(tempName.value);
  quizStore.startGame();
}
</script>
<style scoped>
.login {
  display: flex;
}
</style>
