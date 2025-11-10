import { createRouter, createWebHistory } from "vue-router";

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

export default router;
