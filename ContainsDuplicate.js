const duplicate = (arr) => {
  const map = new Map(); // used to store the values in the hashMap
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // check for any duplicate in the hashmap
      return true;
    }
    map.set(arr[i]); // if not add the element to the hashMap
  }
  return false;
  console.log(d);
};
