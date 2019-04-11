import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./components/Home.vue')

const AddPost = () => import('./components/Posts/AddPost.vue')
const Posts = () => import('./components/Posts/Posts.vue')

const Profile = () => import('./components/Auth/Profile.vue')
const Signup = () => import('./components/Auth/Signup.vue')
const Signin = () => import('./components/Auth/Signin.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/post/add',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
