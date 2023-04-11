import { h } from 'vue';
import { QBadge } from 'quasar';

export default {
  name: 'q-cascader',

  setup() {
    return () =>
      h(QBadge, {
        label: 'q-cascader'
      });
  }
};
