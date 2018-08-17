<template>
  <div class="content">
    <div class="sidebar">a</div>
    <div class="main">b</div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
};
</script>


<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  height: 100%;

  .sidebar {
    background-color: var(--color-grey-dark-1);
    flex: 0 1 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
}

</style>
