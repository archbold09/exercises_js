function createXmasTree(height) {
  if (!Math.abs(height)) return 'Debe ser un numero positivo o mayor a 0';
  if (height > 100) return 'La altura maxima es de 100';

  const treeObj = {
    asterisk: '*',
    underscore: '_',
    stem: '#'
  };

  const { asterisk, underscore, stem } = treeObj;

  let tree = '';

  for (let i = 1; i <= height; i++) {
    tree = tree.concat(underscore.repeat(height - i), asterisk.repeat(i + i - 1), underscore.repeat(height - i), '\n');
  }

  tree = tree.concat(underscore.repeat(height - 1), stem, underscore.repeat(height - 1), '\n');
  tree = tree.concat(underscore.repeat(height - 1), stem, underscore.repeat(height - 1));

  return tree;
}

console.log(createXmasTree(3));
