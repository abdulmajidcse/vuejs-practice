import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})

  async function isAuthenticated() {
    const { cookies } = useCookies()
    try {
      const authUser = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`
        }
      })

      // update authenticated user data
      user.value = authUser.data
      
      return true
    } catch (error) {
      // remove auth token from cookies
      cookies.remove('token')
      // set empty user data
      user.value = {}

      return false
    }
  }

  return { user, isAuthenticated }
})
