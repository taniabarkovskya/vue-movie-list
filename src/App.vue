<script>
import Header from '@/components/Header.vue'
import MovieList from '@/components/MovieList.vue'

export default {
  components: {
    Header,
    MovieList,
  }
}

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
  <MovieList />
</template>

<style scoped></style>
