<script>
import { RouterLink } from "vue-router";
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <button class="back" @click="goBack">
    <img src="./icons/back.svg" alt="Back arrow" class="back__icon" />
    <span class="back__text">Back</span>
  </button>
</template>

<style>
.back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  padding: 6px 12px;
  margin-bottom: 12px;
  background-color: #fff;
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

.back__icon {
  height: 14px;
  width: 14px;
}

</style>
