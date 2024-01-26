import { createRouter, createWebHistory } from "vue-router";

import LevelsPage from "../pages/LevelsPage.vue";
import LevelPage from "../pages/LevelPage.vue";
import QuestionPage from "../pages/QuestionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Levels",
      component: LevelsPage,
    },
    {
      path: "/level/:levelKey",
      name: "Level",
      component: LevelPage,
    },
    {
      path: "/level/:levelKey/question/:questionKey",
      name: "Question",
      component: QuestionPage,
    },
  ],
});

export default router;
