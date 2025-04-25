import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/pages/WelcomePage.vue';
import GamePage from '@/pages/GamePage.vue';
import GamesPage from '@/pages/GamesPage.vue';
import LeaderboardPage from '@/pages/LeaderboardPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import TeamPage from '@/pages/TeamPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/game', component: GamePage,  meta: {requiresAuth: true} },
  { path: '/games', component: GamesPage,  meta: {requiresAuth: true} },
  { path: '/leaderboard', component: LeaderboardPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/profile', component: ProfilePage,  meta: {requiresAuth: true} },
  { path: '/team', component: TeamPage,  meta: {requiresAuth: true} }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      next("login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
