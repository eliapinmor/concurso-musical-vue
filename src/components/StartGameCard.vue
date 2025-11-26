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
.trofeo-img {
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
}
</style>
