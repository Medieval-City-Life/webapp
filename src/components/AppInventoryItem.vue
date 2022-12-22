<template>
  <div class="group relative">
    <div
      class="relative z-20 m-1 h-[70px] w-[70px] border-2 border-tok-700"
      :style="{
        backgroundImage: `url(${item.itemDef.img})`,
        backgroundSize: '100%',
      }"
    >
      <div class="absolute bottom-0 right-0 bg-white px-1 font-bold">{{ item.amount }}</div>
    </div>

    <AppInventoryItemOverlay
      :item="item"
      class="duration- pointer-events-none absolute top-5 left-3 z-50 opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppInventoryItemOverlay from './AppInventoryItemOverlay.vue';

defineProps({
  item: Object,
});

const hovered = ref(false);

const onHover = () => {
  console.log('hovered');
  hovered.value = !hovered.value;
};
</script>

<style scoped>
.item-img {
  background-image: v-bind('item.itemDef.img');
}
</style>
