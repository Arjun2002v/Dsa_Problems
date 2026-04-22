const rotateBynumPlace = (array, num) => {
    const n = array.length;

    // Handle cases where num > n
    const target = num % n;

    // Temporary arrayay to store first 'target' elements
    const temp = [];

    // Step 1: Store first 'target' elements
    for (let i = 0; i < target; i++) {
        temp.push(array[i]);
    }

    // Step 2: Shift remaining elements to the left
    for (let i = target; i < n; i++) {
        array[i - target] = array[i];
    }

    // Step 3: Place stored elements at the end
    for (let i = n - target; i < n; i++) {
        array[i] = temp[i - (n - target)];
    }

    return array;
};

console.log(rotateBynumPlace([1, 2, 3, 4, 5, 6, 7], 10));