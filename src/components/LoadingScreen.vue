<template>
    <div class="loading"></div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
.loading {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient( -90deg, var(--pink), var(--pale-pink), var(--dark-pink));
    background-size: 400% 400%;
    animation: gradient 2s ease infinite;
    z-index: 1;
}
</style>
