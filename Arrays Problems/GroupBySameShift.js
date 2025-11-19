const GroupBySameShift = (array) => {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    let key = "";

    for (let j = 0; j < word.length; j++) {
      let diff = word.charCodeAt(j) - word.charCodeAt(j - 1);

      if (diff < 0) {
        diff = diff + 26;
      }
      key = key + diff + "#";
    }

    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  const result = [];
  for (let key in map) {
    result.push(map[key]);
  }
  return result;
};
console.log(
  GroupBySameShift(["abc", "bcd", "abcd", "lmn", "xyz", "az", "ba", "a", "z"])
);
