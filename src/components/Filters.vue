<script>
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  data() {
    return {
      genres: null,
      isLoading: true,
    };
  },
  props: {
    genreValue: Number,
    searchValue: String,
  },
  emits: ["update:genreValue", "update:searchValue"],
  async mounted() {
    try {
      const response = await axios.get(
        `${BASE_URL}/genre/movie/list`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
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
    <input
      class="filters__search"
      type="text"
      placeholder="Start typing..."
      :value="searchValue"
      @input="$emit('update:searchValue', $event.target.value)"
    />
    <select
      class="filters__select"
      name="genres"
      id="genres"
      :disabled="isLoading"
      @change="$emit('update:genreValue', $event.target.value)"
    >
      <option disabled :selected="genreValue === 0">
        {{ isLoading ? "Loading..." : "Select genre" }}
      </option>
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
