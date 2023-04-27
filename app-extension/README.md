# Quasar App Extension QCascader

[![npm](https://img.shields.io/npm/v/@660e/quasar-app-extension-qcascader.svg?label=@660e/quasar-app-extension-qcascader)](https://www.npmjs.com/package/@660e/quasar-app-extension-qcascader)
[![npm](https://img.shields.io/npm/dt/@660e/quasar-app-extension-qcascader.svg)](https://www.npmjs.com/package/@660e/quasar-app-extension-qcascader)

# Example

```vue
<script setup>
import { reactive, ref } from 'vue';

const model = ref();
const options = reactive([
  { id: 1, label: 'Node 1' },
  {
    id: 2,
    label: 'Node 2',
    children: [
      { id: 21, label: 'Node 2.1' },
      { id: 22, label: 'Node 2.2' },
      {
        id: 23,
        label: 'Node 2.3',
        children: [
          { id: 231, label: 'Node 2.3.1' },
          { id: 232, label: 'Node 2.3.2' }
        ]
      },
      {
        id: 24,
        label: 'Node 2.4',
        children: [
          {
            id: 241,
            label: 'Node 2.4.1',
            children: [
              { id: 2411, label: 'Node 2.4.1.1' },
              { id: 2412, label: 'Node 2.4.1.2' },
              { id: 2413, label: 'Node 2.4.1.3' }
            ]
          },
          { id: 242, label: 'Node 2.4.2' }
        ]
      }
    ]
  },
  {
    id: 3,
    label: 'Node 3',
    children: [
      { id: 31, label: 'Node 3.1' },
      { id: 32, label: 'Node 3.2' }
    ]
  }
]);
</script>

<template>
  <q-cascader v-model="model" :options="options" label="Outlined" dense options-dense outlined />
</template>
```

# Install

```bash
quasar ext add @660e/qcascader
```

Quasar CLI will retrieve it from NPM and install the extension.

# Uninstall

```bash
quasar ext remove @660e/qcascader
```

# License

MIT (c) 660e
