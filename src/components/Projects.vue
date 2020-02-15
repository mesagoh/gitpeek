<template>
    <div class="projects">
        <h1>List</h1>
        <h2>{{id}}</h2>
    </div>
</template>

<script>
export default {
  name: 'projects',
  props: ['ghid', 'url'],
  data () {
    return {
      id: [...this.props]
    }
  }
}
</script>

<style scoped>
</style>
