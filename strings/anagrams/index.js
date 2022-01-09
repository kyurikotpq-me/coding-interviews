/**
 * Count the number of Regex matches in a string
 * @param {string} str 
 * @param {RegExp} regex 
 * @param {boolean} returnStr whether to return the 
 * information in a string or object
 * @returns {Object|string} The object containing match information 
 * or a string that "fingerprints" the same information
 */
function matchAndCount(str, regex, returnStr) {
  const charsMap = {};

  // Count the number of times a character
  // appears in the string
  str.match(regex).forEach((char) => {
    charsMap[char] = !charsMap[char] ? 1 : charsMap[char] + 1;
  });

  // To make it easier for us later in the anagram
  // determination, we'll generate a "fingerprint" 
  // string that summarizes 'char:number'
  if (returnStr) {
    const charsArr = [];
    for (char in charsMap) {
      charsArr.push(`${char}:${charsMap[char]}`);
    }
    return charsArr.sort().join("/");
  }

  return charsMap;
}

/**
 * Check if two provided strings are anagrams of each other.
 *
 * One string is an anagram of another if it uses the same
 * characters in the same quantity.
 *
 * Only consider alphabets and numbers, not spaces
 * or punctuation. Consider capital letters to be
 * the same as lower case.
 *
 * @param {string} strA
 * @param {string} strB
 * @return {boolean} Whether the strings are anagrams of each other.
 */
function anagrams(strA, strB) {
  // With help from https://regex101.com
  const alphanumericRegex = /[a-z\d]/g;

  // Get the RegEx matches for each string
  // and count the number of occurences of each unique letter
  const strAmatches = matchAndCount(strA.toLowerCase(), alphanumericRegex, true);
  const strBmatches = matchAndCount(strB.toLowerCase(), alphanumericRegex, true);

  // Check if the string fingerprint matches
  return strAmatches == strBmatches
}

module.exports = anagrams;
