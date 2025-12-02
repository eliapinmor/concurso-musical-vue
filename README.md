# Concurso Musical - Vue 3

Aplicación web desarrollada con **Vue 3 + Pinia + Vue Router + Vite**, que simula un concurso musical en el que el usuario puede iniciar sesión, responder preguntas musicalizadas, ver su puntaje y consultar un ranking general.

## 🚀 Características principales

- 🎵 **Reproducción de fragmentos de canciones** para preguntas (controlado por `songPlayer.js`).
- ❓ **Sistema de preguntas y respuestas** con manejo de estado global mediante **Pinia** (`quizStore.js`).
- 🏆 **Ranking Top 10** con datos locales (`ranking.js` y `RankingTop10.vue`).
- 👤 **Inicio de sesión básico** para jugadores (`LoginGame.vue` + `userStore.js`).
- 📱 **Interfaz dinámica y modular** con componentes reutilizables.
- 🔀 **Ruteo completo** con vistas para Juego, Landing y Ranking.
- ⚡ Empaquetado y desarrollo rápido con **Vite**.

## 📁 Estructura del proyecto

```
src/
 ├─ assets/
 │   ├─ data/            # archivo data.json con preguntas del juego
 │   ├─ ranking.js       # ranking de ejemplo
 │   └─ songPlayer.js    # lógica de reproducción musical
 ├─ components/          # componentes UI del juego
 ├─ stores/              # Pinia stores (usuario y quiz)
 ├─ views/               # Landing, Juego y Ranking
 ├─ router/              # configuración de Vue Router
 ├─ App.vue
 └─ main.js
```

## 🧩 Componentes Clave

### **GameQuestion.vue**
Renderiza cada pregunta del juego, muestra opciones y controla el avance del quiz.

### **GameEnd.vue**
Pantalla final que muestra puntaje, tiempo y opciones de reinicio.

### **RankingTop10.vue**
Tabla con los 10 mejores puntajes.

### **LoginGame.vue**
Formulario simple para identificación del jugador.

### **NavBar.vue**
Navegación entre vistas principales.

## 🗃️ State Management (Pinia)

### **quizStore.js**
- Controla:
  - Preguntas
  - Estado del juego (inicio, progreso, fin)
  - Puntaje
  - Tiempo
  - Respuestas correctas/incorrectas

### **userStore.js**
- Almacena información básica del jugador:
  - nombre
  - puntaje final

## 🔊 Lógica de reproducción musical

En `assets/songPlayer.js` se maneja:
- Creación del objeto `Audio`
- Control de play/stop
- Sincronización con preguntas

## 🔧 Instalación

```sh
npm install
```

## ▶️ Ejecutar en modo desarrollo

```sh
npm run dev
```

## 📦 Construir para producción

```sh
npm run build
```

## 📌 Requisitos

- Node 16+
- Navegadores modernos compatibles con ES Modules

## 👨‍💻 Autor
Proyecto base adaptado para un concurso musical con Vue 3.

---

Si deseas mejorar este README o agregar capturas, documentación de componentes o diagramas, puedo ayudarte.
