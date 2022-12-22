<template>
  <div>
    <div class="mx-9 mt-2 h-96 w-[130%] border-4 border-tok-700">
      <div
        :style="{
          backgroundImage: `url(${bgImg})`,
          // backgroundSize: '10%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }"
        class="flex justify-center"
      >
        <div class="flex-row justify-center">
          <div class="flex justify-center"><img :src="community.crest" class="h-40" /></div>
          <div class="flex justify-center p-2 text-4xl font-bold italic">
            {{ community.name }}
          </div>
        </div>
      </div>
      <div class="p-2">
        <div>Name: {{ community.name }}</div>
        <div>Inhaber: {{ community.owner.name }}</div>
        <div>Mitglieder: {{ community.memberCount }}</div>
        <div class="capitalize">Status: {{ community.level }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImg from '../assets/sandstone.jpg';

const props = defineProps({
  community: Object,
});
</script>
