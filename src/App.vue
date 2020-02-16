<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 15vh;
  position: relative;
  overflow-x: hidden;
  color: rgb(77, 77, 77);
}

a {
  color: teal;
  text-decoration: none;
}

a:hover {
  color: rgb(218, 116, 133);
}
</style>
