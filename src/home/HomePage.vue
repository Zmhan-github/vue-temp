<template>
  <div class="center home">
    <div class="home__slogan">
      <h1 class="home__slogan-text">Eдиный аккаунт для всех сервисов otau</h1>
    </div>
    <div class="home__started">
      <router-link class="nav-link" :to="{name: 'Profile'}" exact >
        <p @click="isLogged">Залогинился</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    isLogged() {
      localStorage.setItem('token', 'token');
      this.$emit('logged');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
  width: 750px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home__slogan {
  width: 400px;
  padding-top: 35px;
}
.home__slogan-text {
  text-transform: uppercase;
  font-size: 3.2rem;
  text-align: right;
  font-weight: 500;
  letter-spacing: .2rem;
}
.home__started {
  font-size: 1.8rem;
  width: 350px;
}
</style>
