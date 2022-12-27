<template>
  <div>
    <div
      :style="{
        backgroundImage: `url(${bgImg})`,
        // backgroundSize: '10%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      }"
      class="flex justify-center object-cover"
    >
      <div class="flex-row justify-center">
        <div class="flex justify-center"><img :src="community.crest" class="h-40" /></div>
        <div class="flex justify-center p-2 text-4xl font-bold italic text-white">
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
</template>

<script setup>
import bgImg from '../../assets/stone-wall.jpg';

const props = defineProps({
  community: Object,
});
</script>
