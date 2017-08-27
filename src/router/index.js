import Vue from 'vue'
import Router from 'vue-router'
import Transition from '@/components/transition'
import Animation from '@/components/animation'
import Firebase from '@/components/firebase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transition',
      component: Transition
    },
    {
      path: '/animation',
      name: 'animation',
      component: Animation
    },
    {
      path: '/firebase',
      name: 'firebase',
      component: Firebase
    }
  ]
})
