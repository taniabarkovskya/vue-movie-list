<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/popular" class="back">
    <div class="back__icon">
      <img src="./icons/back.svg" alt="Back arrow" class="back__icon-arrow" />
    </div>
    <span class="back__text">Back</span>
  </RouterLink>
</template>

<style>
.back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  padding: 6px 12px;
  margin-bottom: 12px;
  background-color: #FFF;
  color: #2c2f33;
  border: 1px solid #99aab5;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  transition: all 0.3s linear;
}

.back:hover {
  background-color: #2c2f33;
  color: #99aab5;
}

.back__icon{
  height: 14px;
  width: 14px;
}

.back__icon-arrow{
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>