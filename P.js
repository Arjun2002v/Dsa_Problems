const Anagrams = (array) => {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    const count = new Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      const char = word.charCodeAt(j) - 97;
      count[char]++;
    }
    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + count[k] + "#";
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

console.log(Anagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
