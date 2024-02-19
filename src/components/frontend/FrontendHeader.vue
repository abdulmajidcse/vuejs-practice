<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue'
import logo from '@/assets/img/logo.png'
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

        <fwb-navbar-link class="navbar-link">
          <router-link :to="{ name: 'login' }" exact-active-class="route-active">Login</router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>
