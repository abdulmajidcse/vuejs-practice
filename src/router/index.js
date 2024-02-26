import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
import SingleProduct from '@/views/SingleProduct.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'

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
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { middleware: 'auth' }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware == 'guest' || to.meta.middleware == 'auth') {
    const auth = useAuthStore()
    const isAuthenticated = await auth.isAuthenticated()

    if (isAuthenticated && to.meta.middleware == 'guest') {
      next({ name: 'dashboard' })
    } else if (!isAuthenticated && to.meta.middleware == 'auth') {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
