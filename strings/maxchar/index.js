/**
 * Given a string, return the character
 * that is most commonly used in the string.
 *
 * "Character" should include punctuation
 * and numbers as well.
 *
 * Note that for all test cases, there will only be
 * one character with the highest frequency. For
 * multiple characters with the highest frequency,
 * see the maxChars function.
 *
 * @param {String} str
 * @return {String} the character with the highest
 * frequency of appearance in str
 */
function maxChar(str) {
  // Create an object map where key = character,
  // value = frequency of appearance
  const charsMap = str.split("").reduce((accumulator, currentChar) => {
    accumulator[currentChar] = accumulator[currentChar]
      ? accumulator[currentChar] + 1
      : 1;

    return accumulator;
  }, {});

  // Checking for only the characters,
  // find the character with the highest frequency
  return Object.keys(charsMap).reduce((maxChar, currentChar) =>
    charsMap[currentChar] > charsMap[maxChar] ? currentChar : maxChar
  );
}

module.exports = maxChar;
