<template lang="">
  <div>
    <div class="text-2xl font-bold capitalize">Willkommen {{ user.name }}!</div>
    <div class="text-xs">ID: {{ user._id }}</div>
    <AppButton @click="handleLogoutClick">Ausloggen</AppButton>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';

import AppButton from './AppButton.vue';

const { user } = storeToRefs(useUserStore());
const { logout } = useUserStore();

const handleLogoutClick = () => {
  logout();
};
</script>