const RearrangePositive = (array) => {
    let ans = []          // result array; positives go to even indices, negatives to odd
    let postive = 0       // pointer for next even slot (0, 2, 4, ...)
    let negative = 1      // pointer for next odd slot (1, 3, 5, ...)

    for (let i = 0; i < array.length; i++) {   // single pass over the input
        if (array[i] > 0) {                    // positive number
            ans[postive] = array[i]            // place at current even index
            postive = postive + 2              // advance to next even slot
        } else {                               // negative number
            ans[negative] = array[i]           // place at current odd index
            negative = negative + 2            // advance to next odd slot
        }
    }

    return ans   // alternating signs, relative order preserved
}

console.log(RearrangePositive([3, 1, -2, -5, 2, -4]))