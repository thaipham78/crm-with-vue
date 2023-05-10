<template>
  <div class="sidebar">
    <nav class="nav flex-column text-white">
      <router-link to="/" class="navbar-brand text-white fw-bold fs-5 px-3">Contact management</router-link>
      <router-link to="/users" class="nav-link text-light">Users</router-link>
      <router-link to="/contacts" class="nav-link text-light">Contacts</router-link>
      <router-link to="/companies" class="nav-link text-light">Companies</router-link>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
.sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidebar nav a:hover {
  opacity: 0.5;
}
</style>
