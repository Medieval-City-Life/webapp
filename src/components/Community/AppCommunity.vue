<template>
  <div>
    <!-- <VueCountdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
</VueCountdown> -->
    <div class="bg-tok-200 border-4 border-tok-700">
      <AppTabs :active="activeTab" @update="(id) => (activeTab = id)" class="border-b-4 border-tok-700 overflow-hidden py-2 bg-tok-300"/>
      <AppCommunityOverview v-if="activeTab === 'overview'" :community="myCommunity" />
      <AppCommunityBuildings v-if="activeTab === 'buildings'" />
    </div>
    
  </div>
</template>

<script setup>
// TODO: Test without async
import { ref, reactive } from 'vue';
import { getMyCommunity } from '@/apollo/queries';
import apolloClient from '@/plugins/apollo';

import AppCommunityOverview from './AppCommunityOverview.vue';
import AppCommunityCreate from './AppCommunityCreate.vue';
import AppCommunityBuildings from './AppCommunityBuildings.vue';
import AppTabs from './AppCommunityTabs.vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

const activeTab = ref('overview');

const myCommunity = ref({}); // TODO: Check me

const { data } = await apolloClient.query({
  query: getMyCommunity,
});

let myCom = { ...data.getMyCommunity };

if (myCom.name) {
  switch (data.getMyCommunity.level) {
    case 1:
      myCom.level = 'dorf';
      break;
  }

  myCommunity.value = myCom;
}
</script>
