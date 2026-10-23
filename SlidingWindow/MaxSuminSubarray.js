const maxSubArray = (array) => {
    let currentSum = array[0];
    let maxSum = array[0];

    for (let i = 1; i < array.length; i++) {

        if (currentSum + array[i] > array[i]) {
            currentSum = currentSum + array[i];
        } else {
            currentSum = array[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6