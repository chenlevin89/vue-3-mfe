<template>
  <div class="nav-bar">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/custom">Default</router-link> |
    <router-link to="/custom2">About</router-link>
  </div>
   <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
