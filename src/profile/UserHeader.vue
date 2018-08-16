<template>
  <ul>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'Profile'}" exact >
        <img class="logo" src="./images/otau.png">
      </router-link>
    </li>
    <li class="nav-item">
       <router-link class="nav-link" :to="{name: 'Profile'}" exact >
          Сервисы
      </router-link>
      <router-link class="nav-link" :to="{name: 'Profile'}" exact >
          Айсулу
      </router-link>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'UserHeader',
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
  color: inherit;
}
.router-link-active {
  color: white;
}


.user-nav {
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

  &__icon-box {
    position: relative;

    // @media only screen and (max-width: $bp-small) {
    //   display: none;
    // }
  }

  &__icon {
    height: 2.25rem;
    width: 2.25rem;
    fill:  var(--color-grey-dark-2);
  }

  &__notification {
    font-size: .9rem;
    font-weight: bold;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: var(--color-primary-notific);
    color: #fff;
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;

    display: flex;
    justify-content: center;
    align-items: center;


  }

  &__user-photo {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
}

</style>

