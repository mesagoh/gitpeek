<template>
  <div class="projects">
      <LoadingScreen v-if="this.isLoading"/>
      <Modal v-if="showModal" @clicked="collapseModal"/>
      <Banner v-bind:title="this.title"/>
      <div class="noRepo" v-if="this.repoList.length === 0">
          <p>{{this.uid}} doesn't have any projects yet.</p>
      </div>
      <ul class="list">
          <li class="item" v-on:click="handleRepoClick(repo.name)" v-for="repo in repoList" :key=repo.id>
              <div id="forkIcon" v-if=repo.fork> <font-awesome-icon :icon="['fas', 'code-branch']" /></div>
              <div class="itemText">
                <span class="itemTitle">{{repo.name}}</span>
                <span class="itemDesc">{{repo.description}}</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from '@/components/Banner.vue'
import Modal from '@/components/Modal.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  name: 'projects',
  props: ['id'],
  components: {
    Banner,
    Modal,
    LoadingScreen
  },
  data () {
    return {
      uid: this.id,
      uname: null,
      repoList: [],
      title: null,
      showModal: false,
      isLoading: true
    }
  },
  methods: {
    collapseModal: function () {
      this.showModal = false
    },
    handleRepoClick: async function (reponame) {
      // onClick handler on each repository cell
      try {
        await axios.get(`https://api.github.com/repos/${this.uid}/${reponame}/readme`)
        this.$router.push({ name: 'projectinfo', params: { id: `${this.uid}`, projectid: `${reponame}` } })
      } catch (e) {
        this.showModal = true
      }
    }
  },
  async created () {
    // Set up data appropriately before rendering.
    // If API calls fails, user is redirected to home.
    try {
      const userInfo = await axios.get(`https://api.github.com/users/${this.uid}`)
      const repoInfo = await axios.get(`https://api.github.com/users/${this.uid}/repos`)
      this.uname = userInfo.data.name == null ? this.uid : userInfo.data.name
      this.title = `${this.uname}'s Projects`
      this.repoList = repoInfo.data
      this.isLoading = false
    } catch (e) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
ul.list {
  list-style-type: none;
  text-align: left;
  padding: 0;
  padding-bottom: 4vh;
  margin: auto;
  width: 80vw;
  min-width: 310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
}

li.item {
  height: auto;
  width: auto;
  max-width: 280px;
  margin: 0 0.5vw 2vh 0;
  padding: 1vh 3vw 2vh 1vw;
  border-radius: 5px;
  display: flex;
  border: 1px dashed var(--dark-grey)
}

li.item:hover {
  cursor: pointer;
  background-color: var(--pink);
  transition: all 0.1s;
}

li.item div {
  display: inline-block;
  font-size: calc(5px + 1vw);
}

div#forkIcon {
  float: left;
  margin: 0.5vh 1vw 2vw 0;
  height: 100%;
  color: var(--dark-pink);
}

li .itemTitle {
  font-size: calc(9px + 1.3vw);
  font-weight: bold;
  color: var(--dark-green);
  padding-bottom: 3px;
}

div.itemText span{
  display: block;
}

</style>
