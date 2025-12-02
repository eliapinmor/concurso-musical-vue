# Concurso Musical - Vue 3

Aplicación web desarrollada con **Vue 3 + Pinia + Vue Router + Vite**, que simula un concurso musical en el que el usuario puede iniciar sesión, responder preguntas musicalizadas, ver su puntaje y consultar un ranking general.

## 🚀 Características principales

Doy 10 segundos de canción para que la pueda escuchar y luego dos segundos extra (un total de 12s) para adivinar la canción. Si se responde correctamente, se muestra en verde y se suman 10 puntos. Si se responde incorrectamente se muestra en rojo la opción marcada por el usuario y en verde la correcta, se restan 5 puntos. Si se acaba el tiempo que tiene para contestar se muestra en verde la opción correcta y se mantiene la puntuación igual.

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

