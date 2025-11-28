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
/* .ejemplo {
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
} */

.ejemplo {
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 280px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform .2s ease;
}

.ejemplo:hover {
  transform: translateY(-4px);
}

.iconBg {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
}

.iconBg img {
  width: 48px;
  height: 48px;
}

h2 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #4b0082;
}

p {
  font-size: 0.95rem;
  color: #555;
}

</style>