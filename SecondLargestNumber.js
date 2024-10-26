//Brute Force Approach

// const secondLargest = (arr) => {
//   const unique = Array.from(new Set(arr));
//   unique.sort((a, b) => {
//     return b - a;
//   });
//   if (unique.length >= 2) {
//     return unique[1];
//   } else {
//     return false;
//   }
// };
// console.log(secondLargest([3, 2, 2, 1, 5, 6]));

//Optimised Approach
const optimised = (arr) => {
  let largest = Number.NEGATIVE_INFINITY; //track the numbers
  let second = Number.NEGATIVE_INFINITY; //track the numbers
  const uni = new Map(arr); // Removing duplicates
  for (let i = 0; i < uni.length; i++) {
    if (uni[i] > largest) {
      second = largest;
      largest = uni[i];
    } else if (uni[i] != largest && uni[i] > second) {
      second = uni[i];
    }
  }
  return second; // Return the second largest value
};

console.log(optimised([3, 4, 6, 9, 7]));

// First Iteration :  3 > -1 => second = -1 , largest = 3
// Second Iteration : 4 > 3 => second = 3 , largest = 4
// Third Iteration : 6 > 4 => second = 4 , largest = 6
//Fourth Iteration : 9 > 6 => second = 6, largest = 9
//Fiveth Iteration : 7 > 9 else  7 > 6 =>  second = 7 ,largest = 9


