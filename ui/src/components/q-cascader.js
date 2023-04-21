import { h, withDirectives } from 'vue';
import { ClosePopup, QIcon, QItem, QItemSection, QList, QSelect } from 'quasar';

export default {
  name: 'q-cascader',

  setup(props, { attrs, emit }) {
    function renderContainer() {
      return h('div', { class: 'flex' }, renderList(attrs.options));
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
                console.log(option.children);
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
        [[expandable || ClosePopup]]
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
