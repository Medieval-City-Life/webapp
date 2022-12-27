<template lang="">
  <slot />
  <div class="text-left flex">
    <AppSideNavi />
    <div class="w-[85vw] m-2">
      <AppInventory v-if="currentPage === 'inventory'" />
      <AppCommunity v-if="currentPage === 'community'" />
    </div>
  </div>
</template>

<script setup>
import AppSideNavi from '../SideNavi/AppSideNavi.vue';
import AppInventory from '../Inventory/AppInventory.vue';
import AppCommunity from '../Community/AppCommunity.vue';
import { useDashboardStore } from '@/stores/useDashboard';
import { storeToRefs } from 'pinia';

const { currentPage } = storeToRefs(useDashboardStore())

</script>
