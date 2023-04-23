import { h, nextTick, reactive, withDirectives } from 'vue';
import { ClosePopup, QIcon, QItem, QItemSection, QList, QSelect, QSeparator } from 'quasar';
import { findDepth } from '../utils.js';

const useCascaderProps = {
  optionsDense: Boolean
};

export default {
  name: 'q-cascader',

  props: {
    ...useCascaderProps
  },

  setup(props, { attrs, emit }) {
    const lists = reactive([attrs.options]);
    const actives = reactive([]);

    function renderOptions() {
      return h(
        'div',
        { class: 'flex' },
        lists.map((list, index) => [index !== 0 && h(QSeparator, { vertical: true }), renderList(list)])
      );
    }

    function renderList(list) {
      return h(QList, { dense: props.optionsDense }, () => list.map(item => renderItem(item)));
    }

    function renderItem(item) {
      const expandable = Boolean(item.children && item.children.length);

      return withDirectives(
        h(
          QItem,
          {
            active: actives.includes(item.id),
            clickable: true,
            onClick: () => {
              const depth = findDepth(attrs.options, item.id);

              lists.splice(depth + 1);
              actives.splice(depth);
              nextTick(() => actives.push(item.id));

              if (expandable) {
                nextTick(() => lists.push(item.children));
              } else {
                emit('update:model-value', item);
              }
            }
          },
          () => [
            h(QItemSection, null, () => item.label),
            expandable && h(QItemSection, { avatar: true }, () => h(QIcon, { name: 'keyboard_arrow_right' }))
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
