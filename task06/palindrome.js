function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return "is not a palindrome";
        }
    }
    return "is a palindrome";
}

// Test cases
console.log(isPalindrome("radar")); // is palindrome
console.log(isPalindrome("hello")); // is not a palidrome
console.log(isPalindrome("a")); // is a palindrome
console.log(isPalindrome("abba")); // is a palindrome