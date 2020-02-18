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
    try {
      const readmeInfo = await axios.get(`http://api.github.com/repos/${this.uid}/${this.project}/readme`, {
        headers: {
          Accept: 'application/vnd.github.v3.raw'
        }
      })
      this.fileContent = readmeInfo.data
      this.isLoading = false
    } catch (e) {
      console.error(e.msg)
    }
  }
}
</script>

<style scoped>
.projectInfo {
  text-align: left;
  margin: 2vh 4vw 2vh 4vw;
  word-wrap: break-all;
}
</style>
