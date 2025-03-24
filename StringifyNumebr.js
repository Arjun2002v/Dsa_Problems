let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const clone = (obj) => {
  let cloned = JSON.parse(JSON.stringify(obj));

  console.log("Cloned Object:", cloned);
  for (let key in cloned) {
    console.log("fs", key);
    if (typeof cloned[key] === "object" && cloned[key] !== null) {
      cloned[key] = clone(cloned[key]);
    } else if (typeof cloned[key] === "number" && cloned[key] !== null) {
      cloned[key] = String(cloned[key]);
    }
  }
  return cloned;
};

const clonedObj = clone(obj);
console.log(clonedObj);
