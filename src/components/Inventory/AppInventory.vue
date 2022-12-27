<template>
  <div class="flex flex-wrap h-max bg-primary border-4 border-tok-700">
    <AppInventoryItem v-for="(item, index) in myInventory" :item=item :key="index" />
  </div>
</template>

<script setup>
import AppInventoryItem from './AppInventoryItem.vue';
import { ref, watch } from 'vue';
import apolloClient from '@/plugins/apollo';
import { getInventory } from '@/apollo/queries';
import AppInventoryItemOverlay from './AppInventoryItemOverlay.vue';

const myInventory = ref();

await apolloClient
  .query({
    query: getInventory,
  })
  .then((res) => myInventory.value = res.data.getInventory);
</script>