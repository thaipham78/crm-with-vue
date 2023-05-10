<template>
  <div class="container-fluid">
    <SideNav></SideNav>
    <NavBar></NavBar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import SideNav from "../shared/SideNav.vue";
import NavBar from "../shared/NavBar.vue";
export default {
  components: {
    SideNav,
    NavBar,
  },
};
</script>

<style>
.container-fluid {
  padding: 0;
}

main {
  margin-left: 250px;
  padding: 15px 15px 15px 15px;
}
</style>