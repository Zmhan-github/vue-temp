<template>
  <ul>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'Home'}" exact >
        <img class="logo" src="./images/logo.png">
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>


<style scoped>
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

