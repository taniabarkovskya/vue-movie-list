<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import { RouterView } from "vue-router";

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    isRegisterPage() {
      return this.$route.name === "register";
    },
  },
};
</script>

<template>
  <Header v-if="!isRegisterPage" />
  <main class="container">
    <RouterView />
  </main>
  <Footer v-if="!isRegisterPage" />
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: 16px;
  min-height: 100vh;
}
</style>
