import { h, nextTick, reactive, withDirectives } from 'vue';
import { ClosePopup, QIcon, QItem, QItemSection, QList, QSelect } from 'quasar';
import { depth } from '../utils.js';

export default {
  name: 'q-cascader',

  setup(props, { attrs, emit }) {
    const lists = reactive([attrs.options]);

    function renderOptions() {
      return h(
        'div',
        { class: 'flex' },
        lists.map(list => renderList(list))
      );
    }

    function renderList(list) {
      return h(QList, null, () => list.map(item => renderItem(item)));
    }

    function renderItem(item) {
      const expandable = Boolean(item.children && item.children.length);

      return withDirectives(
        h(
          QItem,
          {
            clickable: true,
            onClick: () => {
              if (expandable) {
                lists.splice(depth(attrs.options, item.id) + 1);
                nextTick(() => lists.push(item.children));
              } else {
                emit('update:model-value', item);
              }
            }
          },
          () => [
            h(QItemSection, null, () => item.label),
            expandable && h(QItemSection, { side: true }, () => h(QIcon, { name: 'keyboard_arrow_right' }))
          ]
        ),
        [[!expandable && ClosePopup]]
      );
    }

    return () => {
      return h(
        QSelect,
        { 'popup-content-class': 'q-cascader' },
        {
          'before-options': () => renderOptions(),
          'option': () => h('div')
        }
      );
    };
  }
};
