const Anagram = (s, t) => {

    // If lengths are different, return false
    if (s.length !== t.length) return false;

    let count = {};

    // Count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Decrease counts using characters in t
    for (let char of t) {
        count[char] = (count[char] || 0) - 1;

        // If count is negative, characters don't match
        if (count[char] < 0) return false;
    }

    // All characters matched
    return true;
};

console.log(Anagram("listen", "silent")); // true
console.log(Anagram("hello", "world"));   // false