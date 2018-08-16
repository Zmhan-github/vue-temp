<template>
  <ul>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'Profile'}" exact >
        <img class="logo" src="./images/otau.png">
      </router-link>
    </li>
    <li class="nav-item">
       <router-link class="nav-link" :to="{name: 'Service'}" exact >
          All Сервисы
      </router-link>
    </li>
    <li class="nav-item">
      <a href="#" @click="clearLocalStor()">Выход</a>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'UserHeader',
  methods: {
    clearLocalStor() {
      localStorage.removeItem('token');
      this.$emit('logged');
      this.$router.push('/');
    },
  },
};
</script>


<style lang="scss" scoped >

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.nav-item {
  display: inline-block;
  padding: 5px 40px;
  font-size: 18px;
}
.logo {
  vertical-align: middle;
  height: 35px;
}
.nav-link {
  text-decoration: none;
  color: #333;;
  & > *:hover {
    background-color: #ccc;
  }
}
.router-link-active {
  color: white;
}

  // &__icon {
  //   height: 2.25rem;
  //   width: 2.25rem;
  //   fill:  var(--color-grey-dark-2);
  // }

  // &__notification {
  //   font-size: .9rem;
  //   font-weight: bold;
  //   height: 1.75rem;
  //   width: 1.75rem;
  //   border-radius: 50%;
  //   background-color: var(--color-primary-notific);
  //   color: #fff;
  //   position: absolute;
  //   top: 1.5rem;
  //   right: 1.1rem;

  //   display: flex;
  //   justify-content: center;
  //   align-items: center;


  // }

  // &__user-photo {
  //   height: 3.75rem;
  //   border-radius: 50%;
  //   margin-right: 1rem;
  // }

</style>

