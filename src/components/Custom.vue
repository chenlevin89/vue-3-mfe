<template>
  <div class="hello">
      <p>Vue Test Component !</p>
      <ul>
         <li> <router-link to="/custom/child-1">Child 1</router-link></li>
         <li> <router-link to="/custom/child-2">Child 2</router-link></li>
      </ul>
 
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Custom',
  beforeRouteEnter(to, from, next) {
    console.log(to,from);
    next(true)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
