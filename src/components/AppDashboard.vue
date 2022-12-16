<template lang="">
  <slot />
  <div class="text-left ml-3">
    <div>
      <div class="text-left mt-4">Inventar</div>
      <div class="flex flex-row">
        <div v-for="(item, index) in myInventory" class="ml-3">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import apolloClient from '@/plugins/apollo';
import { getInventory } from '@/apollo/queries';

const myInventory = ref()

await apolloClient.query({
    query: getInventory
  }).then(res => myInventory.value = res.data.getInventory.items)

</script>