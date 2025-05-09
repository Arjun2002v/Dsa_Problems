const Union = (array1, array2) => {
  let hashmap = {};
  let final = [];
  for (let i = 0; i < array1.length; i++) {
    if (!hashmap[array1[i]]) {
      hashmap[array1[i]] = true;
      final.push(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
      if (!hashmap[array2[i]]) {
        hashmap[array2[i]] = true;
        final.push(array2[i]);
      }
    }
    return final;
  }
};

console.log(Union([1, 2, 3], [2, 3, 5]));
