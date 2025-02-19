<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";
import Filters from "@/components/Filters.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(import.meta.env)

export default {
  data() {
    return {
      movies: null,
      isLoading: true,
      searchValue: "",
      selectedGenre: 0,
    };
  },
  computed: {
    moviesList() {
      return this.movies
        ? this.movies.filter((movie) => {
            const matchesSearch = this.searchValue.trim()
              ? movie.title
                  .toLowerCase()
                  .includes(this.searchValue.trim().toLowerCase())
              : true;
            const matchesGenre = this.selectedGenre
              ? movie.genre_ids.includes(Number(this.selectedGenre))
              : true;
            return matchesSearch && matchesGenre;
          })
        : [];
    },
  },
  props: {
    link: String,
    title: String,
  },
  async mounted() {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${this.link}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
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
    Filters,
    PulseLoader,
  },
};
</script>

<template>
  <div class="list">
    <h2 class="list__title">{{ title }}</h2>
    <Filters
      :searchValue="searchValue"
      :genreValue="selectedGenre"
      @update:genreValue="selectedGenre = $event"
      @update:searchValue="searchValue = $event"
    />
    {{ searchValue }}
    <div v-if="isLoading" class="list__loader">
      <PulseLoader />
    </div>
    <section v-else class="list__content">
      <MovieCard
        v-for="movie in moviesList"
        :key="movie.id"
        :movie="movie"
        :link="link"
      />
    </section>
    <p class="list__empty">No movies :(</p>
  </div>
</template>

<style>
.list__title {
  color: #99aab5;
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
}

.list__loader {
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

.list__empty{
  text-align: center;
  color: #99aab5;
  font-weight: 700;
  font-size: 24px;
  padding: 10px;
}

@media (min-width: 480px) {
  .list__content {
    grid-template-columns: repeat(2, 1fr);
  }
  .list__title {
    font-size: 48px;
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
