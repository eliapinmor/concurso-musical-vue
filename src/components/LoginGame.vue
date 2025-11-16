<template>
  <div>
    <h2>¡Adivina la canción!</h2>
    <div class="login">
      <div style="width: 500px;">
        <p>1</p>
        <p>2</p>
        <p>3</p>
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

const userStore = useUserStore();
const tempName = ref("");

function saveName() {
  if (tempName.value.trim().length === 0) return;
  userStore.setName(tempName.value);
}
</script>
<style scoped>
.login {
  display: flex;
}
</style>
