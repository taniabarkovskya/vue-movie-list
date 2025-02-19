<script>
import axios from "axios";
import BackButton from "@/components/BackButton.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  data() {
    return {
      movie: null,
      isLoading: true, 
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2FmZTZkMDU2NjNjOGJhMjc5ZGRjZDNjMThhNzIzNSIsIm5iZiI6MTczOTgxOTU5Ni44OTY5OTk4LCJzdWIiOiI2N2IzOGE0YzNhZmMxMWE1YmQ2ZGJmYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RD_joXgxYqRzhtjzJSiodN8sOYgXJfJTsJoqCS-n05A`,
          },
        }
      );
      this.movie = response.data;
      console.log(this.movie);
    } catch (error) {
      console.error("Error fetching movie details");
    } finally {
      this.isLoading = false;
    } 
  },
  components: {
    BackButton,
    PulseLoader,
  },
};
</script>

<template>
  <div v-if="isLoading" class="movie__loader">
      <PulseLoader />
  </div>
  <div v-else class="movie-details">
  <BackButton />
    <div class="movie-details__header">
      <img
        v-if="movie.poster_path"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
        :alt="movie.title"
        class="movie-details__poster"
      />
      <div class="movie-details__info">
        <h3 class="movie-details__title">{{ movie.title }}</h3>
        <p class="movie-details__tagline">{{ movie.tagline }}</p>
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Runtime:</strong> {{ movie.runtime }} minutes</p>
        <p><strong>Genres:</strong> {{ movie.genres.map(g => g.name).join(", ") }}</p>
        <p><strong>Budget:</strong> ${{ movie.budget.toLocaleString() }}</p>
        <p><strong>Revenue:</strong> ${{ movie.revenue.toLocaleString() }}</p>
        <p><strong>Popularity:</strong> {{ movie.popularity }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average.toFixed(1) }} ({{ movie.vote_count }} votes)</p>
        <p><strong>Overview:</strong> {{ movie.overview }}</p>
        <a
          v-if="movie.imdb_id"
          :href="`https://www.imdb.com/title/${movie.imdb_id}`"
          target="_blank"
          class="movie-details__imdb"
          >View on IMDb</a
        >
      </div>
    </div>

    <div class="movie-details__production">
      <h2>Production Companies</h2>
      <div class="movie-details__companies">
        <div
          v-for="company in movie.production_companies"
          :key="company.id"
          class="company"
        >
          <img
            v-if="company.logo_path"
            :src="`https://image.tmdb.org/t/p/w200${company.logo_path}`"
            :alt="company.name"
            class="company__logo"
          />
          <p class="company__name">
            {{ company.name }} ({{ company.origin_country }})
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.movie__loader{
  text-align: center;
  color: #99aab5;
  padding: 10px;
}

.movie-details {
  margin: 20px auto;
  padding: 40px;
  background: #1e1e1e;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}

.movie-details__header {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.movie-details__poster {
  width: 200px;
  border-radius: 10px;
}

.movie-details__info {
  flex: 1;
}

.movie-details__title {
  font-size: 24px;
}

.movie-details__tagline {
  font-style: italic;
  color: #ccc;
}

.movie-details__imdb {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background: #f5c619;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.movie-details__production {
  margin-top: 20px;
}

.movie-details__companies {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
}

.company {
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.company__logo {
  width: 100px;
  margin-bottom: 5px;
}

.company__name {
  font-size: 12px;
  margin-top: auto;
}

.loading {
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
}

@media (min-width: 480px) {
  .movie-details__poster {
    width: 300px;
  }
  .movie-details__title {
  font-size: 32px;
}
}

@media (min-width: 768px) {
  .movie-details__header {
    flex-direction: row;
  }

  .movie-details__poster {
    width: 400px;
  }

  .movie-details__title {
  font-size: 48px;
}
}

@media (min-width: 1024px) {
}
</style>
