<script>
import { RouterLink } from 'vue-router';

export default {
  props: {
    movie: Object,
    link: String,
  },
  methods: {
    getImageUrl(path) {
      return path ? `https://image.tmdb.org/t/p/original${path}` : 'https://via.placeholder.com/500x750?text=No+Image';
    },
    openDetails() {
      this.$router.push(`/${this.link}/${this.movie.id}`)
    },
  },
}
</script>

<template>
 <article class="card" @click="openDetails">
  <div class="card__image">
    <img :src="getImageUrl(movie.poster_path)" alt="Movie poster" class="card__image-img">
  </div>
  <RouterLink :to="`/${link}/${movie.id}`" class="card__title">{{ movie.title }}</RouterLink>
  <p class="card__description">{{ movie.overview.substring(0,90) + '...' }}</p>
  <div class="card__rating">
    <img src="./icons/rating.svg" alt="Rating star" class="card__rating-icon">
    <span class="card__rating-mark">{{ movie.vote_average.toFixed(1) }}</span>
  </div>
 </article>
</template>

<style>
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  gap: 15px;
  padding: 20px;
  background-color: #99aab5;
  border: 1px solid rgb(124, 135, 149);
  transition: all 0.3s linear;
  cursor: pointer;
}

.card__image {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card__image-img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.card__description{
  margin: 0;
  font-size: 12px;
  flex-grow: 1;
}

.card__title{
  text-decoration: none;
  font-size: 20px;
  color: #23272a;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  transition: all 0.3s linear;
}

.card__title:hover{
  color: #000;
}

.card:hover{
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1;
}

.card__rating{
  display: flex;
  justify-content: end;
  gap: 5px;
  align-items: center;
  width: 100%;
  margin-top: auto;
}

.card__rating-icon{
  height: 14px;
  width: 14px;
}

.card__rating-mark{
  font-size: 14px;
}
</style>