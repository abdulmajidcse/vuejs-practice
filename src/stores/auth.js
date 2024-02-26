import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
import { authTokenName } from '@/helpers/constants'

const { cookies } = useCookies()

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const user = ref({})

  async function isAuthenticated() {
    const authToken = cookies.get(authTokenName)
    // check the current user is authenticated or not if token is exists
    if (authToken) {
      try {
        const authUser = await axios.get('https://dummyjson.com/auth/me', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })

        // update authenticated user data
        isLoggedIn.value = true
        user.value = authUser.data

        return true
      } catch (error) {
        logout()

        return false
      }
    } else {
      logout()

      return false
    }
  }

  function logout() {
    // remove auth token from cookies
    cookies.remove(authTokenName)
    // set empty user data
    isLoggedIn.value = false
    user.value = {}
  }

  return { isLoggedIn, user, isAuthenticated, logout }
})
