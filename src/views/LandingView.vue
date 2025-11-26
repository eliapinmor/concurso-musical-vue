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
/* .steps {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.big-numbers {
  background-color: blueviolet;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
} */

 section {
  padding: 60px 20px;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 16px;
  color: #4b0082;
}

h4 {
  text-align: center;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 40px;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.big-numbers {
  background-color: #6a0dad;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
  border-radius: 16px;
}

section:last-of-type {
  text-align: center;
  padding: 60px 20px;
}

</style>
