<template>
  <div class="home">
    <h1>Please Enter a GitHub Username</h1>
    <input class="inputField" v-on:keyup.enter="handleSubmit" v-model="username" placeholder="username">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      username: null,
      reposUrl: null
    }
  },
  methods: {
    handleSubmit: function () {
      if (this.username == null || this.username.length === 0) {
        console.error('username is empty!') // TODO: display on page
      } else {
        // check if github profile exist
        const res = axios.get(`http://api.github.com/users/${this.username}`)
        res.then(resp => {
          this.reposUrl = resp.data.repos_url
          console.log(resp.data.name)
          this.$router.push({ path: `/${this.username}/projects` })
        }).catch(e => {
          console.error(e.msg)
        })
      }
    }
  }
}
</script>]

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 20vh;
  background: linear-gradient( -30deg, rgb(9, 221, 133), rgb(212, 238, 226));
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
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

.inputField {
  padding: 1vh 1.3vw 1vh 1.3vw;
  width: 30vw;
  font-size: 1.8vw;
  border-radius: 10px;
  border: 1px solid grey;
}

.inputField:focus {
  outline: none;
}
</style>
