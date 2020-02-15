<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <input v-model="username" placeholder="username">
    <button v-on:click="okClicked">OK </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Please Enter a GitHub Username',
      username: this.username,
      reposUrl: null
    }
  },
  methods: {
    okClicked: function () {
      // do error checking for this.username input
      if (this.username == null) {
        console.error('username is empty!') // TODO: display on page
      } else {
        // check if github profile exist
        let res = axios.get(`http://api.github.com/users/${this.username}`)
        res.then(resp => {
          this.reposUrl = resp.data.repos_url
          this.$router.push({ path: `/${this.username}/projects`, params: {ghid: this.username} })
        }).catch(e => {
          console.error(e.msg) // user not found
        })
      }
    }
  }
}
</script>]

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
