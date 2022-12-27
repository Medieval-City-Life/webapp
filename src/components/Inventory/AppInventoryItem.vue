<template>
  <div class="group relative">
    <div
      class="relative m-1 h-[70px] w-[70px] border-2 border-tok-700 block"
      :style="{
        backgroundImage: `url(${item.itemDef.img})`,
        backgroundSize: '100%',
      }"
    >
      <div class="absolute bottom-0 right-0 bg-white px-1 font-bold">{{ item.amount }}</div>

      <AppInventoryItemOverlay :item="item" class=""/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppInventoryItemOverlay from './AppInventoryItemOverlay.vue';

defineProps({
  item: Object,
});
</script>

<style scoped>
.item-img {
  background-image: v-bind('item.itemDef.img');
}
</style>
