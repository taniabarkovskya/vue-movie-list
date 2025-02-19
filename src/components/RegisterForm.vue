<script>
export default {
  methods: {
    goHome(event) {
      event.preventDefault();
      const form = event.target;

      if (form.checkValidity()) {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<template>
  <form class="form" @submit="goHome">
    <div class="form__container">
      <h1 class="form__container-title">Register</h1>
      <p class="form__container-text">
        Please fill in this form to enter site.
      </p>
      <hr class="form__container-divider" />

      <label class="form__container-label" for="email"><b>Email</b></label>
      <input
        class="form__container-input"
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        title="Must be a valid email like example@gmail.com"
        required
      />

      <label class="form__container-label" for="psw"><b>Password</b></label>
      <input
        class="form__container-input"
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
        required
      />
      <hr />

      <button type="submit" class="form__container-button">Register</button>
    </div>
  </form>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form__container {
  width: 100%;
  padding: 20px;
  color: #ddd;
}

.form__container-input {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #fff;
}

.form__container-input:focus {
  background-color: #ddd;
  outline: none;
}

.form__container-divider {
  border: 1px solid #ddd;
  margin-bottom: 25px;
}

.form__container-button {
  background-color: #99aab5;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.form__container-button:hover {
  opacity: 1;
}
</style>
