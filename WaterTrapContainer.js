const TrapWater = (array) => {
  let left = 0;
  let right = array.length - 1;
  let LeftMax = 0;
  let RightMax = 0;
  let total = 0;
  while (left < right) {
    if (array[left] < array[right]) {
      if (array[left] >= LeftMax) {
        LeftMax = array[left];
      } else {
        total = total + LeftMax - array[left];
      }
      left++;
    } else {
      if (array[right] >= RightMax) {
        RightMax = array[right];
      } else {
        total = total + RightMax - array[right];
      }
      right++;
    }
  }
  return total;
};
console.log(TrapWater([2, 1, 4, 3, 1, 5]));

//Step for Trap Water Problem

//1. Take an array of numbers
//2. Set the left and right to 0
//3. Set the LeftMax and RightMax to 0
//4. Create a variable to store the total water
//5. While the left is less than the right
//6. If the left is less than the right
//7. If the left is greater than or equal to the LeftMax
//8. Set the LeftMax to the left
//9. Else
//10. Add the LeftMax to the total
//11. Increment the left
//12. Else
//13. If the right is greater than or equal to the RightMax
//14. Set the RightMax to the right
//15. Else
//16. Add the RightMax to the total
//17. Increment the right
//18. Return the total
