const GroupAnagram = (array) => {
  const map = {};

  for (i = 0; i < array.length; i++) {
    const word = array[i];

    //Make an array of 26 letters
    const count = new Array(26).fill(0);

    //This Loop to Calculate position and index of each word
    for (j = 0; j < word.length; j++) {
      const char = word.charCodeAt(j) - 97; // a = 97
      count[char]++;
    }

    //Create a Key Manually for uniqueness

    let key = "";
    for (k = 0; k < 26; k++) {
      key = key + count[k] + "#";
    }

    //Group words by the frequency Key
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  //Collect Grouped Anagrams and push it to the result array
  const result = [];
  for (let key in map) {
    result.push(map[key]);
  }
  return result;
};

console.log(GroupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));
