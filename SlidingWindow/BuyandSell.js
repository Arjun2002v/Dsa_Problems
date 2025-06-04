const BuyandSell = (array) => {
  let right = 1;
  let left = 0;
  let max = 0;

  while (right < array.length) {
    if (array[right] > array[left]) {
      let profit = array[right] - array[left];
      if (max < profit) {
        max = profit;
      }
    } else {
      left = right;
    }
    right++;
  }
  return max;
};
console.log(BuyandSell([4, 2, 1, 5, 7]));
