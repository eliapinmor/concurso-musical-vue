import { createRouter, createWebHistory } from "vue-router";
import { stopSong } from "@/assets/songPlayer.js";

const LandingView = () => import("@/views/LandingView.vue");
const GameView = () => import("@/views/GameView.vue");
const RankingView = () => import("@/views/RankingView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "landing", component: LandingView },
    { path: "/game", name: "game", component: GameView },
    { path: "/ranking", name: "ranking", component: RankingView },
  ],
});

router.beforeEach((to, from, next) => {
  // Si estás saliendo del juego → para la música
  if (from.path === "/game") {
    stopSong();
  }
  next();
});

export default router;
