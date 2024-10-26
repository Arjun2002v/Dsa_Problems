//Array declaration

let person = { name: "Arjun", age: 22 };
let array = ["chigga", person];

//Array pushing to the end of the array
array.push("mango");
console.log(array);

//Removing array from the End
array.pop();
console.log(array);

//Looping an array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const number = [1, 2, 3, 4, 5];

let newNum = number.map((num) => {
  return num * 2 + 1;
});
console.log(newNum);

// Spread :  new array without modifying any existing arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num = [];

//Concat : new array without modifying any existing arrays

const news = num.concat(num1, num2);

console.log(news);

//Slice : (0,3) will reject everything after 2nd index
const dummy = [1, 2, 3, 4, 5, 6, 7];
const sliced = dummy.slice(0, 3);
console.log(sliced);
