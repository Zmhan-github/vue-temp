<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact >
              <img class="logo" src="./assets/logo.png">
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact >
               Войти
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
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
body {
  background: url("./assets/bg.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>

<style scoped>
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  max-width: 192rem;
  height: 600px;
  min-height: 100vh;
  margin: 0rem auto;
}
main {
  position: relative;
  padding: 30px;
  min-height: 450px;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.nav-item {
  display: inline-block;
  padding: 5px 40px;
  font-size: 22px;
}
.logo {
  vertical-align: middle;
  height: 35px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
</style>
