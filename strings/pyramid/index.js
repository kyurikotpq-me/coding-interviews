/**
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape
 * with N levels using the # character.  Make sure the
 * pyramid has spaces on both the left *and* right hand sides
 *
 * --- Examples
 *   pyramid(1)
 *       '#'
 *   pyramid(2)
 *       ' # '
 *       '###'
 *   pyramid(3)
 *       '  #  '
 *       ' ### '
 *       '#####'
 *
 * The above instructions are obtained from:
 * https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/pyramid/test.js
 *
 * @param {integer} n
 * @return {undefined} Console.log your output!
 */
function pyramid(n) {
  /**
   * Version 1: Good ol' loop
   */
  // The total number of hashtags we need
  // to have in our last row, which also happens
  // to be our total string length!
  const totalNumHashtags = 1 + 2 * n;

  // In this case, r will track the number of hashtags
  for (r = 0; r < n; r++) {
    // Form ONE side of the spaces
    const numHashtags = 1 + 2 * r;
    const numSpaces = (totalNumHashtags - numHashtags) / 2;
    let spacesStr = "";

    for (_ = 1; _ < numSpaces; _++) {
      spacesStr += " ";
    }

    // Form the string of hashtags
    let hashtagsStr = "";
    for (_ = 1; _ <= numHashtags; _++) {
      hashtagsStr += "#";
    }

    // Form the pyramid row. Thanks ES6!
    // Alternatively, you could do
    // spacesStr + hashtagsStr + spacesStr
    console.log(`${spacesStr}${hashtagsStr}${spacesStr}`);
  }
}

module.exports = pyramid;
