# Component QCascader

[![npm](https://img.shields.io/npm/v/@660e/quasar-ui-qcascader.svg?label=@660e/quasar-ui-qcascader)](https://www.npmjs.com/package/@660e/quasar-ui-qcascader)
[![npm](https://img.shields.io/npm/dt/@660e/quasar-ui-qcascader.svg)](https://www.npmjs.com/package/@660e/quasar-ui-qcascader)

**Compatible with Quasar UI v2 and Vue 3**.

![QCascader](https://660e.github.io/assets/qcascader.png)

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

# Usage

## Quasar CLI project

Install the [App Extension](https://github.com/660e/quasar-ui-qcascader/tree/main/app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from 'vue';
import Plugin from '@660e/quasar-ui-qcascader';
import '@660e/quasar-ui-qcascader/dist/index.css';

Vue.use(Plugin);
```

**OR**:

```html
<style src="@660e/quasar-ui-qcascader/dist/index.css"></style>

<script>
  import { Component as QCascader } from '@660e/quasar-ui-qcascader';

  export default {
    components: {
      QCascader
    }
  };
</script>
```

## Vue CLI project

```js
import Vue from 'vue';
import Plugin from '@660e/quasar-ui-qcascader';
import '@660e/quasar-ui-qcascader/dist/index.css';

Vue.use(Plugin);
```

**OR**:

```html
<style src="@660e/quasar-ui-qcascader/dist/index.css"></style>

<script>
  import { Component as QCascader } from '@660e/quasar-ui-qcascader';

  export default {
    components: {
      QCascader
    }
  };
</script>
```

## UMD variant

Exports `window.QCascader`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/@660e/quasar-ui-qcascader/dist/index.min.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/@660e/quasar-ui-qcascader/dist/index.umd.min.js"></script>
</body>
```

If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):

```html
<link href="https://cdn.jsdelivr.net/npm/@660e/quasar-ui-qcascader/dist/index.rtl.min.css" rel="stylesheet" type="text/css" />
```

# Setup

```bash
$ yarn
```

# Developing

```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package

```bash
$ yarn build
```

# License

MIT (c) 660e
