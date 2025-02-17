<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://api.themoviedb.org/4/list/list_id?language=en-US&page=1');
      this.movies = response.data;
      console.log(this.movies)
    } catch (error) {
      console.error('Error fetching data')
    }
  }

}

</script>

<template>
 <h1>movie list</h1>
 <ul>
  <li v-for="movie in movies">{}</li>
 </ul>
</template>

<style>
</style>