<template>
  <div class="projectInfo">
    <Banner v-bind:title="this.project"/>
    <VueMD :source='this.fileContent'></VueMD>
  </div>
</template>

<script>
import axios from 'axios'
import VueMD from 'vue-markdown'
import Banner from '@/components/Banner.vue'

export default {
  name: 'projectinfo',
  props: ['id', 'projectname'],
  components: {
    VueMD,
    Banner
  },
  data () {
    return {
      uid: this.id,
      project: this.projectname,
      fileContent: ''
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
}

</style>
