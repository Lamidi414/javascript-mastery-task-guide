/**
 * Write a function to Count Vowels in a String
 * ------------------------------------------------------------
 *
  Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
 */

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels("Hello World")); // 3
