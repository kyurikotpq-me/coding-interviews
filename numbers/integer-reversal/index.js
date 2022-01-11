/**
 * Given an integer, return an integer
 * that has the reverse order of numbers.
 *
 * Negative signs should be maintained,
 * so -1234 should give -4321
 *
 * @param {int} n
 * @return {int} the reversed integer
 */
function reverseInt(n) {
  const nStr = `${n}`.split("").reverse();

  // Handle the negative sign, if any,
  // by moving it to the start of the array
  if (nStr[nStr.length - 1] == "-") {
    const minusSign = nStr.pop();
    nStr.unshift(minusSign);
  }

  return Number(nStr.join(""));
}

module.exports = reverseInt;
