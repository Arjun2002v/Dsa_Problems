const Anagrams = (array) => {
  let hashmap = new Map();
  let frequency = {};

  frequency[array] = (frequency[array] || 0) + 1;

  console.log(frequency);
};
console.log(Anagrams("oioi", "dsji"));
