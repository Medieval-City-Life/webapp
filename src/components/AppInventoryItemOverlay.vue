<template>
  <div class="h-max border-4 border-tok-700 flex bg-tok-100 shadow-2xl">
    <img :src="item.itemDef.img" class="w-28 border-r-2 border-tok-700" />
    <div>
      <div class="bg-orange-100 flex justify-center capitalize border-b-2 border-tok-700 font-bold shadow-lg ">{{ item.itemDef.name }}</div>
      <div class="mx-4">
        <div>Anzahl: {{ item.amount }}</div>
        <div>Kategorie: {{ item.itemDef.category }}</div>
        <hr class="border-2 border-tok-700" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});
</script>
