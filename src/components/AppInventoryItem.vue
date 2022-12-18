<template>
  <div class="w-[70px] h-[70px] border-2 border-tok-700 m-1 flex justify-center">
    <slot />{{amount}}
  </div>
</template>

<script setup>
  defineProps({
    amount: Number
  });
</script>