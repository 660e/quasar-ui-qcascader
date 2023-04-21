<script setup>
import { ref } from 'vue';

const model = ref();
const options = ref([
  { id: 1, label: 'node-1', children: [] },
  {
    id: 2,
    label: 'node-2',
    children: [
      { id: 21, label: 'node-2-1' },
      { id: 22, label: 'node-2-2' },
      { id: 23, label: 'node-2-3' },
      { id: 24, label: 'node-2-4' }
    ]
  },
  {
    id: 3,
    label: 'node-3',
    children: [
      { id: 31, label: 'node-3-1' },
      { id: 32, label: 'node-3-2' },
      {
        id: 33,
        label: 'node-3-3',
        children: [
          { id: 331, label: 'node-3-3-1' },
          { id: 332, label: 'node-3-3-2' },
          { id: 333, label: 'node-3-3-3' }
        ]
      }
    ]
  }
]);
</script>

<template>
  <q-page padding>
    <q-cascader v-model="model" :options="options" label="Outlined" dense outlined />
  </q-page>
</template>
