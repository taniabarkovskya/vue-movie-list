<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="welcome">
    <div class="welcome__content">
      <h1 class="welcome__title">Welcome to MovieList</h1>
      <p class="welcome__description">
        Discover a curated collection of movies across different categories.
        Explore the latest releases, timeless classics, and hidden gems!
      </p>
      <div class="categories">
        <div class="category">🎬 Now playing</div>
        <div class="category">🔥 Popular</div>
        <div class="category">⭐ Top Rated</div>
      </div>
      <RouterLink to="/popular" class="welcome__button">
        Explore Movies
      </RouterLink>
    </div>
  </div>
</template>

<style>
.welcome {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #99aab5;
  padding: 20px;
}

.welcome__content {
  max-width: 600px;
}

.welcome__title {
  font-size: 32px;
  margin-bottom: 10px;
}

.welcome__description {
  font-size: 14px;
  margin-bottom: 20px;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.category {
  background-color: #000;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 10px;
}

.welcome__button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #99aab5;
  color: #2c2f33;
  border: 1px solid #99aab5;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  transition: all 0.3s linear;
}

.welcome__button:hover {
  background-color: #2c2f33;
  color: #99aab5;
}

@media (min-width: 480px) {
  .welcome__title {
  font-size: 48px;
}

.welcome__description {
  font-size: 20px;
}

.category {
  font-size: 14px;
}
}

</style>
