<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import { RouterView } from 'vue-router';

export default {
  components: {
    Header,
    Footer,
  },
};

// export default {
//   data() {
//     return {
//       name: "John Doe",
//       status: true,
//     };
//   },
//   methods: {
//     toggleStatus() {
//       this.status = !this.status;
//     },
//   },
// };
</script>

<template>
  <Header />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding-inline: 16px;
  min-height: 100vh;
}
</style>
