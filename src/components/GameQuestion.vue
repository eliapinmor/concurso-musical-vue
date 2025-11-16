<template>
    <h2> esto es una game question</h2>
    <p>{{userStore.name}}</p>
</template>
<script setup>

import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
</script>