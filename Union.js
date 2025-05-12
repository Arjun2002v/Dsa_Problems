const Union = (array1, array2) => {
  const hashmap = {};
  let final = [];
  for (let i = 0; i < array1.length; i++) {
    if (!hashmap[array1[i]]) {
      // if not in hashmap set it as true to show it is present in the map
      hashmap[array1[i]] = true;
      final.push(array1[i]); // then push the element to the final array
    }
    for (let i = 0; i < array2.length; i++) {
      if (!hashmap[array2[i]]) {
        hashmap[array2[i]] = true;
        final.push(array2[i]);
      }
    }
  }
  return final; // then return final array
};
console.log(Union([1, 2, 3, 4, 5], [3, 4]));
