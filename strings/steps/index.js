/**
 * Write a function that accepts a positive number N.
 * The function should console log a step shape
 * with N levels using the # character.  Make sure the
 * step has spaces on the right hand side!
 *
 * --- Examples
 *   steps(2)
 *       '# '
 *       '##'
 *   steps(3)
 *       '#  '
 *       '## '
 *       '###'
 *   steps(4)
 *       '#   '
 *       '##  '
 *       '### '
 *       '####'
 * 
 * The above instructions are obtained from:
 * https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/steps/index.js
 * 
 * @param {integer} n 
 * @return {undefined} Console.log your output!
 */
function steps(n) {
  /**
   * Version 1: Good ol' loop
   */
  for (r = 0; r < n; r++) {
    // For each row of console log
    // Form the string of hashtags first
    let row = "";
    for (_ = 0; _ <= r; _++) {
      row += "#";
    }

    // Add spaces afterwards
    const numSpaces = n - r;
    for (_ = 1; _ < numSpaces; _++) {
      row += " ";
    }

    console.log(row)
  }
}

module.exports = steps;
