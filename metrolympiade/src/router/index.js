import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/pages/WelcomePage.vue';
import GamePage from '@/pages/GamePage.vue';
import GamesPage from '@/pages/GamesPage.vue';
import LeaderboardPage from '@/pages/LeaderboardPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import TeamPage from '@/pages/TeamPage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/game', component: GamePage },
  { path: '/games', component: GamesPage },
  { path: '/leaderboard', component: LeaderboardPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/team', component: TeamPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
