<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data() {
    return {
      movies: null,
      isLoading: true, 
    };
  },
  props: {
    link: String,
    title: String,
  },
  async mounted() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.link}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2FmZTZkMDU2NjNjOGJhMjc5ZGRjZDNjMThhNzIzNSIsIm5iZiI6MTczOTgxOTU5Ni44OTY5OTk4LCJzdWIiOiI2N2IzOGE0YzNhZmMxMWE1YmQ2ZGJmYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RD_joXgxYqRzhtjzJSiodN8sOYgXJfJTsJoqCS-n05A`,
          },
        }
      );
      this.movies = response.data.results;
    } catch (error) {
      console.error("Error fetching data");
    } finally {
      this.isLoading = false;
    } 
  },
  components: {
    MovieCard,
    PulseLoader,
  },
};
</script>

<template>
  <div class="list">
    <h2 class="list__title">{{ title }}</h2>

    <div v-if="isLoading" class="list__loader">
      <PulseLoader />
    </div>
    <section v-else class="list__content">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" :link="link"/>
    </section>
  </div>
</template>

<style>
.list__title{
  color: #99aab5;
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
}

.list__loader{
  text-align: center;
  color: #99aab5;
  padding: 10px;
}

.list__content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;
}
@media (min-width: 480px) {
  .list__content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .list__content {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .list__content {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
