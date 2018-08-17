<template>
  <div id="app" :style="isLoggedStyle">
    <header>
      <nav v-if="isLogged">
        <UserHeader @logged="isLoggedChange"/>
      </nav>
      <nav v-else>
        <HomeHeader/>
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
      token: localStorage.getItem('token'),
    };
  },
  methods: {
    isLoggedChange() {
      this.isLogged = !this.isLogged;
    },
    fetchIt() {
      if (this.token) {
        this.isLogged = !this.isLogged;
        this.$router.push('/profile');
      }
    },
  },
  created() {
    this.fetchIt();
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
:root {
  --color-primary-notific:  #eb2f64;

  --color-primary        : #e7ebf0;
  --color-primary-light  : #f2f2f2;
  --color-primary-dark   : #c6c6c6;

  --color-grey-light-1: #faf9f9;
  --color-grey-light-2: #f4f2f2;
  --color-grey-light-3: #f0eeee;
  --color-grey-light-4: #ccc;

  --color-grey-dark-1: #333;
  --color-grey-dark-2: #777;
  --color-grey-dark-3: #999;

  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, .3);
  --shadow-light: 0 2rem 5rem rgba(0, 0, 0, .06);
  --line: 1px solid var(--color-grey-light-2);
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; /* 1rem = 10px; 10px/16px = 62.5%; */
}

@font-face {
  font-family: 'Lato-Light';
  src: url('./assets/fonts/Lato-Light.eot'); /* IE9 Compat Modes */
  src: url('./assets/fonts/Lato-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('./assets/fonts/Lato-Light.woff2') format('woff2'), /* Modern Browsers */
        url('./assets/fonts/Lato-Light.woff') format('woff'), /* Modern Browsers */
        url('./assets/fonts/Lato-Light.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
}

</style>

<style scoped>
#app {
  font-family: 'Lato-Light', Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-grey-dark-2);
  max-width: 192rem;
  min-height: 100vh;
  height: 600px;
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
