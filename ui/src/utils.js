export function findDepth(tree, id) {
  let depth = 0;

  function find(tree, id, current) {
    tree.forEach(e => {
      if (e.id === id) {
        depth = current;
      } else if (e.children) {
        find(e.children, id, current + 1);
      }
    });
  }

  find(tree, id, depth);

  return depth;
}
