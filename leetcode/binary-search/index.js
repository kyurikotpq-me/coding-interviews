/**
 * Given an array of integers nums which is sorted in
 * ascending order, and an integer target, write a function
 * to search target in nums. If target exists, then
 * return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 * (a.k.a perform a binary search)
 *
 * The above instructions is from LeetCode at:
 * https://leetcode.com/problems/binary-search/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number} The index of the target, -1 if not found
 */
function search(nums, target) {
  // This is cheating :P
  // return nums.indexOf(target)

  /**
   * To perform a binary search,
   *
   * 0) Make the sure the values are sorted (already done)
   *
   * 1) While there are values left to search (a.k.a numItems > 1):
   * 1.1) Start searching from the middle of the array
   * 1.2) Is nums[currentPointer] == target?
   * - Yes: Target exists at index currentPointer, return currentPointer
   * - No: Does target > nums[currentPointer]?
   *   - Yes: target exists on later half of array, so let's focus on that
   *   (a.k.a set min = pointer, pointer set to half of the left half,
   *   and set new numItems value!)
   *
   *   - No: If target < nums[currentPointer],
   *   - Target exists on earlier half of array, so set new max, numItems, and pointer
   *
   * 2) Return -1 (not found)
   */
  let numItems = nums.length;
  let pointer = Math.floor(numItems / 2);
  let min = 0,
    max = nums.length - 1;

  while (numItems > 1) {
    let middleItem = nums[pointer];

    if (target == middleItem) {
      return pointer;
    } else if (target > middleItem) {
      min = pointer;
      pointer = max - Math.floor((max - pointer) / 2);
    } else if (target < middleItem) {
      max = pointer;
      pointer = min + Math.floor((pointer - min) / 2);
    }
    
    numItems = max - min;
  }

  // If there is only one element, there is no need
  // to "search", just check if that one element is equal or not
  if (numItems == 1) {
    //   console.log("Target: ", target, "Pointer:", pointer)
    return target == nums[pointer] ? pointer : -1;
  }
}

module.exports = search;
