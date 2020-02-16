<template>
    <div class="projects">
        <Banner v-bind:title="this.bannerTitle"/>
        <ul class="list">
            <li class="item" v-on:click="handleRepoClick(repo)" v-for="repo in repoList" :key=repo.id>
                <div id="forkIcon" v-if=repo.fork> forked </div>
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

export default {
  name: 'projects',
  props: ['id'],
  components: {
    Banner
  },
  data () {
    return {
      uid: this.id,
      uname: null,
      repoList: null,
      bannerTitle: null
    }
  },
  methods: {
    handleRepoClick: function (repo) {
      this.$router.push({path: `/${this.uid}/projects/${repo.name}`})
    }
  },
  async created () {
    try {
      const userInfo = await axios.get(`http://api.github.com/users/${this.uid}`)
      const repoInfo = await axios.get(`http://api.github.com/users/${this.uid}/repos`)
      this.uname = userInfo.data.name
      this.bannerTitle = `${this.uname}'s Projects`
      this.repoList = repoInfo.data
    } catch (e) {
      console.error(e.msg)
    }
  }
}
</script>

<style scoped>
ul.list {
  list-style-type: none;
  text-align: left;
  /* min-width: 500px; */
}

li.item {
    height: auto;
    background-color: transparent;
    margin: 0 3vw 4vh 0;
    padding: 1vh 0 2vh 3vw;
    border-radius: 5px;
    display: flex;
}

li.item:hover {
    cursor: pointer;
    background-color: rgba(179, 247, 213, 0.815);
    transition: all 0.1s;
}

li.item div {
    display: inline-block;
    font-size: 1.5vw;
}

div#forkIcon {
    float: left;
    margin: 0.5vh 0.5vw 2vw 0;
    height: 100%;
}

div.itemText span{
    display: block;
}

li .itemTitle {
    font-size: 2vw;
    font-weight: bold;
}

</style>
