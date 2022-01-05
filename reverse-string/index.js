/**
 * Return a new string with the characters in
 * the reversed order of the given string.
 *
 * Characters should maintain their capitalizations.
 *
 * @param {String} str
 * @return {String} The string, with characters in
 * reversed order of str and maintaining
 * their capitalizations.
 */
function reverse(str) {
  /**
   * Version 1: Good ol' loop
   */
//   let finalStr = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     finalStr += str[i];
//   }

//   return finalStr;

  /**
   * Version 2: Split string into an array of characters
   * and use .reduce()
   * 
   * Note that you cannot reduce empty arrays and thus
   * need to handle empty strings :)
   */
//   const chars = str.split(""); 

//   return chars.length > 0 
//     ? chars.reduce((prev, current) => current + prev)
//     : "";

  /**
   * Version 3: Split string into an array of characters
   * and .reverse() the array, then .join() without a separator
   */
  return str.split("").reverse().join("");
}

module.exports = reverse;
