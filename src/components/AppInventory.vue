<template>
  <div class="flex ml-3 mt-2 h-max bg-primary border-4 border-tok-700">
    <AppInventoryItem v-for="item in myInventory" :amount=item.amount >{{item.itemDef.name}}</AppInventoryItem>
  </div>
</template>

<script setup>
import AppInventoryItem from './AppInventoryItem.vue';
import { ref } from 'vue';
import apolloClient from '@/plugins/apollo';
import { getInventory } from '@/apollo/queries';

const myInventory = ref();

await apolloClient
  .query({
    query: getInventory,
  })
  .then((res) => myInventory.value = res.data.getInventory);
</script>