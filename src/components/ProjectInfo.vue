<template>
  <div class="projectInfo">
    <LoadingScreen v-if="this.isLoading"/>
    <Banner v-bind:title="this.project"/>
    <VueMD :source='this.fileContent'></VueMD>
  </div>
</template>

<script>
import axios from 'axios'
import VueMD from 'vue-markdown'
import Banner from '@/components/Banner.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  name: 'projectinfo',
  props: ['id', 'projectid'],
  components: {
    VueMD,
    Banner,
    LoadingScreen
  },
  data () {
    return {
      uid: this.id,
      project: this.projectid,
      fileContent: '',
      isLoading: true
    }
  },
  async created () {
    // Set up data appropriately before rendering.
    // If API calls fails, user is redirected to home.
    try {
      const readmeInfo = await axios.get(`https://api.github.com/repos/${this.uid}/${this.project}/readme`, {
        headers: {
          Accept: 'application/vnd.github.v3.raw'
        }
      })
      this.fileContent = readmeInfo.data
      this.isLoading = false
    } catch (e) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.projectInfo {
  text-align: left;
  margin: 2vh 4vw 8vh 4vw;
  word-wrap: break-all;
}
</style>
