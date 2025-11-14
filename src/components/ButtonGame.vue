<template>
<RouterLink to="/game" class="btn">
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
    }
})
</script>
<style scoped></style>