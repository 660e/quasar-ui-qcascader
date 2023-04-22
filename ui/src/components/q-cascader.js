import { h, reactive, withDirectives } from 'vue';
import { ClosePopup, QIcon, QItem, QItemSection, QList, QSelect, QSeparator } from 'quasar';
import { depth } from '../utils.js';

export default {
  name: 'q-cascader',

  setup(props, { attrs, emit }) {
    const lists = reactive([attrs.options]);

    function renderContainer() {
      return h(
        'div',
        {
          class: 'flex'
        },
        lists.map((list, index) => [index !== 0 && h(QSeparator, { vertical: true }), renderList(list)])
      );
    }

    function renderList(options) {
      return h(QList, null, () => options.map(option => renderItem(option)));
    }

    function renderItem(option) {
      const expandable = Boolean(option.children && option.children.length);

      const item = withDirectives(
        h(
          QItem,
          {
            clickable: true,
            onClick: () => {
              if (expandable) {
                console.log(depth(attrs.options, option.id));
                lists.push(option.children);
              } else {
                emit('update:model-value', option);
              }
            }
          },
          () => [
            h(QItemSection, null, () => option.label),
            expandable && h(QItemSection, { side: true }, () => h(QIcon, { name: 'keyboard_arrow_right' }))
          ]
        ),
        [[!expandable && ClosePopup]]
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
