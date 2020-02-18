import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import ProjectInfo from '@/components/ProjectInfo'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id',
      name: 'projects',
      component: Projects,
      props: true
    },
    {
      path: '/:id/:projectid',
      name: 'projectinfo',
      component: ProjectInfo,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
