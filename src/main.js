import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import VueCookies from 'vue3-cookies'

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

app.mount('#app')
