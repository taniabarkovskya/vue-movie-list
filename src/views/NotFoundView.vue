<script>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__text">Oops! The page you're looking for doesn't exist.</p>
    <RouterLink class="not-found__button" to="/">Go to Home</RouterLink>
  </div>
</template>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #000;
}

.not-found__title {
  font-size: 80px;
  margin: 0;
}

.not-found__text {
  font-size: 20px;
  margin: 10px 0 20px;
}

.not-found__button {
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

.not-found__button:hover {
  background-color: #2c2f33;
  color: #99aab5;
}

@media (min-width: 480px) {
  .not-found__title {
  font-size: 100px;
  margin: 0;
}

.not-found__text {
  font-size: 24px;
  margin: 10px 0 20px;
}
}
</style>