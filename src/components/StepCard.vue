<template>
    <div class="ejemplo">
        <div class="iconBg" :style="{ backgroundColor: color }">
        <img :src="logoSrc" alt="" /></div>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
    </div>
</template>
<script setup>
defineProps({
    logoSrc: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false,
        default: '#FFFFFF'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
    
})

</script>
<style scoped>
.ejemplo {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    max-width: 300px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.iconBg {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px auto;
}
</style>