<template>
<RouterLink :to="route" class="btn">
  {{ content }}
</RouterLink>
</template>
<script setup>
defineProps({
    bgColor: {
        type: String,
        default: 'blue'
    },
    textColor: {
        type: String,
        default: 'white'
    },
    content: {
        type: String,
        default: 'Comenzar a2 Jugar'
    },
    route: {
        type: String,
        default: '/game'
    }
})
</script>
<style scoped>
.btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    background-color: var(--bgColor);
    color: var(--textColor);
    transition: background-color 0.3s ease;
}
</style>