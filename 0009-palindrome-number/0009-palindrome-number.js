/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        // Negative numbers are not palindromes
    if (x < 0) return false;

    // Initialize variables
    let original = x;
    let reversed = 0;

    // Reverse the integer
    while (x > 0) {
        let lastDigit = x % 10;         // Get the last digit
        reversed = reversed * 10 + lastDigit;  // Build the reversed number
        x = Math.floor(x / 10);         // Remove the last digit from x
    }

    // Check if reversed number equals the original
    return reversed === original;

}