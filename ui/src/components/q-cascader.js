import { h } from 'vue';
import { QIcon, QItem, QItemSection, QList, QSelect } from 'quasar';

export default {
  name: 'q-cascader',

  setup(props, { attrs }) {
    function renderContainer() {
      return h('div', { class: 'flex' }, renderList(attrs.options));
    }

    function renderList(options) {
      return h(QList, null, () => options.map(option => renderItem(option)));
    }

    function renderItem(option) {
      const content = [h(QItemSection, null, () => option.label)];

      if (option.children && option.children.length) {
        content.push(h(QItemSection, { side: true }, () => h(QIcon, { name: 'keyboard_arrow_right' })));
      }

      const item = h(
        QItem,
        {
          clickable: true,
          onClick: () => console.log(option.id)
        },
        () => content
      );

      return item;
    }

    return () => {
      const cascader = h(
        QSelect,
        {
          'popup-content-class': 'q-cascader'
        },
        {
          'before-options': () => renderContainer(),
          'option': () => h('div')
        }
      );

      return cascader;
    };
  }
};
