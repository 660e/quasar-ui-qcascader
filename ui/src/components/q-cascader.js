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
      return h(QItem, { clickable: true }, () => renderItemSection(option));
    }

    function renderItemSection(option) {
      return [h(QItemSection, null, () => option.label), option.children && option.children.length ? renderArrow() : null];
    }

    function renderArrow() {
      return h(QItemSection, { side: true }, () => h(QIcon, { name: 'keyboard_arrow_right' }));
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
