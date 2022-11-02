import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import FavoritePage from '../views/FavoritePage.vue'
import DashBoard from '../views/DashBoard.vue'
import RegisterPage from '../views/RegisterPage.vue'
import AddQuote from '../views/AddQuote.vue'
import ChatPage from '../views/ChatPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,
      children: [
        {
          path: '/',
          name: 'landing-page',
          component: LandingPage
    
        },
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/favorites',
          name: 'favorite',
          component: FavoritePage
        },
        {
          path: '/add',
          name: 'add',
          component: AddQuote
        },
        {
          path: '/chatting',
          name: 'chatting',
          component: ChatPage
        },
      ]
    },
    ,
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
    }
  ]
})

router.beforeEach((to, from , next) => {

  const access_token = localStorage.access_token

  if(to.name === 'favorites' && !access_token) next('/login')

  else if(to.name === 'login' && access_token) next('/home')

  else if(to.name === 'register' && access_token) next('/')

  else if(to.name === 'landing-page' && access_token) next('/home')

  else if(to.name === 'home' && !access_token) next('/')

  else next()
})

export default router
