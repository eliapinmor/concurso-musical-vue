<template>
    <div class="content">
        <h2>{{ number }}</h2>
        <h3>{{ label }}</h3>
    </div>
</template>
<script setup>
defineProps({
    number: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})
</script>
<style scoped>
.content {
    text-align: center;
    margin: 20px;
}
</style>
