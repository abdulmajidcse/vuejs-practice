import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
import SingleProduct from '@/views/SingleProduct.vue'
import ProfileView from '@/views/ProfileView.vue'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: SingleProduct
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { middleware: 'guest' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { middleware: 'auth' }
    }
  ]
})

const { cookies } = useCookies()

router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware == 'guest' || to.meta.middleware == 'auth') {
    try {
      const authUser = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`
        }
      })

      console.log(authUser)
      if (authUser.data && to.meta.middleware == 'auth') {
        next()
      } else if (authUser.data && to.meta.middleware == 'guest') {
        next({ name: 'profile' })
      }
    } catch (error) {
      console.log(error)
      if (to.meta.middleware == 'auth') {
        next({ name: 'login' })
      } else if (to.meta.middleware == 'guest') {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
