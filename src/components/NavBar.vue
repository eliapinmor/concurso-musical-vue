<template>
  <header>
    <div class="navbar">
      <div class="nav-container">
        <div class="links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/game">Game</RouterLink>
          <RouterLink to="/ranking">Ranking</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
/* CONTENEDOR GENERAL DEL NAVBAR */
.navbar {
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 14px 0;
  font-family: "Inter", sans-serif;
}

/* CONTENEDOR INTERNO (CENTRADO) */
.nav-container {
  max-width: 1100px;
  margin: auto;
  padding: 0 24px;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* CONTENEDOR LINKS */
.links {
  display: flex;
  gap: 28px;
}

/* ESTILO BASE DE ENLACES */
.links a {
  text-decoration: none; /* Sin subrayado */
  font-size: 1rem;
  font-weight: 500;
  color: #5a5a5a;

  padding: 8px 14px;
  border-radius: 10px;

  transition: background-color 0.25s ease, color 0.25s ease,
    transform 0.2s ease;
}

/* EFECTO HOVER */
.links a:hover {
  background-color: #f2e2ff;
  color: #6a0dad;
}

/* LINK ACTIVO (ruta actual) */
.router-link-active {
  background-color: #6a0dad !important;
  color: white !important;
  font-weight: 600;
}

/* EFECTO CLICK */
.links a:active {
  transform: scale(0.96);
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .links {
    gap: 16px;
  }

  .links a {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
}

</style>
