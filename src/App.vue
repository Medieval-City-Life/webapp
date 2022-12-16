<template>
  <Suspense>
  <div class="text-brown bg-primary h-screen">
    <AppLoginForm v-if="!loggedIn" />
    <AppDashboard v-else>
      <AppHeader />
    </AppDashboard>
    <AppError v-if="message"/>
  </div>
  </Suspense>
</template>

<script setup>
import AppLoginForm from './components/AppLoginForm.vue';
import AppDashboard from './components/AppDashboard.vue';
import AppError from './components/AppError.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';
import { useErrorsStore } from './stores/useErrors';
import './assets/tailwind.css';
import AppHeader from './components/AppHeader.vue';

const { loggedIn } = storeToRefs(useUserStore());
const { message, code } = storeToRefs(useErrorsStore());
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
