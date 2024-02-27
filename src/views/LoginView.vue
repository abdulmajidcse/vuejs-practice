<script setup>
import { reactive, ref } from 'vue'
import { FwbInput, FwbButton } from 'flowbite-vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import { authTokenName } from '@/helpers/constants'
import { dummyJsonApi } from '@/helpers/urls'
import { push } from 'notivue'

const { cookies } = useCookies()

const router = useRouter()

const formData = reactive({
  username: '',
  password: ''
})

const loading = ref(false)

const loginError = ref('')

const login = async () => {
  loading.value = true
  loginError.value = ''

  try {
    const loginResponse = await axios.post(`${dummyJsonApi}/auth/login`, formData)
    cookies.set(authTokenName, loginResponse.data.token)
    loginError.value = ''

    if (loginResponse.data.token) {
      push.success('You are logged in!')
      router.push({ name: 'dashboard' })
    }
  } catch (error) {
    loginError.value = 'Username or password are wrong!'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-[80dvh] flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    <div
      class="w-full sm:max-w-md mt-6 px-6 py-4 dark:bg-gray-800 shadow-md overflow-hidden rounded-lg relative"
    >
      <h3 class="mb-4 text-2xl text-white">Login to your account</h3>
      <form @submit.prevent="login">
        <fieldset :disabled="loading">
          <fwb-input v-model="formData.username" required placeholder="Username" label="Username">
            <template v-if="loginError" #validationMessage
              ><span class="text-red-500">{{ loginError }}</span></template
            >
          </fwb-input>

          <hr class="mt-4 border-0" />

          <fwb-input
            type="password"
            v-model="formData.password"
            required
            placeholder="12345678"
            label="Password"
          />

          <hr class="mt-4 border-0" />

          <fwb-button type="submit" color="default" :disabled="loading">
            <span v-if="loading">Please, wait...</span>
            <span v-else>Login</span>
          </fwb-button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
