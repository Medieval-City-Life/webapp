<template>
  <div style="background-image: url('../assets/header-bg.jpg')" class="bgImage">
    <div class="bgColor">
      <div class="h-[9vh] border-tok-700 rounde border-b-4 shadow-2xl text-tok-300">
      <div class="ml-3">
        <span class="text-2xl font-bold capitalize">Willkommen {{ user.name }}!</span>
        <AppButton @click="handleLogoutClick" class="ml-3">Ausloggen</AppButton>
        <div class="text-xs pb-6">ID: {{ user._id }}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../../stores/user';
import { storeToRefs } from 'pinia';

import AppButton from '../General/AppButton.vue';

const { user } = storeToRefs(useUserStore());
const { logout } = useUserStore();

const handleLogoutClick = () => {
  logout();
};
</script>

<style>
  .bgImage {
    background-image: url('../../assets/header-bg.jpg');
  }

  .blackOpacity {
    background-color: rgba(1,1,1, 0.5);
  }
</style>