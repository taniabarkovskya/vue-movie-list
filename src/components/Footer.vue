<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer">
    <RouterLink to="/" class="footer__image">
      <img src="./icons/logo.svg" alt="Logo" class="footer__image-img" />
    </RouterLink>
    <nav class="footer__nav">
      <RouterLink to="/" class="footer__nav-link">Home</RouterLink>
      <RouterLink to="/now_playing" class="footer__nav-link"
        >Now playing</RouterLink
      >
      <RouterLink to="/popular" class="footer__nav-link">Popular</RouterLink>
      <RouterLink to="/top_rated" class="footer__nav-link"
        >Top rated</RouterLink
      >
    </nav>
    <div class="footer__contacts">
      <span class="footer__contacts-text">Contacts</span>
      <div class="footer__contacts-profiles profiles">
        <a
          class="profiles__link"
          href="https://www.linkedin.com/in/tetiana-barkovska-4287b7349/"
          target="_blank"
        >
          <img
            src="./icons/linkedin.svg"
            alt="LinkedIn"
            class="profiles__link-img"
          />
        </a>
        <a
          class="profiles__link"
          href="https://github.com/taniabarkovskya"
          target="_blank"
        >
          <img
            src="./icons/github.svg"
            alt="GitHub"
            class="profiles__link-img"
          />
        </a>
        <a
          class="profiles__link"
          href="https://t.me/taniawithat"
          target="_blank"
        >
          <img
            src="./icons/telegram.svg"
            alt="Telegram"
            class="profiles__link-img"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: space-around;
  background-color: #99aab5;
  text-align: center;
  padding-block: 20px;
  padding-inline: 20px;
}

@media (min-width: 480px) {
  .footer {
    flex-direction: row;
    gap: 10px;
  }
}

.footer__image {
  width: 40px;
  height: 40px;
  transition: all 0.3s linear;
}

.footer__image:hover {
  transform: scale(1.25);
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__nav-link {
  text-decoration: none;
  color: #000;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: -1px;
  transition: all 0.3s linear;
}

.footer__nav-link:hover {
  color: #2c2f33;
  text-shadow: #2c2f33 1px 0 5px;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__contacts-text {
  color: #000;
  font-weight: 800;
  font-size: 14px;
}

.profiles {
  display: flex;
  gap: 10px;
}

.profiles__link-img {
  width: 30px;
  height: 30px;
  transition: all 0.3s linear;
}

.profiles__link-img:hover {
  transform: scale(1.25);
}
</style>
