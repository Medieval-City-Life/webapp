<template lang="">
  <slot />
  <div class="text-left flex">
    <AppSideNavi />
    <AppInventory v-if="currentPage === 'inventory'"></AppInventory>
  </div>
</template>

<script setup>
import AppSideNavi from './AppSideNavi.vue';
import AppInventory from './AppInventory.vue';
import { useDashboardStore } from '@/stores/useDashboard';
import { storeToRefs } from 'pinia';

const { currentPage } = storeToRefs(useDashboardStore())

</script>
