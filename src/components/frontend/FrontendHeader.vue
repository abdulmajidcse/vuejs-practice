<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue'
import logo from '@/assets/img/logo.png'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { push } from 'notivue'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()

  push.success('You are logged out!')

  router.push({ name: 'login' })
}
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <router-link :to="{ name: 'home' }">
        <fwb-navbar-logo alt="Flowbite logo" :image-url="logo" />
      </router-link>
    </template>

    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link class="navbar-link">
          <router-link :to="{ name: 'home' }" exact-active-class="route-active">Home</router-link>
        </fwb-navbar-link>

        <fwb-navbar-link class="navbar-link">
          <router-link :to="{ name: 'about' }" exact-active-class="route-active">About</router-link>
        </fwb-navbar-link>

        <fwb-navbar-link class="navbar-link">
          <router-link :to="{ name: 'contact' }" exact-active-class="route-active"
            >Contact</router-link
          >
        </fwb-navbar-link>

        <template v-if="auth.isLoggedIn">
          <fwb-navbar-link class="navbar-link">
            <router-link :to="{ name: 'dashboard' }" exact-active-class="route-active"
              >Dashboard</router-link
            >
          </fwb-navbar-link>

          <fwb-navbar-link
            class="navbar-link block py-2 pr-4 pl-3 rounded md:p-0"
            link="#"
            @click.stop="logout"
            >Logout</fwb-navbar-link
          >
        </template>
        <fwb-navbar-link class="navbar-link" v-else>
          <router-link :to="{ name: 'login' }" exact-active-class="route-active">Login</router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>
@/composables/logout
