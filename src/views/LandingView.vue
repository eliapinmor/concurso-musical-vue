<template>
  <section>
    <VistaPrincipal />
  </section>
  <section>
    <h2>¿Cómo funciona?</h2>
    <h4>
      Un juego simple pero adictivo que pondrá a prueba tus conocimientos
      musicales
    </h4>
    <div class="steps">
      <StepCard
        logoSrc="/icons/musica.png"
        color="#eedcff"
        title="Paso 1: Escucha"
        content="Escucha un fragmento de 5 segundos de una canción seleccionada aleatoriamente."
      />
      <StepCard
        logoSrc="/icons/objetivo.png"
        color="#fdd8ec"
        title="Paso 2: Adivina"
        content="Elige la canción correcta entre 4 opciones posibles antes de que se acabe el tiempo."
      />
      <StepCard
        logoSrc="/icons/corona.png"
        color="#ffdfb7"
        title="Paso 3: Puntúa"
        content="Gana puntos por cada respuesta correcta y compite por las mejores puntuaciones en el ranking."
      />
    </div>
  </section>
  <section>
    <div class="big-numbers">
      <BigNumber number="5000" label="Canciones en la base de datos" />
      <BigNumber number="1200" label="Usuarios registrados" />
      <BigNumber number="300" label="Partidas jugadas hoy" />
    </div>
  </section>
  <section>
    <StartGameCard />
    </section>
</template>
<script setup>
import VistaPrincipal from "@/components/VistaPrincipal.vue";
import StepCard from "../components/StepCard.vue";
import BigNumber from "../components/BigNumber.vue";
import StartGameCard from "@/components/StartGameCard.vue";
</script>
<style scoped>
.steps {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.big-numbers {
  background-color: blueviolet;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
</style>
