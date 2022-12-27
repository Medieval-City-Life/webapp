<template>
  <div class="flex justify-center">
    <div
      v-for="{id, label} in tabs"
      :key="id"
      class="mx-2"
      :class="active === id ? 'font-semibold text-lg' : ''"
      @click="$emit('update', id)"
    >
      {{ label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  active: { type: String, required: true }
})

defineEmits(['update'])

const tabs = [
  {
    id: 'overview',
    label: 'Übersicht'
  },
  {
    id: 'buildings',
    label: 'Gebäude'
  },
  {
    id: 'members',
    label: 'Mitglieder'
  },
  {
    id: 'settings',
    label: 'Einstellungen'
  },
  {
    id: 'logs',
    label: 'Logs'
  }
]
</script>
