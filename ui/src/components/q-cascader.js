import { h, nextTick, reactive, withDirectives } from 'vue';
import { ClosePopup, extend, QIcon, QItem, QItemSection, QList, QSelect, QSeparator } from 'quasar';

const useCascaderProps = {
  optionsDense: Boolean
};

function findPath(tree, targetId) {
  for (let node of tree) {
    if (node.id === targetId) {
      return [node.id];
    }
    if (node.children) {
      const path = findPath(node.children, targetId);
      if (path) {
        return [node.id, ...path];
      }
    }
  }
  return null;
}

function findDepth(tree, targetId, depth = 0) {
  for (let node of tree) {
    if (node.id === targetId) {
      return depth;
    }
    if (node.children) {
      const childDepth = findDepth(node.children, targetId, depth + 1);
      if (childDepth !== -1) {
        return childDepth;
      }
    }
  }
  return -1;
}

function flattenTree(tree) {
  return tree.reduce((acc, node) => {
    const children = node.children ? flattenTree(node.children) : [];
    return [...acc, node, ...children];
  }, []);
}

export default {
  name: 'q-cascader',

  props: {
    ...useCascaderProps
  },

  setup(props, { attrs, emit }) {
    const flat = flattenTree(extend(true, [], attrs.options));

    const lists = reactive([attrs.options]);
    const actives = reactive([]);

    function onPopupShow() {
      lists.splice(1);
      actives.splice(0);

      if (attrs.modelValue !== undefined && attrs.modelValue !== null) {
        const path = findPath(attrs.options, attrs.modelValue.id);

        path.forEach((item, index) => {
          index !== path.length - 1 && lists.push(flat.find(e => e.id === item).children);
          actives.push(item);
        });
      }
    }

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
        {
          onPopupShow,
          'popup-content-class': 'q-cascader'
        },
        {
          'before-options': () => renderOptions(),
          'option': () => h('div')
        }
      );
    };
  }
};
