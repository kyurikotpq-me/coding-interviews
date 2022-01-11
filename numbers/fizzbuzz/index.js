/**
 * Console log the numbers from 1 to n,
 * but for multiples of 3 print "fizz" instead of the number,
 * and for multiples of 5 print "buzz". For numbers which
 * are multiples of both 3 and 5, print "fizzbuzz".
 *
 * @param {integer} n
 */
function fizzBuzz(n) {
  /**
   * Version 1: Good ol' loop
   */
  for (i = 1; i <= n; i++) {
    const isMultiple3 = i % 3 == 0;
    const isMultiple5 = i % 5 == 0;

    if (isMultiple3 && isMultiple5) {
      console.log("fizzbuzz");
    } else if (!isMultiple3 && !isMultiple5) {
      console.log(i);
    } else {
      isMultiple3 ? console.log("fizz") : console.log("buzz");
    }
  }
}

module.exports = fizzBuzz;
