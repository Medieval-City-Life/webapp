<template>
  <div
    class="pointer-events-none absolute top-8 left-3 flex h-max w-max border-4 border-tok-700 bg-tok-300 opacity-0 shadow-2xl transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
  >
    <img :src="item.itemDef.img" class="w-28 border-r-2 border-tok-700" />
    <div>
      <div
        class="flex justify-center border-b-2 border-tok-700 bg-orange-100 font-bold capitalize shadow-lg"
      >
        {{ item.itemDef.name }}
      </div>
      <div class="mx-4 font-bold">
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
