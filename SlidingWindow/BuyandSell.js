const BuyandSell = (array) => {
  let left = 0;   // buy pointer
  let right = 1;  // sell pointer
  let maxProfit = 0;

  while (right < array.length) {

    if (array[right] > array[left]) {
      // valid transaction — selling higher than we bought
      maxProfit = Math.max(maxProfit, array[right] - array[left]);
    } else {
      // found a cheaper price — move buy pointer here
      // (no point buying at left if right is already cheaper)
      left = right;
    }

    right++;
  }

  return maxProfit;
};

console.log(BuyandSell([7, 1, 5, 3, 6, 4])); // 5

// Time:  O(n) — single pass through the array
// Space: O(1) — no extra data structures