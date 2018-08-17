<template>
<nav>
  <img class="logo" src="./images/otau.png">
  <ul>
    <li @click="getAllServices()">
      <img src="./images/apps.png" alt="apps">
    </li>
    <li class="user-nav__user">
        <span class="user-nav__user-name">Джон</span>
    </li>
    <li class="user-nav" @click="clearLocalStor()">
      Выход
    </li>
  </ul>
</nav>
</template>


<script>
export default {
  name: 'ProfilePageHeader',
  methods: {
    clearLocalStor() {
      localStorage.removeItem('token');
      this.$emit('logged');
      this.$router.push('/');
    },
    getAllServices() {
      this.$router.push('/service');
    },
  },
};
</script>


<style lang="scss" scoped >

.logo {
  height: 3.5rem;
  margin-left: 4rem;
  vertical-align: middle;
}

nav {
  font-size: 1.4rem;
  height: 70px;
  background-color: var(--color-grey-light-1);
  border-bottom: var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  align-items: center;
  align-self: stretch;

  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > *:hover {
    background-color: var(--color-grey-light-2);
  }

  & li .link {
    text-decoration: none;
    color: inherit;
  }

  & li img {
    background: #333;
    height: 2.25rem;
    width: 2.25rem;
    fill:  var(--color-grey-dark-2);
  }

}


.router-link-active {
  color: white;
}

</style>

