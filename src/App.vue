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
/* Global Styles */

@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

:root {
  --dark-cream: rgb(243, 192, 144);
  --light-cream: rgb(243, 239, 223);
  --dark-grey: rgb(77, 77, 77);
  --shadow: rgba(0, 0, 0, 0.575);
  --light-grey: rgb(197, 209, 207);
  --teal: rgb(5, 141, 141);
  --pale-green: rgb(220, 240, 227);
  --light-green:rgb(152, 236, 180);
  --medium-green: rgb(9, 221, 133);
  --dark-green:rgb(7, 156, 119);
  --dark-pink: rgb(245, 126, 146);
  --dark-red: rgb(246, 12, 90);
  --pink: rgb(241, 204, 210);
  --pale-pink: rgb(241, 236, 237);
  --light-purple: rgb(245, 239, 245);
  --bright-yellow: rgb(250, 227, 100);
}

#app {
  font-family: 'Open Sans', sans-serif;
  color: var(--dark-grey);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 13vh;
  position: relative;
  min-width: 310px;
}
::-webkit-scrollbar {
  width: 2vw;
}
::-webkit-scrollbar-track {
  background: var(--light-grey);
}
::-webkit-scrollbar-thumb {
  background: var(--bright-yellow);
  border-radius: 30px;
}

html body {
  background-color: var(--light-purple);
  min-width: fit-content;
  margin: 0;
  padding: 0;
  width: 100%;
}

a {
  color: var(--teal);
  text-decoration: none;
}

a:hover {
  color: var(--dark-pink);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
