<template>
  <div class="home">
    <h1>Peek into a GitHub Profile</h1>
    <input class="inputField" v-on:keyup.enter="handleSubmit" v-model="username" @input="handleInputChange" placeholder="username">
    <div class="errorMsg" v-if="hasError">{{this.errorMsg}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      username: null,
      errorMsg: ''
    }
  },
  methods: {
    handleInputChange: function () {
      if (this.errorMsg !== '') {
        this.errorMsg = ''
      }
    },
    hasError: function () {
      return (this.errorMsg != null || this.errorMsg.length !== 0)
    },
    handleSubmit: async function () {
      if (this.username == null || this.username.length === 0) {
        this.errorMsg = 'Username is empty. Please try again.'
      } else {
        try {
          await axios.get(`http://api.github.com/users/${this.username}`)
          this.$router.push({ name: 'projects', params: { id: `${this.username}` } })
        } catch (e) {
          this.errorMsg = 'Something went wrong... Please try again.'
        }
      }
    }
  }
}
</script>]

<style scoped>
.home {
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 20vh;
  background: linear-gradient( -20deg, var(--medium-green), var(--light-green), var(--dark-green));
  background-size: 400% 400%;
  animation: gradient 9s ease infinite;
  color: var(--light-cream);
}

.inputField {
  padding: 1vh 1.3vw 1vh 1.3vw;
  width: 30vw;
  min-width: 200px;
  font-size: calc(8px + 1.8vw);
  border-radius: 10px;
  border: 1px solid var(--dark-grey);
}

.inputField:focus {
  outline: none;
}

.errorMsg {
  font-size: calc(5px + 1.5vw);
  color: var(--dark-red);
  padding-top: 5vh;
}
</style>
