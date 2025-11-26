<template>
  <div>
    <!--centrar-->
    <h1>¿Cuánto sabes de música?</h1>
    <h4>
      Pon a prueba tu conocimiento musical. Escucha fragmentos de 5 segundos y
      adivina la canción correcta entre 4 opciones. ¡Compite por las mejores
      puntuaciones!
    </h4>
  </div>
  <div>
    <ButtonGame />
    <ButtonGame content="Go to ranking" route="/ranking" />
  </div>
  <div class="imgBg">
    <img src="/icons/audio.png" alt="Imagen Principal" />
  </div>
</template>
<script setup>
import ButtonGame from "./ButtonGame.vue";
import ButtonRanking from "./ButtonRanking.vue";
</script>
<style scoped>
.imgBg {
  background-color: blueviolet;
  border-radius: 50%;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
}

.imgBg img {
  width: 150px;
  height: 150px;
}
</style>
