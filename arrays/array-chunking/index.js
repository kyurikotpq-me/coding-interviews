/**
 * Given an array and chunk size, divide the array
 * into many subarrays, where each subarray is
 * of length size.
 *
 * You can assume array.length > 0, size > 0.
 *
 * @param {array} array
 * @param {integer} size
 */
function chunk(array, size) {
  const chunked = array.reduce(
    (accumulator, current) => {
      // Retrieve the last array in accumulator
      const lastSubarray = accumulator[accumulator.length - 1];

      if (lastSubarray.length < size) {
        // If the lastSubarray has not reached the chunk size,
        // add the current element to it!
        accumulator[accumulator.length - 1].push(current);
      } else {
        // Else, push a new subarray to accumulator
        // consisting of the current element as the first element!
        accumulator.push([current]);
      }

      return accumulator;
    },
    // Start with one element—an empty array—so 
    // that we can skip one if-else statement
    [[]]
  );

  return chunked;
}

module.exports = chunk;
