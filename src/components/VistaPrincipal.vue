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
</script>
<style scoped>
/* .imgBg {
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
} */


 div:first-of-type {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5rem;
  color: #6a0dad;
  margin-bottom: 16px;
}

h4 {
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

div:nth-of-type(2) {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.imgBg {
  background-color: #6a0dad;
  border-radius: 50%;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.imgBg img {
  width: 150px;
  height: 150px;
}

</style>
