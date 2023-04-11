<script setup>
import { ref } from 'vue';

const model = ref();
const options = ref([
  { id: 1, label: 'node-1' },
  { id: 2, label: 'node-2' },
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
