<script>
import { RouterLink, useRoute } from "vue-router";

export default {
  data() {
    return {
      route: useRoute(),
    };
  },
  methods: {
    isActiveLink(routePath) {
      return this.route.path === routePath;
    },
  },
};
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header__image">
      <img src="./icons/logo.svg" alt="Logo" class="header__image-img" />
    </RouterLink>
    <nav class="header__nav">
      <RouterLink
        to="/"
        :class="[
          'header__nav-link',
          isActiveLink('/') ? 'header__nav-link--active' : '',
        ]"
        >Home</RouterLink
      >
      <RouterLink
        to="/now_playing"
        :class="[
          'header__nav-link',
          isActiveLink('/now_playing') ? 'header__nav-link--active' : '',
        ]"
        >Now playing</RouterLink
      >
      <RouterLink
        to="/popular"
        :class="[
          'header__nav-link',
          isActiveLink('/popular') ? 'header__nav-link--active' : '',
        ]"
        >Popular</RouterLink
      >
      <RouterLink
        to="/top_rated"
        :class="[
          'header__nav-link',
          isActiveLink('/top_rated') ? 'header__nav-link--active' : '',
        ]"
        >Top rated</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  padding-block: 20px;
  padding-inline: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: #99aab5;
  text-align: center;
}

.header__image {
  width: 40px;
  height: 40px;
  transition: all 0.3s linear;
}

.header__image:hover {
  transform: scale(1.5);
}

.header__nav {
  display: flex;
  gap: 5px;
  flex-direction: column;
}

.header__nav-link {
  padding-block: 5px;
  padding-inline: 10px;
  color: #2c2f33;
  font-weight: 800;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: -1px;
  transition: all 0.3s linear;
  border-radius: 10px;
}

.header__nav-link--active {
  background-color: #697f8e97;
}

.header__nav-link:hover {
  color: #000;
  text-shadow: #2c2f33 1px 0 10px;
  background-color: #7c889097;
}

@media (min-width: 580px) {
  .header__nav {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .header__nav-link {
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
  .header__nav-link {
    font-size: 24px;
  }
}
</style>
