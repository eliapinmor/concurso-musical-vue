<template>
    <p>juego terminado</p>
    <p>Tu puntaje final es: {{ quizStore.score }}</p>
    
    </template>
<script setup>
import { useQuizStore } from "@/stores/quizStore";
const quizStore = useQuizStore();
</script>