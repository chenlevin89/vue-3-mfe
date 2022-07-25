<template>
  <div class="nav-bar">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/custom">Default</router-link> |
    <router-link to="/custom2">About</router-link>
  </div>
  <Button :size="'large'" :config="{icon:'home'}">hello</Button>
   <router-view />
</template>

<script>

import  Button from 'vue-lib-sandbox/components/button';

export default {
  name: 'App',
  components: {
    Button
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
