<template>
  <div class="home">
    <div class="home__slogan">
      <h1 class="home__slogan-text">Eдиный аккаунт для всех сервисов otau</h1>
    </div>
    <div class="home__started">
      <router-link class="nav-link" :to="{name: 'Profile'}" exact >
        <p @click="isLogged">Вход</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    isLogged() {
      console.log('clicked');
      this.$emit('logged');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background: rgba(white, .3);
  border: 1px solid #444;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  width: 700px;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home__slogan {
  width: 300px;
  background: tomato;
}
.home__slogan-text {
  color: white;
  text-transform: uppercase;
}
.home__started {
  background: red;
  width: 300px;
}
</style>
