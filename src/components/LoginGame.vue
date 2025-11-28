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
/* .login {
  display: flex;
} */
 div {
  text-align: center;
  font-family: "Inter", sans-serif;
}

h2 {
  color: #6a0dad;
  font-weight: 700;
  margin-bottom: 8px;
}

.login {
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
}

.login p {
  text-align: left;
  margin: 6px 0;
  color: #444;
}

input {
  width: 240px;
  padding: 10px 12px;
  border: 2px solid #d8c3ff;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  margin-bottom: 16px;
}

input:focus {
  border-color: #6a0dad;
}

button {
  background-color: #6a0dad;
  color: white;
  font-size: 1rem;
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.25s;
}

button:hover {
  background-color: #4b0082;
}

</style>
