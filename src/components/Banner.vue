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
  height: 15vh;
  background-color: rgb(19, 223, 172);
  top: 0;
  left: 0;
  position: fixed;
  text-align: left;
  color: rgb(233, 226, 195);
}
</style>
