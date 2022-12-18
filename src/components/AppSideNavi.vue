<template>
  <div class="bgImg mt-2 ml-2 border-4 border-tok-700 shadow-2xl">
    <div class="h-[85vh] w-[15vw]">
      <AppSideNaviItem :class="[activePage === 1 ? 'bg-primary border-4' : 'hover:bg-primary border-2']" @click="btnClicked('profile')">Profil</AppSideNaviItem>
      <AppSideNaviItem :class="[activePage === 2 ? 'bg-primary border-4' : 'hover:bg-primary border-2']" @click="btnClicked('inventory')">Inventar</AppSideNaviItem>
      <AppSideNaviItem :class="[activePage === 3 ? 'bg-primary border-4' : 'hover:bg-primary border-2']" @click="btnClicked('city')">Stadt</AppSideNaviItem>
      <AppSideNaviItem :class="[activePage === 4 ? 'bg-primary border-4' : 'hover:bg-primary border-2']" @click="btnClicked('social')">Sozial</AppSideNaviItem>
      <AppSideNaviItem :class="[activePage === 5 ? 'bg-primary border-4' : 'hover:bg-primary border-2']" @click="btnClicked('settings')" >Einstellungen</AppSideNaviItem>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppSideNaviItem from './AppSideNaviItem.vue';
import { useDashboardStore } from '@/stores/useDashboard';
import { storeToRefs } from 'pinia';

const { currentPage } = storeToRefs(useDashboardStore())

const activePage = ref(1)

const btnClicked = (target) => {
  currentPage.value = target;

  switch (target) {
    case 'profile': 
      activePage.value = 1;
      break;
    case 'inventory': 
      activePage.value = 2;
      break;
    case 'city': 
      activePage.value = 3;
      break;
    case 'social': 
      activePage.value = 4;
      break;
    case 'settings': 
      activePage.value = 5;
      break;
  }
}
</script>

<style scope>
.bgImg {
  background-image: url('../assets/stone-wall.jpg');
}

.active {
  background-color: blue;
}
</style>
