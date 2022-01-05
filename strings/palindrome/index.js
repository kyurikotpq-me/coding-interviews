/**
 * Given a string, return true if the string 
 * is a palindrome or false if it is not.
 * 
 * Palindromes are strings that form the same
 * word if it is reversed.
 * 
 * Account for spaces and punctuation in 
 * your implementation.
 * 
 * @param {String} str 
 * @param {Boolean} Whether str is a palindrome or not
 */
function palindrome(str) {
    const reversed = str.split("").reverse().join("");
    return reversed == str;
}

module.exports = palindrome;