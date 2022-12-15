<template>
  <div class="text-brown bg-primary h-screen pt-10">
    <AppLoginForm v-if="!loggedIn" />
    <AppDashboard v-else />
    <AppError v-if="message"/>
  </div>
</template>

<script setup>
import AppLoginForm from './components/AppLoginForm.vue';
import AppDashboard from './components/AppDashboard.vue';
import AppError from './components/AppError.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';
import { useErrorsStore } from './stores/useErrors';
import './assets/tailwind.css';

const { loggedIn } = storeToRefs(useUserStore());
const { message, code } = storeToRefs(useErrorsStore());
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
