<template>
    <div class="banner">
        <h1>{{this.title}}</h1>
    </div>
</template>

<script>
export default {
  name: 'banner',
  props: ['title'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100vw;
  height: auto;
  background: linear-gradient( -20deg, var(--medium-green), var(--light-green), var(--dark-green));
  background-size: 400% 400%;
  animation: gradient 9s ease infinite;
  color: var(--light-cream);
  top: 0;
  left: 0;
  position: fixed;
  text-align: left;
  border: none;
}

h1 {
  font-size:calc(17px + 1vw);
  margin:1vw 0 4vh 1vw;
}

</style>
