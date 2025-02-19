import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PopularView from '@/views/PopularView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import MovieView from '@/views/MovieView.vue';
import NowPlayingView from '@/views/NowPlayingView.vue';
import TopRatedView from '@/views/TopRatedView.vue';
import RegisterView from '@/views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/now_playing',
      name: 'now_playing',
      component: NowPlayingView,
    },
    {
      path: '/now_playing/:id',
      name: 'movie_now',
      component: MovieView,
    },
    {
      path: '/popular',
      name: 'popular',
      component: PopularView,
    },
    {
      path: '/popular/:id',
      name: 'movie_pop',
      component: MovieView,
    },
    {
      path: '/top_rated',
      name: 'top_rated',
      component: TopRatedView,
    },
    {
      path: '/top_rated/:id',
      name: 'movie_top',
      component: MovieView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
