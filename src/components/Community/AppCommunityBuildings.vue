<template>
  <div class="ml-2">
    <AppCommunityBuilding
      v-for="(building, index) in communityBuildings"
      :key="index"
      :building="building"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import apolloClient from '@/plugins/apollo';
import { getBuildings } from '@/apollo/queries';

import AppCommunityBuilding from './AppCommunityBuilding.vue';

const communityBuildings = ref();

await apolloClient
  .query({
    query: getBuildings,
  })
  .then((res) => (communityBuildings.value = res.data.getBuildings));
</script>
