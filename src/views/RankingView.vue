<template>
  <div>
    <h2>Ranking</h2>
    <div v-if="!hasRanking">
      <p>El ranking está vacío</p>
      <h2>¡Sé el primero en jugar!</h2>
      <ButtonGame route="/game" content="Jugar ahora" bgColor="#6a0dad" />
    </div>
    <div v-else>
      <RankingTop10 />
    </div>
  </div>
</template>
<script setup>
import ButtonGame from "@/components/ButtonGame.vue";
import RankingTop10 from "@/components/RankingTop10.vue";
import { computed } from "vue";


const hasRanking = computed(() => {
  const stored = localStorage.getItem("ranking");
  return stored && JSON.parse(stored).length > 0;
});
</script>
<style scoped>
div {
  text-align: center;
  margin-top: 40px;
  font-family: "Inter", sans-serif;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #6a0dad;
  margin-bottom: 30px;
}
</style>
