import '@/assets/css/main.css'
import 'notivue/notifications.css'
import 'notivue/animations.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import VueCookies from 'vue3-cookies'
import { useAuthStore } from './stores/auth'
import { createNotivue } from 'notivue'

const app = createApp(App)

app.use(VueCookies, {
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None'
})

app.use(
  createNotivue({
    position: 'top-right',
  })
)

app.use(createPinia())
app.use(router)

const auth = useAuthStore()
auth.isAuthenticated()

app.mount('#app')
