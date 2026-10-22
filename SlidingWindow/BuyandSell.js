const Buy = (array) => {
    let left = 0;
    let right = 1;
    let max = 0;

    while (right < array.length) {
        if (array[left] < array[right]) {
            let profit = array[right] - array[left];

            if (profit > max) {
                max = profit;
            }
        } else {
            left = right;
        }

        right++;
    }

    return max;
};

console.log(Buy([7, 1, 5, 3, 6, 4])); // 5