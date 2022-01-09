/**
 * Capitalize the first letter of each word in the string
 * and return this modified string.
 *
 * You can assume that the given string is
 * non-empty (i.e. str.length > 0) and that punctuation
 * would be at normal word boundaries (i.e. "p!nk" will not
 * be a test case)
 *
 * @param {string} str
 * @return {string} Modified string with capitalized words
 */
function capitalize(str) {
  // Use Regex to help us find words
  const wordRegex = /\b\w/g;

  // Replace all matches with capitalized first characters
  const newStr = str.replaceAll(
    wordRegex,
    (match) => `${match[0].toUpperCase()}${match.slice(1)}`
  );

  return newStr;
}

module.exports = capitalize;
