<script>
import axios from "axios";

export default {
  data() {
    return {
      genres: null,
      isLoading: true,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2FmZTZkMDU2NjNjOGJhMjc5ZGRjZDNjMThhNzIzNSIsIm5iZiI6MTczOTgxOTU5Ni44OTY5OTk4LCJzdWIiOiI2N2IzOGE0YzNhZmMxMWE1YmQ2ZGJmYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RD_joXgxYqRzhtjzJSiodN8sOYgXJfJTsJoqCS-n05A`,
          },
        }
      );
      this.genres = response.data.genres;
    } catch (error) {
      console.error("Error fetching genres");
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<template>
  <div class="filters">
    <input class="filters__search" type="text" placeholder="Start typing..." />

    <select class="filters__select" name="genres" id="genres" :disabled="isLoading">
      <option disabled selected>{{ isLoading ? "Loading..." : "Select genre" }}</option>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">
        {{ genre.name }}
      </option>
    </select>
  </div>
</template>

<style>
.filters {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
}

.filters__search {
  font-size: 20px;
  flex-grow: 1;
  padding-block: 14px;
  padding-inline: 20px;
  border-radius: 10px;
}

.filters__select {
  min-width: 285px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px;
}

@media (min-width: 480px) {
 
}

@media (min-width: 768px) {
  .filters {
  flex-direction: row;
}
}
</style>
