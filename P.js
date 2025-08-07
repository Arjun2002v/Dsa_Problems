const Encode = (array) => {
  if (array.length === 0) return "";
  let sizes = [],
    res = "";
  for (let s of array) {
    sizes.push(s.length);
  }
  for (let sz of sizes) {
    res += sz + ",";
  }
  res += "#";
  for (let s of array) {
    res += s;
  }
  return res;
};
console.log(Encode(["leet", "123", "code"]));
