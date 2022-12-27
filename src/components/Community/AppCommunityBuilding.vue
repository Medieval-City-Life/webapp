<template>
  <div class="flex flex-col">
    <span>Name: {{ building.name }}</span>
    <span>Level: {{ building.level }}</span>
    <span>Inhaber: {{ building.owner }}</span>
    <span
      >Produkte:
      <span v-for="(product, index) in building.products">{{ product.itemDef.name }}</span></span>
  </div>
</template>

<script setup>
defineProps({
  building: Object,
});
</script>
