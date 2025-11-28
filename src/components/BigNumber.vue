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
/* .content {
    text-align: center;
    margin: 20px;
} */

 .content {
  text-align: center;
  margin: 10px 20px;
}

.content h2 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 6px;
}

.content h3 {
  font-size: 1rem;
  font-weight: 400;
}

</style>
