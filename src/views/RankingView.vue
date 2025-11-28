<template>
  <div>
    <h2>Ranking View</h2>
    <RankingTop10 />
  </div>
</template>
<script setup>
import RankingTop10 from "@/components/RankingTop10.vue";
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
