import '@/assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import VueCookies from 'vue3-cookies'
import { useAuthStore } from './stores/auth'

const app = createApp(App)

app.use(VueCookies, {
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None'
})

app.use(createPinia())
app.use(router)

const auth = useAuthStore()
auth.isAuthenticated()

app.mount('#app')
