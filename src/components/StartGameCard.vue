<template>
    <div>
        <img class="trofeo-img" src="/public/icons/trofeo.png" alt="Trophy Icon" />
        <h3>¿Listo para el desafío?</h3>
        <h2>Demuestra que eres un experto musical y alcanza el top del ranking</h2>
        <ButtonGame content="Empezar"/>
    </div>
</template>
<script setup>
import ButtonGame from './ButtonGame.vue';

</script>
<style scoped>
/* .trofeo-img {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
}

div {
    text-align: center;
    background-color: #f0f0f0;
    width: 60%;
    margin: auto;
} */

 div {
  text-align: center;
  background-color: white;
  padding: 40px 20px;
  width: 70%;
  max-width: 700px;
  margin: 60px auto;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.trofeo-img {
  width: 90px;
  height: 90px;
  margin-bottom: 16px;
}

h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #6a0dad;
}

h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 12px 0 24px;
  color: #333;
}

</style>
