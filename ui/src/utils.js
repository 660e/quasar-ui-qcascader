export function depth(options, id) {
  let depth = 0;

  function find(options, id, current) {
    options.forEach(option => {
      if (option.id === id) {
        depth = current;
      } else if (option.children) {
        find(option.children, id, current + 1);
      }
    });
  }

  find(options, id, depth);

  return depth;
}
