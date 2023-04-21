import { h } from 'vue';
import { QIcon, QItem, QItemSection, QList, QSelect } from 'quasar';

export default {
  name: 'q-cascader',

  setup(props, { attrs }) {
    console.log(attrs.options);

    const options = attrs.options;

    function renderContainer() {
      return h('div', { class: 'flex' }, renderList());
    }

    function renderList() {
      return h(QList, null, () => renderItem());
    }

    function renderItem() {
      return h(QItem, { clickable: true }, () => renderItemSection());
    }

    function renderItemSection() {
      return [h(QItemSection, null, () => 'option'), renderArrow()];
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
