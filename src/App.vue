<template>
  <div id="app" :style="isLoggedStyle">
    <header>
      <nav v-if="isLogged">
        <UserHeader />
      </nav>
      <nav v-else>
        <HomeHeader />
      </nav>
    </header>
    <main>
      <router-view @logged="isLoggedChange"/>
    </main>
  </div>
</template>

<script>
import HomeHeader from './home/HomeHeader.vue';
import UserHeader from './profile/UserHeader.vue';

export default {
  name: 'app',
  components: {
    HomeHeader,
    UserHeader,
  },
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    isLoggedChange() {
      this.isLogged = !this.isLogged;
    },
  },
  computed: {
    isLoggedStyle() {
      return {
        background: this.isLogged ? 'white' : '',
      };
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  max-width: 192rem;
  height: 600px;
  min-height: 100vh;
  margin: 0rem auto;
  background: url("./assets/bg.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
main {
  position: relative;
  padding: 30px;
  min-height: 450px;
}
</style>
