import { h } from 'vue';
import { QItem, QItemSection, QList, QSelect } from 'quasar';

export default {
  name: 'q-cascader',

  setup(props, { attrs }) {
    console.log(attrs.options);

    const options = attrs.options;

    function renderContainer() {
      return h('div', { class: 'flex' }, renderList());
    }

    function renderList() {
      return h(QList, null, { default: renderItem() });
    }

    function renderItem() {
      return () => h(QItem, null, { default: renderItemSection() });
    }

    function renderItemSection() {
      return () => h(QItemSection, null, () => 'option');
    }

    return () => {
      const cascader = h(QSelect, null, {
        'before-options': () => renderContainer(),
        'option': () => h('div')
      });

      return cascader;
    };
  }
};
