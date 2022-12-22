<template>
  <AppCommunityOverview v-if="myCommunity" :community="myCommunity" />
  <AppCommunityCreate v-else />
</template>

<script async setup> // TODO: Test without async
import { ref, reactive } from 'vue';
import { getMyCommunity } from '@/apollo/queries';
import apolloClient from '@/plugins/apollo';

import AppCommunityOverview from './AppCommunityOverview.vue';
import AppCommunityCreate from './AppCommunityCreate.vue';

const myCommunity = reactive(); // TODO: Check me

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
  myCommunity = myCom;
}
</script>
