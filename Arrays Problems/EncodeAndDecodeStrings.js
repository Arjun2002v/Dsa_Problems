const Encode = (array) => {
  let size = [];
  let resut = "";

  //Collect the sizes
  for (let s of array) {
    size.push(s.length);
  }
  //Encode the size
  for (let sz of size) {
    resut = resut + sz;
  }

  resut = resut + "#";

  //Append and join everything
  for (let s of array) {
    resut += s;
  }
  return resut;
};
console.log(Encode(["Leet"]));

const Decode = (array) => {};
